import styled from '@emotion/styled';
import Layout_P from '../Components/Layouts/Layout'
import React from 'react';
import Detalles from '../Components/Layouts/Listando_productos'
import useProductos from '../Hooks/useProductos'

const Populares = () => {
    //aqui se le pasa por props el orden que va a coger a la hora de ordenarse los productos
  const {productos} = useProductos('votos');
  return ( 
    
    <div className="ui container">
      <Layout_P>
          <h1 className="ui center aligned header">Listado de productos mas populares</h1>

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
 
export default Populares;