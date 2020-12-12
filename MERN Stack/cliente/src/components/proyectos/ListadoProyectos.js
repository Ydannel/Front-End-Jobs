import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import AlertaContext from '../../context/alertas/alertaContext';
import noproyect from '../../Source/list.svg';

const ListadoProyectos = () => {

    // Extrar proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        // si hay un error
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje]);

    // revisar si proyectos tiene contenido
    if(proyectos.length === 0 ) return (
                                      <div className="container-fluid text-center">
                                          <img src={noproyect} className="img-fluid rounded mx-auto d-block" width="50%" alt="start create any proyect" />
                                       <p>Aun no hay un proyecto creado, empieza creando uno</p>
 
                                      </div>
                                 ) ;

    return ( 

        <ul className="listado-proyectos">
            
        
            { alerta   ? ( <div className={`alerta ${alerta.categoria} `}>{alerta.msg}</div>  ) : null  }

            {proyectos.map(
                  proyecto=> (
                 <Proyecto 
                 key ={proyecto._id}
                 proyecto={proyecto}
                     />
                  )
              )}
           
        </ul>
     );
}
 
export default ListadoProyectos;