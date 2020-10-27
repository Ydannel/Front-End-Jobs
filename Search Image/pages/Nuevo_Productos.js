import React, {useState, useContext} from 'react';
import Layout from '../Components/Layouts/Layout';
import {Error} from '../Components/UI/Errores';
import {FirebaseContext} from '../Firebase/index';
import Router, {useRouter} from 'next/router';
import Error404 from '../Components/Layouts/404';
//dependencia para sunida de fotos 

import FileUploader from 'react-firebase-file-uploader';

//validaciones para el form usando custom hooks

import useValidacion from '../Hooks/UseValidator';
import validarProductos from '../Validaciones/validacionProductos';

//cada form tiene su state inicial, el cual albarcara sus valores 

const STATE_INICIAL ={
    nombre: '', 
    empresa: '',
    imagen: '',
    url: '',
    descripcion:''
}

const NuevoProducto = () => {

    //state para las imagenes 

    const [nombreImagen, guardarNombre] = useState('');
    const [subiendo, guardarSubida]= useState(false);
    const [progreso, guardarProgreso] = useState(0);
    const [urlImagen, guardarUrlImagen]= useState('');
      //errores para cuando se ingrese sesion a firebase 

      const [errores, guardarErrores] = useState(false);

        //se deben crear los 3 parametros a pasar al hook personalizado
    const {
        //state
        valores,
        error,
        //funciones

        handleSubmit,
        handleChange,
        handleBlur
        
       } = useValidacion(STATE_INICIAL, validarProductos, crearPublicacion);

       //extraccion de valores

       const {nombre, empresa, imagen, url, descripcion} = valores;
           //hook para redireccionar
           const router = useRouter();

       //context que contiene las operaciones para la creacion del producto

       const {usuario, firebase}= useContext(FirebaseContext)
            async function crearPublicacion(){

                //si el usuario no esta autenticado

                if (!usuario){
                    return router.push('/login');
                }
                //creacion del objeto de nuevo producto

                const producto ={
                    //lo que el usuario nos proporsiona:

                    nombre,
                    empresa,
                    url,
                    urlImagen,
                    descripcion,
                    //lo que creamos a partir de eso:
                    votos: 0,
                    comentarios: [],
                    creado: Date.now(),
                    creador:{
                        id: usuario.uid,
                        nombre: usuario.displayName
                    },
                    haVotado: []
                }
                //insertarlo en la base de datos de firebase 

                firebase.db.collection('productos').add(producto);
                return router.push('/')
            }   

            //funciones de las imagenes 
            const handleUploadStart = () =>{
                guardarProgreso(0);
                guardarSubida(true);
            }
          //progreso de subida de la imagen
            const handleProgress = progreso => guardarProgreso({progreso});
            //en caso de que haya algun error
            const handleUploadError = error =>{
                guardarSubida(error);
                console.error(error);
            }
            //se subio correctamente
            const handleUploadSuccess = nombre =>{
                guardarProgreso(100);
                guardarSubida(false);
                guardarNombre(nombre)
                firebase
                .storage
                .ref("productos")
                .child(nombre)
                .getDownloadURL()
                .then(url => { 
                    console.log(url);
                    guardarUrlImagen(url);
                } )
            }
    return (
        <div className="ui container">
            <Layout>
                {
                    //si el usuario no esta autenticado, el no puede acceder a la pestana, de lo contrario si podra

                    !usuario ? <Error404></Error404> : (
                        <>
                        <h2 className=""> Crea un nuevo producto</h2>
                                            <div className="ui card fluid centered">
                                                <div className="content">
                                                <form className="ui form" 
                                                onSubmit={handleSubmit}
                                                noValidate
                                                >
                                                <fieldset className="field">
                                                    <legend>Informacion general</legend>
                                                    <div className="field">
                                                    <label htmlFor="input1">Nombre del producto</label>
                                                    
                                                    <input type="text" id="input1" name="nombre" 
                                                    value={nombre}
                                                    onChange={handleChange}  
                                                    onBlur={handleBlur}                  
                                                    className="form-control"/>
                                                    </div>
                                                    
                                                    {
                                                        //mostrar los erroes que pueda haber en cada campo
                                                        error.nombre && <Error>{error.nombre}</Error> 
                                                    }
                                                <div className="field">
                                                <label htmlFor="input2"> Nombre de la Empresa</label>
                                               
                                                <input type="text" id="input2" name="empresa" 
                                                value={empresa}
                                                onChange={handleChange}
                                                onBlur={handleBlur}                    
                                                className="form-control"/>
                                                </div>
                                                {
                                                    //mostrar los erroes que pueda haber en cada campo
                                                    error.empresa && <Error>{error.empresa}</Error> 
                                                }

                                                    <div className="field">
                                                    <label htmlFor="input4">Imagen del producto</label>
                                                    
                                                    <FileUploader 
                                                    randomizeFilename//pone nombres unicos y aleatorios para evitar que haya duplicados de nombres
                                                    storageRef={firebase.storage.ref("productos")}
                                                    onUploadStart={handleUploadStart}
                                                    onUploadError={handleUploadError}
                                                    onUploadSuccess={handleUploadSuccess}
                                                    onProgress={handleProgress}

                                                    accept='image/*'
                                                    id="input4" name="imagen" 
                                                    className="ui button orange"/>

                                                    </div>
                                
                                                    <div className="field">
                                                    <label htmlFor="input3">Direccion del sitio</label>
                                                  
                                                    <input type="url" id="input3" name="url" 
                                                    value={url}
                                                    onChange={handleChange}  
                                                    onBlur={handleBlur}     
                                                    placeholder="https://www.tu_sitio.com"             
                                                   />
                                                    </div>
                                                    
                                                    {
                                                        //mostrar los erroes que pueda haber en cada campo
                                                        error.url && <Error>{error.url}</Error> 
                                                    }

                                                </fieldset>
                                                <fieldset className="field">
                                                    <legend> Acerca del producto</legend>

                                                    <div className="field">
                                                    <label htmlFor="input6">Descripcion del producto</label>
                                                    
                                                    <textarea  id="input6" name="descripcion" 
                                                    value={descripcion}
                                                    onChange={handleChange}  
                                                    onBlur={handleBlur}                  
                                                    className="form-control"/>
                                                    </div>
                                                    
                                                    {
                                                        //mostrar los erroes que pueda haber en cada campo
                                                        error.descripcion && <Error>{error.descripcion}</Error> 
                                                    }
                                                </fieldset>
                                                {
                                                    // errores && <Error>{errores} </Error>
                                                }
                                                <button type="submit" className="ui fluid button black"> Crear Producto</button>
                                            
                                    </form>
                                    </div>
                                    </div>
                        </>
                    )
                }
         
            </Layout>
        </div>
      );
}
export default NuevoProducto;