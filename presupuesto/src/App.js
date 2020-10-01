import React, {useState, useEffect} from 'react';
import Cabecera from './Componentes/Header.js';
import Presupuesto from './Componentes/Saber_presupuesto.js';
import Formulario from './Componentes/Formulario.js';
import Listado from './Componentes/Listado.js';
import Control from './Componentes/control.js';

import './index.css';

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const  [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
  const  [crearGasto, guardarCrearGasto]= useState(false)
  const [gasto, guardarG] = useState({});
  const [gastos, guardarGastos] = useState([]);
   
  //guardar los gastos en otro state
   useEffect(
     () => {
       if(crearGasto){
       const listadoGastos =[...gastos, gasto];
       guardarGastos(listadoGastos);
      //restar el presupuesto actual
      const presupuestoRestante = restante -gasto.cantidadGasto;
      guardarRestante(presupuestoRestante)
      //una vez que se agrega, se pone false
      guardarCrearGasto(false)
      }// eslint-disable-next-line
     }, [crearGasto]);

  return (
    <div className="App">

      <Cabecera/> 
      <br/>
     <div className="container">
       <div className="jumbotron p-0 jumbotron-fluid">
         
         <br/>
         {(preguntaPresupuesto) ?
         <Presupuesto
        guardarPresupuesto={guardarPresupuesto}
        guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
        guardarRestante={guardarRestante}
        /> : (
               <div className="row">

                 <div className="col-sm-8">
                    <br/>
                 <Formulario
                 guardarG ={guardarG}
                 guardarCrearGasto={guardarCrearGasto}
                 ></Formulario>
                 </div>
                 <div className="col-sm-4">
                   <br/>
                   <Listado 
                   gastos ={gastos}
                   ></Listado><br/>
                   <Control
                   presupuesto ={presupuesto}
                   restante ={restante}
                   />
                 </div>
                
               </div>
        )}
        
         <br/>
         </div>
      </div><br/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,197.3C672,213,768,203,864,218.7C960,235,1056,277,1152,272C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
     </div>
  );
}

export default App;
