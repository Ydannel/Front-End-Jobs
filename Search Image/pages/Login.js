import React, {useState} from 'react';
import Layout from '../Components/Layouts/Layout';
import {Error} from '../Components/UI/Errores';
import firebase from '../Firebase/index';
import Router from 'next/router';

//validaciones para el form usando custom hooks

import useValidacion from '../Hooks/UseValidator';
import validarInicarSesion from '../Validaciones/validarInicarSesion';

//cada form tiene su state inicial, el cual albarcara sus valores 

const STATE_INICIAL ={ 
  email: '',
  password: ''
}

const IniciarSecion = () => {
  //errores para cuando se ingrese sesion a firebase 

    const [errores, guardarErrores] = useState(false);

      //se deben crear los 3 parametros a pasar al hook personalizado
  const {
      //state
      valores,
      error,
      //funciones

      handleSubmit,
      handleChange,
      handleBlur
      
     } = useValidacion(STATE_INICIAL, validarInicarSesion, iniciarSesion);

     //extraccion de valores

     const {email, password} = valores;

      async  function iniciarSesion(){
          //se creara la cuenta 
          try {
             await firebase.Login(email, password);   
             console.log("Ha iniciado sesion ")
             //si todo fue correcto, es enviado a la pagina de inicio
             Router.push('/');

          } catch (error) {
              console.error('Error al iniciar sesion', error);
              //respuesta a error
              guardarErrores(error.message);
          }
          
     }

  return ( 
      <div className= "ui centered container"> 
      <Layout>
             <div className="ui centered card fluid">
                <h2 className="center aligned header"> Inicia Sesion</h2>
                  <div >
                      <div className="content">
                      <form className="ui form text-center" 
                      onSubmit={handleSubmit}
                      noValidate
                      >

                          <div className="field">
                          <input type="email"  name="email" 
                          value={email}
                          onChange={handleChange}
                          onBlur={handleBlur}                    
                          />
                          </div>

                          {
                               //mostrar los erroes que pueda haber en cada campo
                               error.email && <Error>{error.email}</Error> 
                           }
                          <div className="field">
                          <input type="password" name="password" 
                          value={password}
                          onChange={handleChange}
                          onBlur={handleBlur}   
                          placeholder="Clave"                 
                          />
                          
                          </div>
                          {
                               //mostrar los erroes que pueda haber en cada campo
                               error.password && <Error>{error.password}</Error> 
                           }


                           {
                               errores && <Error>{errores} </Error>
                           }
                          <button type="submit" className="ui black fluid basic button"> Inicia sesion</button>
                       
              </form>
           </div>
       </div>
  </div>
      </Layout>
  </div>
   );
}
 
export default IniciarSecion;