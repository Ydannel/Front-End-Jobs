export default function validacionIniciarSesion(valores){
    let errores={}


    if(!valores.email){
        errores.email="El email es obligatorio";
    }
    //validacion si ponen otro caracter invalido que no sea la @
    //con expreciones regulares

    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)
        ){
      errores.email="El email no es valido"
    }

    //validar la contrasenia

    if(!valores.password){
          errores.password="El password es obligatorio"
    }
    //si es pass es menos de 6 caracteres
    else if(valores.password.length < 6 ){
          errores.password="El password debe de ser minimo 6 caracteres"
    }

    return errores;
}