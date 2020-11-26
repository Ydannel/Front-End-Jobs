import React from 'react';

function Cita({cita, index, eliminarCita}) {

    const {nombre, tutor, fecha, hora, sintomas}=cita
    return(
        <div className="card">
            
        
        <div className="media-body ">
        <h3 className="mt-0 text-center">
            {nombre}

        </h3>
        <p className="card-text text-center">
            <span>
                Nombre del tutor: <br/>
            </span>
            {tutor}
        </p>
        <p className="card-text text-center">
            <span>
                Fecha: <br/>
            </span>
            {fecha}
        </p>
        <p className="card-text text-center">
            <span>
              Hora: <br/>
            </span>
            {hora}
        </p>
        <p className="card-text text-center">
            <span> 
                Sintomas: <br/> 
            </span>
        </p>
        <p className="text-center">
        {sintomas}
        </p>
        {/** con el arrow function, el tiene que esperar para ejecutarse*/}
                <div className="text-center">
                <button className="btn btn-danger" onClick={()=>eliminarCita(index)} >Borrar cita &times;</button>   
                </div> <br/> 
       </div>
    </div>

    );
    
}

export default Cita;