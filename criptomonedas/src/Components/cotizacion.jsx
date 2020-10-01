import React from 'react';
const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    return ( 
  <div>
      <div className="title"> Resultados</div>
     <div class="alert alert-dark" role="alert">
         <p className="has-text-weight-bold"> El resultado es:</p>
                  {resultado.PRICE}
            </div>
                <div class="alert alert-success" role="alert">
                <p className="has-text-weight-bold"> El precio mas alto es:</p>  
                <p className="has-text-danger has-text-weight-bold"> {resultado.HIGHDAY}</p>
            </div>
            <div class="alert alert-danger" role="alert">
                <p className="has-text-weight-bold">  El precio mas bajo es:</p>
                 <p className="has-text-success has-text-weight-bold">{resultado.LOWDAY}</p> 
            </div>
            <div class="alert alert-dark" role="alert">
            <p className="has-text-weight-bold">La variacion de ultimas 24h es: </p>  {resultado.CHANGEPCT24HOUR}
            </div>
            <div class="alert alert-dark" role="alert">
            <p className="has-text-weight-bold">Ultima actualizacion</p>   {resultado.LASTUPDATE}
            </div>
  </div>
     );
}
export default Cotizacion ;