import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {
    // Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    // obtener la función del context de tarea
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas } = tareasContext;

    // Función para agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id); // Fijar un proyecto actual
        obtenerTareas(id); // Filtrar las tareas cuando se de click
    }

    return ( 
        <li className="text-center">
            <button
                type="button"
                className="btn font-weight-bold display-2"
                onClick={ () => seleccionarProyecto(proyecto._id) }
            >{proyecto.nombre} </button>
        </li>
     );
}
 
export default Proyecto;