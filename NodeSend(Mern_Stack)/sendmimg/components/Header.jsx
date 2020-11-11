import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext';

const Header = () => {
    
    // routing 
    const router = useRouter();

      // Extraer el Usuario autenticado del Storage 
    const AuthContext = useContext( authContext );
    const { usuario, usuarioAutenticado,  cerrarSesion } = AuthContext;

      // Context de la aplicación
    const AppContext = useContext( appContext );
    const { limpiarState } = AppContext;

    useEffect(() => {
        usuarioAutenticado()
    }, []);

    const redireccionar = () => {
        router.push('/');
        limpiarState();
    }



    return (
         <> 
         <nav className="border split-nav background">
            <div className="nav-brand headline ">

                <img src="/download.svg"
                onClick={() => redireccionar() }
                width="15%"
                />
                 Image Send
            </div>
            <div className="collapsible-body">
                 
             {
                    usuario ? (
                     
                     <>    
                     <ul className="inline">
                         <li>
                             <p className="">Hola {usuario.nombre}</p>
                          
                         </li>
                         <li>
                            <button 
                                className="button button-text"
                                onClick={() => cerrarSesion() }
                            >Cerrar Sesión</button>
                            
                          </li>
                         </ul>  
                           
                      
                            </>
                      ) : (
               
    
              <div>
                  <Link href ="/login">
                  <button className="second-button second-button-text">Iniciar sesion</button>
                  </Link>
                  <Link href ="/crear_cuenta">
                  <button className="button button-text">Crear Cuenta</button>
                  </Link>
              </div>
                    )}

                </div>
          
         </nav>
          
    </>
     );
}
 
export default Header;