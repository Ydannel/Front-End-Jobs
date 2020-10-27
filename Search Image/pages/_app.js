//crear un archivo sobre un layout
//aqui va el provider del context 
//)2
import App from 'next/app';
import firebase, {FirebaseContext} from '../Firebase';

//aqui ira el hook de autenticacion, que luego esta disponible en el provider

import useAuth from '../Hooks/UseAuth';

const MyApp = props =>{

  const usuario = useAuth();
  //console.log(usuario);
  

    const {Component, pageProps}= props;
    return(
            <FirebaseContext.Provider
            //valores a usar
              value={{
                   firebase,
                   usuario
              }}
            >
                <Component {...pageProps}/>
            </FirebaseContext.Provider>
    );
}
export default MyApp;