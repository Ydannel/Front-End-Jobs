import React from 'react';
function Clima({resultado}) {
   
    //extraer valores de la api
    const{name, main} = resultado;
    if(!name) return null;

    //kelvil a celcius

    const kelvin = 273.15;
    return (
        <div className=" box has-text-centered soft-info ">
               <div >   
               <i className="fas fa-thermometer-empty soft-form fa-3x"></i> 
              
                    <h4 className="title is-2 "> {name} </h4> 
                        <p className="has-text-white-ter title is-3 soft-number has-text-centered ">{parseInt(main.temp -kelvin, 10) } <span>&#x2103;</span></p> 
                        
                       
                            <p className="has-text-white-ter title is-4  has-text-weight-semibold is-size-1-mobile is-size-1-touch">Max </p> 
                            <p className="title is-4 has-text-black has-text-weight-semibold"> 
                             {parseInt(main.temp_max -kelvin, 10) }&#x2103; 
                             <i className="ml-3 soft-form fas fa-2x fas fa-thermometer-full"></i></p>
                       
                       
                            <p className="has-text-white-ter title is-4  has-text-weight-semibold mr-4 is-size-1-mobile is-size-1-touch">Min </p> 
                            <p className="title is-4 has-text-white has-text-weight-semibold">
                                 {parseInt(main.temp_min -kelvin, 10) } &#x2103; 
                            <i className="ml-3 soft-form fas fa-2x fas fa-thermometer-half"></i></p>
                        
                       
                        
                       </div>
    </div>

    )
    
}
export default Clima;