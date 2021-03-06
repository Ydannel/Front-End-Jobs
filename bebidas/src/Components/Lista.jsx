import React, {useContext} from 'react';
import {RecetasContext} from '../Context/ResetasContext'
import Receta from './Receta';
const Listado = () => {
       const {recetas} = useContext(RecetasContext)
    return ( 
        <div className="container">
            <div className="row mt-5">
            {
                recetas.map(
                    receta =>(
                      <Receta
                      key={receta.idDrink}
                      receta={receta}
                      />
                    )
                )
            }
        </div>
        </div>
       
     );
}
 
export default Listado;