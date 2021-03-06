import React, { useContext} from 'react';
import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext';

const Alerta = () => {

   // Extraer mensaje de error para Usuarios
   const AuthContext = useContext(authContext);
   const { mensaje } = AuthContext;

   // Extraer el mensaje de error de archivos
   const AppContext = useContext( appContext );
   const { mensaje_archivo } = AppContext;

    return ( 
   
          
            <div className="alert alert-primary ">
               { mensaje || mensaje_archivo }
               
            </div>
     );
}
 
export default Alerta;