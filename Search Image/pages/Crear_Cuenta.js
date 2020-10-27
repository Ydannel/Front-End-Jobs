import React, {useState} from 'react';
import Layout from '../Components/Layouts/Layout';
import {Error} from '../Components/UI/Errores';
import firebase from '../Firebase/index';
import Router from 'next/router';

//validaciones para el form usando custom hooks

import useValidacion from '../Hooks/UseValidator';
import validarCreacionDeCuenta from '../Validaciones/validarCreacion_de_Cuenta';

//cada form tiene su state inicial, el cual albarcara sus valores 

const STATE_INICIAL ={
    nombre: '', 
    email: '',
    password: ''
}

const CrearCuenta = () => {
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
        
       } = useValidacion(STATE_INICIAL, validarCreacionDeCuenta, crearCuenta);

       //extraccion de valores

       const {nombre, email, password} = valores;
        async  function crearCuenta(){
            //se creara la cuenta 
            try {
               await firebase.registrar(nombre, email, password);   
               console.log("creando la cuenta...");
               
               //si todo fue correcto, es enviado a la pagina de inicio
               Router.push('/');

            } catch (error) {
                console.error('Error al crearse el usuario', error);
                //respuesta a error
                guardarErrores(error.message);
            }
            
       }


    return ( 
        <div className= "ui container">
        <Layout>
               <div className="ui centered card fluid">
                  <h2 className="center aligned header"> Crea Una Nueva Cuenta</h2>
                    <div className="">
                        <div className="content">
                        <form className="ui form" 
                        onSubmit={handleSubmit}
                        noValidate
                        >
                            <div className="field">
                            <input type="text"  name="nombre" 
                            value={nombre}
                            onChange={handleChange}  
                            onBlur={handleBlur}     
                            placeholder="Nombre"             
                          />
                          
                            </div>
                              
                             {
                                 //mostrar los erroes que pueda haber en cada campo
                                 error.nombre && <Error>{error.nombre}</Error> 
                             }

                            <div className="md-form">
                            <input type="email" name="email" 
                            value={email}
                            onChange={handleChange}
                            onBlur={handleBlur}                    
                           placeholder="Correo"/>
                           
                            </div>

                            {
                                 //mostrar los erroes que pueda haber en cada campo
                                 error.email && <Error>{error.email}</Error> 
                             }
                            <div className="field">
                            <input type="password" id="input2" name="password" 
                            value={password}
                            onChange={handleChange}
                            onBlur={handleBlur}                    
                           placeholder="Password"/>
                            
                            </div>
                            {
                                 //mostrar los erroes que pueda haber en cada campo
                                 error.password && <Error>{error.password}</Error> 
                             }
                             {
                                 errores && <Error>{errores} </Error>
                             }
                            <button type="submit" className="ui button basic black fluid"> Crear Cuenta</button>
                         
                </form>
             </div>
         </div>
    </div>
        </Layout>
    </div>
     );
}
 
export default CrearCuenta;