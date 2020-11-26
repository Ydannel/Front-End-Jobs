import React , {useState, useEffect} from 'react';
import  './index.css';
import Cabecera from './Componentes/Header.js';
import Formulario from './Componentes/Formulario.js';
import Cita from './Componentes/Cita.js';
import nino from './fotos/4.svg';

function App() {
  //cargar las citas del local storage
  let citasIniciales =JSON.parse(localStorage.getItem('citas'));
      if (!citasIniciales){
        citasIniciales=[];
      }
  //RETORNARA LOS ESTADOS 
  //state = this.setstate
  const [citas, guardarCitas] =useState(citasIniciales);
  //AGREGAR NUEVAS CITAS AL STATE 

  const crearCita = cita =>{
    //copia del state para guardar el cliente 
    const nuevasCitas =[...citas, cita];
    //almacenar en el state
    guardarCitas(nuevasCitas);

    console.log(nuevasCitas);
    
  }

  //FUNCION PARA ELIMINAR LAS CITAS 
  const eliminarCita = index =>{
    const nuevasCitas =[...citas];
    //splice nos permite eliminar un elemento
    nuevasCitas.splice(index, 1);
    guardarCitas(nuevasCitas);


  }

  //CARGAR LAS CITAS DESDE EL LOCALSTORAGE 
  //useeffect actua como componente listo y componente actualizado
  useEffect (
    () =>{
      let citasIniciales =JSON.parse(localStorage.getItem('citas'));
      if (citasIniciales){
        localStorage.setItem('citas', JSON.stringify(citas));
      }
      else{
        //en caso de que no haya, crea un arreglo vacio
        localStorage.setItem('citas', JSON.stringify([]));
      } //tendra una dependencia, la cual solo cambiara cuando citas lo haga, 
        //asi no cambiara todos los componentes constantemente
    }, [citas]
  )
  //CARGAR MENSAJE EN CASO DE QUE NO HAYAN CITAS 
  const titulo = Object.keys(citas).length ===0 ? (<> <p className="text-center font-weight-bold">No hay citas :(</p> <img src={nino} width="50%" alt="anchild"/> </>) : 'Listado de Citas';
  
  return (
    <div className="App fondo-principal">
        <Cabecera/>
        <h1 className="text-center orange-text font-weight-bold">Asistente de citas medica</h1>
      <div className="container-fluid">
           <div className="row">
                  <div className="col-sm-7 mb-5">
                    <br/> <br/>
                    <Formulario crearCita={crearCita}></Formulario>
                  </div>
                <div className="col-sm-5">
                <br/><br/>
                 <div className="card text-center"> 
                  <h3 className="card-text font-weight-bold"><br/>{titulo}<br/><br/></h3>
                 </div>
                  
                 {citas.map((cita, index) =>(
                   <Cita 
                   key={index} //la posicion en el arreglo
                   index={index} //se movera en el arreglo
                   cita={cita}//contiene la info
                   eliminarCita={eliminarCita}
                   />
                 ))}
                  </div>
                
          </div>
      </div>
    
       </div>
  );
}

export default App;
