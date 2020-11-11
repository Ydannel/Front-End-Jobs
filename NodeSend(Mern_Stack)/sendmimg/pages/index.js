import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import Alerta from '../components/Alerta';
import Dropzone from '../components/Dropzone';
import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext';
import Link from 'next/link';


const Index = () => {

  // Extraer el Usuario autenticado del Storage 
  const AuthContext = useContext( authContext );
  const { usuarioAutenticado } = AuthContext;

  // Extraer el mensaje de error de archivos
  const AppContext = useContext( appContext );
  const { mensaje_archivo, url } = AppContext;
  
  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) {
      usuarioAutenticado()
    }
   
  }, []);

  return ( 
    <Layout>
        <div className="text-center">
          { url ? (
            <>
              <p className="">
                  <span className="second-button-text">Tu URL es:</span> {`${process.env.frontendURL}/enlaces/${url}`} 
              </p>
              <button 
                  type="button"
                  className="paper-btn button btn-block"
                  onClick={() => navigator.clipboard.writeText(`${process.env.frontendURL}/enlaces/${url}`) }
              >Copiar Enlace</button>
            </>
          ) : (
            <>
            { mensaje_archivo && <Alerta /> }

              <div className="row">
                <div className="col-6 col">
                    <Dropzone />
                </div>
                  
                  <div className="col-6 col">
                      <h2 className="headline text-center">Compartir archivos de forma sencilla y privada</h2> 
                      <p className="text-center">
                        <span className="spaner">SendImage</span> te permite compartir archivos con cifrado de extremo a extremo y un archivo que es eliminado después de ser descargado. Así que puedes mantener lo que compartes en privado y asegurarte de que tus cosas no permanezcan internet para siempre.
                      </p>
                     <div className="button"> 
                        <Link  href="/crear_cuenta">
                              <a>Crea una cuenta para mayores beneficios</a>
                          </Link>

                     </div> 
                     
                  </div>
              </div>
            </>
          )}
        </div>
    </Layout>
   );
}
 
export default Index;