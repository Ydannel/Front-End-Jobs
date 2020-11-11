import React, {useState, useContext} from 'react';
import appContext from '../context/app/appContext';

const Formulario = () => {

    // Context de la app
    const AppContext = useContext(appContext);
    const { agregarPassword, agregarDescargas } = AppContext;


    //en caso de que el usuario quiera agregar una clave, la cual es opcional
    const [tienePassword, setTienePassword] = useState(false);

    return ( 
        <div className="form-group text-center">
            <div>
                <label className="headline">Eliminar despues de </label>
                <select 
                    className="form-group second-button second-button-text input-block"
                    onChange={ e => agregarDescargas( parseInt(e.target.value))}
                >
                    <option value=""  selected disabled>-- Seleccione --</option>
                    <option value="1">1 Descarga</option>
                    <option value="2">2 Descargas</option>
                    <option value="5">5 Descargas</option>
                    <option value="10">10 Descargas</option>
                </select>
            </div>

            <div className="">
                <div className="paper-check">
                    <label  for="paperChecks1" className="paper-check headline" >
                    <input 
                        type="checkbox" 
                        onChange={() => setTienePassword(!tienePassword) }
                        id="paperChecks1"
                    /><span className="">Proteger con Contraseña</span>
                    </label>
                   
                   
                </div>
                { tienePassword ? (
                    <input 
                        type="password" 
                        className="input-block background-success" 
                        onChange={ e => agregarPassword(e.target.value) }
                    />
                ) : null }


            </div>

        </div>
     );
}
 
export default Formulario;