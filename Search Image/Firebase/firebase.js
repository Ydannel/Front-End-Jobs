//3)inicializar firebase para usarse
import app from 'firebase/app';
import 'firebase/auth'

import firebaseConfig from './config';
//para el crud
import 'firebase/firestore';
//para las imagenes 

import 'firebase/storage';

//clase para metodos de usuarios

class Firebase{
    constructor() {
        //si no hay una aplicacion ya creada, entonces:
        if(!app.apps.length){
            app.initializeApp(firebaseConfig);
        }   
        this.auth= app.auth();
        this.db = app.firestore();
        this.storage= app.storage();
    }
    //registrar usuarios 
    async registrar(nombre, email, password){
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);
        
         //lo crea y lo actualiza para que pase a verse en pantalla
        return await nuevoUsuario.user.updateProfile({
            displayName: nombre
        })
          
    }

    //inica sesion el usuario

    async Login(email, password){
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    //cerrando la sesion de firebase

    async cerrrarSesion(){
        await firebase.auth.signOut();
    }
}
//instancia de la clase
const firebase = new Firebase();

export default firebase;