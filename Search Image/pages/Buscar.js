import React, {useEffect, useState} from 'react';
import Layout from '../Components/Layouts/Layout'
import {useRouter} from 'next/router'
import Detalles from '../Components/Layouts/Listando_productos'
import useProductos from '../Hooks/useProductos'

//aqui tiene que leerse lo que se esta pasando desde buscador .js 

//aqui se lee la busqueda 
const BuscarInfo = () => {
    const router = useRouter();
    //sacando los valores 
    const {query : {q} } = router;

    //todos los productos 
    const {productos} = useProductos('creado');
    const [resultado, guardarResultado] = useState([]);
    useEffect(() =>{
          //hacerlo minusculas
        const busqueda = q.toLowerCase();
        const filtro = productos.filter( 
            //acceder a los objetos
            producto =>{
            return(
                //aqui defines lo que se buscara
                //busqueda por nombre
                producto.nombre.toLowerCase().includes(busqueda) ||
                //busqueda por descripcion
                producto.descripcion.toLowerCase().includes(busqueda)
            )
        });

        guardarResultado(filtro);


    }, [q, productos])
  

    return ( 
        <div>
             <Layout>
             
          <h1 className="ui header center aligned">Resultados de busqueda</h1>

          <div>
            {resultado.map (producto =>(
              <Detalles
              key={producto.id}
              producto={producto}
              />
            ))}
            
          </div>
             </Layout>
        </div>
     );
}
 
export default BuscarInfo;