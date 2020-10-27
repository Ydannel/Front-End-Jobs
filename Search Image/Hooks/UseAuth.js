//ese hook estara validando todo el tiempo la sesion del usuario
//

import React, {useState, useEffect} from 'react';
import firebase from '../firebase';

//funcion que estara disponible en _app.js en el provider

function useAuth(){
 
          const [usuarioAuth, guardarUsuarioAut]= useState(null); //iniciara como null ya que aun no hay user autenticado

         //estara evaluando si algun usuario inicia sesion
          useEffect(
              () => {
                 const unsuscribe = firebase.auth.onAuthStateChanged( user =>{
                     //si hay un usuario
                    if (user ){
                          guardarUsuarioAut(user);
                    }
                    else{
                        //si no hay usuario
                        guardarUsuarioAut(null);
                    }
                 });
                 return () => unsuscribe();
              }, [] );
              return usuarioAuth;
        }
export default useAuth;