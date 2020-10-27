import React, {useState, useEffect} from 'react';

//para buenas practicas, el archivo debe de tener use primero 

//fn = funcion 
const useValidator = (stateInicial, validar, fn) => {
      
    //state de los valores que introucira el usuario
    const [valores, guardarValores] = useState(stateInicial);

    //de errores de la validacion

    const [error, guardarError]= useState({});

     //guardar las subidas de los formularios que guarde el usuario

    const [subirform, guardarSUbidaForm]= useState(false); //con useEffect cambiara a true


    useEffect(
        ()=>{
            //si esta cambia a true, entonces: 
       if(subirform){
           //revisar si el objeto error no esta vacio 
         const noError = Object.keys(error).length === 0;
         //si no hay errores, se ejecutara la funcion
         if(noError){
             fn(); //funcion que ejecurata en le componente ya sea: 
             /**
              * creacion de un producto
              * creacion de una cuenta
              * inicio de sesion
              */
         }
         //despues se reinicia el formulario en cuestion uwu
         guardarSUbidaForm(false);
       }
        },[error]
    )

  //Funcion que ejecutara si el usuario esta escribiendo algo
   const handleChange = e =>{
       guardarValores({
           ...valores,
           [e.target.name] : e.target.value
       })
   }

   //funcion que se ejecutara cuando el usuario suba el formulario 

   
        const handleSubmit = e =>{
            e.preventDefault();

            //aqui se validaran los datos que haya ingresado el usuario 
            //validar es una funcion
            //valores es un state
            const errores_Validacion = validar(valores);
            guardarError(errores_Validacion);
            guardarSUbidaForm(true);
        }

        //cuando se realiza el evento de blur
        const handleBlur = () =>{
            const errores_Validacion = validar(valores);
            guardarError(errores_Validacion);
        }
    return {
        //state
        valores,
        error,
        subirform,

        //funciones

        handleSubmit,
        handleChange,
        handleBlur
        
    }
}
export default useValidator;