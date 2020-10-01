import React from 'react';
import Gasto from './Gasto';
//hace una iteracion con la app y los gastos
function Listados({gastos}){
    return(
        <div>
            <h2 className="text-center">Listado de gastos</h2>
            {gastos.map(gasto => (
               <Gasto
               key ={gasto.id}
               gasto={gasto}
               > </Gasto>
            ))}
        </div>
    )
}
export default Listados;