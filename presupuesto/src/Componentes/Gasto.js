import React from 'react';
//imprime la informacion de los gastos

const Gasto =({gasto}) =>
(
     <li className="list-group-item">
         <p>
             {gasto.nombreGasto}
            <span>$ {gasto.cantidadGasto}</span>
         </p>
     </li>
);

export default Gasto;