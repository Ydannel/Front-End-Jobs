import React from 'react';
import Imagenw from './img'

const Lista = ({imagenes}) => {
    return ( 
        <div className="row  row-cols-1 row-cols-md-3 g-4">
            {
                imagenes.map(
                    imagen =>(
                        <Imagenw
                        key={imagen.id}
                        imagen={imagen}
                        />
                    )
                )
            }
        </div>
     );
}
export default Lista;