import styled from '@emotion/styled';
import Layout_P from '../Components/Layouts/Layout'
import React from 'react';
import Detalles from '../Components/Layouts/Listando_productos'
import useProductos from '../Hooks/useProductos'

const Home = () => {

  const {productos} = useProductos('creado');
  
  return ( 
    
    <div className= "ui container">
      <Layout_P>
          <h1 className="ui center aligned header">Listado de productos</h1>

          <div>
            {productos.map (producto =>(
              <Detalles
              key={producto.id}
              producto={producto}
              />
            ))}
            
          </div>
      </Layout_P>
     
          </div>
   );
}
export default Home;