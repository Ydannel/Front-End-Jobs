/**
 * esta parte tiene que ver con el routing dinamico de las paginas
 * aqui se haran los comentarios y las votaciones
 */

 import React, {useEffect, useContext, useState} from 'react';
 import {useRouter} from 'next/router';
 import {FirebaseContext} from '../../Firebase/index';
 import Error404 from '../../Components/Layouts/404';
 import Layout from '../../Components/Layouts/Layout';
 import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {es} from 'date-fns/locale';


 const Producto = () => {

    //state de los componentes

    const [producto, guardarProducto]= useState({});
    const [error, guardarError] = useState(false);

    //cuando cargue la info, hacer una consulta
    const [consultarDB, guardarConsultaDB]= useState(true);

    //state para almacenar los comentarios 
    const [comentario, guardarComentario] = useState({});



    //1) primero hay que hacer un routing para obtener  el id, con el cual se pasa la data para mostrar
    const router = useRouter();
    //2) ya hecho eso, se jalara el id que esta conteniendo el routing

    const {query : {id}}= router;

    //3) como la primera vez lo pasa vacio, dara error, lo mejor es usar useeffect para controlar esa parte
    /************************************************************************************************* */
    //constext de firebase para hacer las consultas
    const {firebase, usuario} = useContext(FirebaseContext);

    /************************************************************************************************ */
     
    useEffect(()=>{
        //cuando este listo el id se ejecute
        if(id && consultarDB){
            //hacer la consulta
            const obtenerProducto = async () =>{
                //hace la consulta en base al id y lo trae
                const productoQuery = await firebase.db.collection('productos').doc(id);
                const producto = await productoQuery.get();
                   //en caso de que exista o no el producto en cuestion
                if(producto.exists){
                    guardarProducto(producto.data());
                    guardarConsultaDB(false);
                }
                else{
                    guardarError(true);
                    guardarConsultaDB(false);
                }
            }
            obtenerProducto();
        }

    }, [id, producto]);

    /*** poner un spiner */
    if(Object.keys(producto).length === 0  && !error) return <div class="ui loading segment">Cargando....</div>;
   

    const {comentarios, creado, descripcion, empresa, nombre, url, urlImagen, votos, creador, haVotado}= producto;

        //VOTACIONES***************************************
    const votarProducto =() =>{
        //si no hay ningun usuario, retornar a la pagina principal
       if(!usuario) {return router.push('/login');}
       //obtener y realizar la suma de un nuevo voto

       const nuevvoTotal = votos + 1;
       //verificar que el usuario actual haya hecho alguna votacion, para evitar la duplicacion

       if(haVotado.includes(usuario.uid)) return;

       //guarda el id  del que ha votado
       const nuevohaVotado = [...haVotado, usuario.uid]
       //actualizar en la db
       firebase.db.collection('productos').doc(id).update({votos : nuevvoTotal, haVotado: nuevohaVotado});
       //actualizar el state
       guardarProducto({
           ...producto,
           votos: nuevvoTotal
       })
       guardarConsultaDB(true); //como hay un voto, se consulta a la base de datos

    }

    //COMENTARIOS 

    const comentarioOnChange = e =>{
        guardarComentario({
            ...comentario,
            [e.target.name] : e.target.value
        })
    }
         // identificar si el comentario es del creador
         const esCreador = id =>{
       if(creador.id == id){
           return true
       }
         }

    const agregarComentario = e =>{
        e.preventDefault();
        if(!usuario) {return router.push('/login');}

        //info al comentario

        comentario.usuarioId = usuario.uid;
        comentario.usuarioNombre=usuario.displayName;

        //copia de comentarios y despues agregar
        const nuevosComents= [...comentarios, comentario];

        //actualizar el db
        firebase.db.collection('productos').doc(id).update({comentarios: nuevosComents});
        //actualizar el state
         guardarProducto({
             ...producto,
             comentarios: nuevosComents
         })
         guardarConsultaDB(true);

    }

    /*****************BORRAR****************** */

    //funcion para verificar si el creador es el mismo que esta autenticado

    const puedeBorrarP = () =>{
        //si no hay un usuario autenticado
        if(!usuario) return false;
         //si el creador es igual al usuario
        if(creador.id === usuario.uid){return true}

    }
       //lo elimina de la db

       const eliminarProducto = async () =>{
        if(!usuario) {return router.push('/login');}
        if(creador.id === usuario.uid){return router.push('/');}
        
           try {
            await firebase.db.collection('productos').doc(id).delete();
            router.push('/')


           } catch (error) {
               console.log(error);
               
           }
       }

    
     return ( 
         
         <Layout>
             { //si el error el verdadero entonces se muestra, de caso en que no haya errores, mostramos el componente
             error ? <Error404/>:
              (
                        <div>
                            <div className="ui segment">

                            <div classname="ui segment ">
                                 <div className="ui two column very relaxed grid">
                                      <div className="column">
                                                 {formatDistanceToNow( new Date(creado), {locale: es})} 
                                               
                                         </div>
                                        </div> 
                                </div>
                            <div className="ui two column very relaxed grid">
                                <div className="column">
                               
                                    <div className="content">
                                        <img className="image fluid center aligned" src={urlImagen} alt="plublicacion"
                                         width="100%"
                                        /> 


                                    </div>

                                <p>{descripcion} </p>
                                    {

                                        //solo comentara si el usuario esta autenticado en el sistema
                                        usuario && (<>
                                        <h2 className="ui center aligned header">Comentarios</h2>
                                        <form  onSubmit={agregarComentario} className="ui form">
                                            <input type="text" className="field" name="mensaje" 
                                            onChange={comentarioOnChange}
                                            />
                                            <button type="submit" className="ui button basic green"> Enviar</button>

                                        </form>
                                        </>
                                        )
                                    }

                                    <h2 className="ui center aligned header">Comentarios recientes</h2>
                                    {
                                        //si no hay aun comentarios entonces 
                                        comentarios.length === 0 ? 'Aun no hay comentarios ':(

                                        < div className="ui coments">
                                            <div className="ui card">
                                        <ul>
                                        {comentarios.map((comentario, i) =>(
                                            <li className="ui list"
                                            key={//para que haya mas orden
                                                `${comentario.usuarioId}- ${i}`}
                                            >     
                                                    <p className="text">{comentario.usuarioNombre}: {' '}   
                                                     {comentario.mensaje}</p>
                                               
                                                       
                                                {
                                                    //en es creador agregar estilos
                                                }
                                                {esCreador(comentario.usuarioId) && 'Creador de la publicacion'}
                                            </li>
                                            )) }
                                        </ul>
                                        </div>
                                        </div>

                                        )
                                    }
                                         


                                </div>
                                <div className="column">
                                    <aside> <a target="_blank" href={url}>Visitar Url</a> 
                                        <p>Publicado por: {creador.nombre}</p>
                                        <h3 className="ui center aligned header"> {empresa} </h3>
                                        <p> {votos} Votos</p>

                                        { //lo mismo va para esos usuarios que no estan autenticados, no pueden votar
                                        usuario && (
                                        <button className="ui button basic red" onClick={votarProducto}
                                        >Votar </button>
                                        )
                                        }

                                        </aside>
                                        {puedeBorrarP() && 
                                        <button 
                                        onClick={eliminarProducto}
                                        className="ui button red"> Borrar producto</button>
                                        }
                                </div>
                            </div>
                           
                            </div>
                        </div>
             )}
           

     </Layout>
      );
 }
  
 export default Producto;