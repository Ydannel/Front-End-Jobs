import React, {useState} from 'react';

//pasa la info a la app
function Formulario({crearCita}) {


    const [cita, actualizarCitas] =useState({
        nombre: '',
        tutor:'',
        fecha:'',
        hora:'',
        sintomas:''

    });
    const {nombre, tutor, fecha, hora, sintomas}=cita
        //lee datos 
    const handleChange = e =>{
        //cambia el state
        actualizarCitas({
            ...cita,
            [e.target.name] : e.target.value
        });
        
    }

    //para el form

    const enviarCita = e => {
        //no carga tan alocado
        e.preventDefault();
       
        
        //datos a validar y pasa los datos al componente principal
        crearCita(cita)

        //reiniciar el state
       actualizarCitas({
        nombre: '',
        tutor:'',
        fecha:'',
        hora:'',
        sintomas:''
       })
    }


    return(
        <div className="card">

        <form className="text-center border border-light p-5" 
        onSubmit={enviarCita}
        >

                <p className="h4 mb-4">Formulario de citas pediatria</p>
                 {/*nombre-mascota*/}
                        <label>Nombre</label>
                            <input type="text" 
                            name="nombre" 
                            className="form-control mb-4"
                            placeholder="Escribir nombre de paciente"
                            onChange={handleChange}
                            value={nombre}
                            required
                        />
                             {/*nombre - duenio*/}
                          <label>Tutor</label>
                    <input
                       onChange={handleChange}
                        value={tutor}
                            type="text"
                        name="tutor"
                        className="form-control mb-4"
                        placeholder="Nombre del tutor del pequeno"
                        required
                        />
                                        <div className="form-group">
                                         {/*fecha*/}
                                           <label>Fecha de la cita </label>
                                               <input type="date" name="fecha"  required onChange={handleChange} value={fecha} className="form-control mb-4"/>
                                              {/*hora*/}
                                               <label>Hora  de la cita </label>
                                           <input type="time" required onChange={handleChange} value={hora}  name="hora" className="form-control mb-4"/>
                                     </div>
                                        <label>Sintomas</label>
                                    <div className="form-group">
                                        <textarea className="form-control rounded-0"
                                        name="sintomas" 
                                        rows="3" 
                                        required
                                        placeholder="Que tiene el infante?"
                                        onChange={handleChange}
                                        value={sintomas}
                                        >

                                        </textarea>
                                    </div>

                       <button className="btn btn-orange btn-lg btn-block" type="submit">Solicitar cita para el infante</button>
               
        </form>

    </div>
    )
}

export default Formulario;
