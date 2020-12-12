import React, {useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import nodata from '../../Source/no_data.svg'
const ListadoTareas = () => {

    // Extrar proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

    // Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] =  proyecto;

    // Elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual._id)
    }

    return ( 
        <>
            <h2>Proyecto: {proyectoActual.nombre} </h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0 
                    ? (<div className="container-fluid text-center">
                        <li className="tarea">
                            <img className="img-fluid rounded mx-auto d-block" src={nodata} width="50%" alt="no have any data "/> 
                            </li> <li className="tarea"> 
                            <p className="font-weight-bold">No hay tareas</p></li></div>) 
                    : 
                    tareasproyecto.map(tarea => (
                        < Tarea 
                        key={tarea._id}
                        tarea={tarea}/>
                          ))
                    }
                   
            </ul>

            <button     
                className="btn btn-red"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </>
     );
}
 
export default ListadoTareas;