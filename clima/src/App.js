import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './Componentes/Header.js';
import    './index.css';

import Formulario from './Componentes/Formulario.js';
import Clima from './Componentes/Clima.js';

import climaImg from './fotos/1.svg';
function App() {

  //realizacion de el state principal 
  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais]= useState('');
  const [resultado, guardarResultado]= useState({});

  //cargar los datos de la api con use efect 
  //este funciona tanto como componentDidMount y componentDidUpdate

  useEffect( () => {
    //prevenir ejecucion
    if (ciudad === '')return;

      //API 
      const consultarAPI =  async() =>{
        const appId =process.env.REACT_APP_ID;
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        //realizar el fetch
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
       guardarResultado(resultado);
      }

        consultarAPI();
  }, [ciudad, pais]);
  //validar la info del usuario desde la app principal
  const datosConsulta = datos =>{
    //ciudad y pais existen, agregar
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    
  }
  return (
    <div className="App hero is-info is-fullheight">
      <div>
          <Header/>
          <br/>
          <div className="columns mx-6">
            <div className="column">
              <Formulario datosConsulta={datosConsulta}/>
              <Clima resultado={resultado}/>
            <br/> 
            </div> 
              <div className="column">
               <img src={climaImg} width="100%" height="100%"  alt="climaImg"/>
            </div>  
          </div>
         </div>
    </div>
  );
}
export default App;