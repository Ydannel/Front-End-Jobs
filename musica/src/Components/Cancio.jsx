import React from 'react';

const Cancion = ({letra}) => {  
    
    if(letra.length === 0) return null;
    return(
    
    <div className="container-fluid">
        <h3 className="font-weight-bold">Letra buscada</h3>
           <p>{letra}</p>
    </div>
);
} 
export default Cancion;