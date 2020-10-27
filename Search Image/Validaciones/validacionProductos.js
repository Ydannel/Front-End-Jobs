export default function validacionDeCrearCuenta(valores){
    let errores={}

    //validar el nombre del producto
    if(!valores.nombre){
        errores.nombre= "El nombre es un campo obligatorio"
    }

    if(!valores.url){
        errores.url="La url es un campo obligatorio";
    }
    //validacion si ponden caracteres invalidos de la url

    else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
      errores.url="La url no es valida"
    }

    //validar la empresa

    if(!valores.empresa){
          errores.empresa="El nombre de la empresa es obligatorio"
    }
    //validacion de descripcion 
     if(!valores.descripcion ){
          errores.descripcion="El campo descripcion es obligatorio"
    }

    return errores;
}