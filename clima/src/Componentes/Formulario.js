import React, {useState} from 'react';


function Formulario({datosConsulta}) {

    
    //poner lo estados y como inicirlo
    //busqueda es el state y guardar busqueda cambia el state (es this.setState)
    const[busqueda, guardarBusqueda] =useState({
        ciudad :'',
        pais :''
    })
        //lee datos 
    const handleChange = e =>{
        //cambia el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
        
    }

    //para el form

    const consultarClima = e => {
        //no carga tan alocado
        e.preventDefault();
        //datos a validar y pasa los datos al componente principal
        datosConsulta(busqueda);

    }


    return(
        <div className="container">
            <form className="field has-text-centered soft-form" 
                 onSubmit={consultarClima}
                 >
  
                         <p className="subtitle is-3 ">Saber del clima</p>
                         <br/>
                          {/*nombre-ciudad*/}
                              <div className="field is-grouped  is-grouped-centered">

                              <div className="control">
                                    <label className="has-text-weight-semibold">Ciudad </label>
                        
                              </div>
                              
                              <div className="control soft-element">
                                    <input type="text" 
                                name="ciudad" 
                                className="input"
                                placeholder="Nombre de la Ciudad"
                                    onChange={handleChange}
                                    
                                required
                                />
                              </div>
                              
                       </div>
                       <br/>
                               <div className="select soft-element">
                                  <select 
                                        onChange={handleChange}
                                        name="pais" required>
                                            <option value="">Selecciona un pais</option>
                                        <option value="US">Estados Unidos</option>
                                        <option value="MX">Mexico</option>
                                        <option value="AR">Argentina</option>
                                        <option value="CO">Colombia</option>
                                        <option value="ES">Espana</option>
                                        <option value="DO">Republica Dominicana</option>
                                        </select>
                                        
                                </div>
                                
                         <br/><br/>
                         <button className="button is-info soft-element"  type="submit">Solicitar clima de mi pais</button>
                         <br/><br/>
                 </form>
        </div>
    )
}

export default Formulario;
