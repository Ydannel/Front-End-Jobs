import React, {  useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import appContext from '../context/app/appContext';
import authContext from '../context/auth/authContext';
import Formulario from './Form';


//use calback usado para multiples rendering de la app
const Dropzone = () => {

    // Context de la app
    const AppContext = useContext(appContext);
    const { cargando, mostrarAlerta, subirArchivo, crearEnlace } = AppContext;

    // Context de autenticación
    const AuthContext = useContext(authContext);
    const { usuario, autenticado } = AuthContext;

    const onDropRejected = () => {
        mostrarAlerta('No se pudo subir, el Limite es 1MB, obten una cuenta gratis para subir archivos más grandes');
    }

    const onDropAccepted = useCallback( async (acceptedFiles) => {
        // Crear un form Data
        const formData = new FormData();
        //crea el formdata
        formData.append('archivo', acceptedFiles[0]);

        subirArchivo(formData, acceptedFiles[0].path);
    }, []);


    const maxSize = autenticado ? 1000000000000 : 1000000;

    // Extraer contenido de Dropzone
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({onDropAccepted, onDropRejected, maxSize});

    const archivos = acceptedFiles.map( archivo => (
        <li key={archivo.lastModified} className="">
            <p className="">{archivo.path}</p> 
            <p className="">{
            //mostrar en MB
            (archivo.size / Math.pow(1024, 2)).toFixed(2) } MB</p>
        </li>
    ) );




    return ( 
        <div className="">
                    <br/>
                    <br/>
            { 
            //Si tengo ya un archivo subido, se mostrara el listado de archivos para ponerle configuracion
            //en caso contrario, subir un archivo
            acceptedFiles.length > 0 ? (
                <div className=" text-center">
                    
                    <h4 className="headline">Archivos</h4>
                    <ul>
                        {archivos}
                    </ul>

                    {
                        autenticado ? <Formulario /> : ""
                    }

                     { //spinner  
                     cargando ? <p className="">Subiendo Archivo...</p> : (
                     
                     <button
                            className="paper-btn btn-block button"
                            onClick={ () => crearEnlace()  }
                        >
                            Crear Enlace
                        </button>
                    )}


                </div>

            ) : (
                <div { ...getRootProps({ className: 'dropzone  paper container-lg card '  }) }>
                   <div className="border-dotted border-thick margin-top-small padding-left-large 
                             padding-right-large padding-top-large padding-bottom-large">
                    <input className="card-body" { ...getInputProps() } />
                        {
                            isDragActive ? <p className="button-text"> Suelta el archivo </p> :
                            <div className="">
                                <p className="button-text">Selecciona un archivo y arrastralo aquí</p>
                                <button className="paper-btn btn-block button" >
                                    Selecciona archivos para subir
                                </button>
                            </div>
                        }
                        </div>
                </div>
            ) }
        </div>
     );
}
 
export default Dropzone;