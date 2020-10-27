import React, {useEffect, useContext, useState} from 'react';
import {FirebaseContext} from '../Firebase/index'

/**
 * 
 * hook utilizado para que tome el parametro por el cual sera ordenado
 * esto lo hara con el prop de 'orden'
 */
const useProductos = orden =>{
          
            //crear el state
            const [productos, guardarProductos] = useState([]);
            const {firebase} = useContext(FirebaseContext);
            useEffect( ()=>{
            const obtenerProductos = () => {

                //consulta a la db
                firebase.db.collection('productos').orderBy(orden, 'desc').onSnapshot(manejarSnapshot)

            }
            obtenerProductos();

            }, []);

            function manejarSnapshot(snapshot){
            //acceder a los documentos

            const productos = snapshot.docs.map(doc => {
                return{
                id: doc.id,
                ...doc.data()
                }
            });
            
            guardarProductos(productos);
            
            }

          return {
              productos
          }
}

export default useProductos;