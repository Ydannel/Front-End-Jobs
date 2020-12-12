import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './source/1.png';
import Formulario from './components/form';
import Poke from './components/poke';
import Spinner from './components/spinner';
function App() {
  
     const [busqueda, guardarbusqueda] = useState('');
   const [resultado, guardarresultado] = useState({});
   const [cargando, guardarCargando] = useState(false);
     useEffect( ()=> {
     const pokeResult = async () =>{ 

            if(busqueda === '')return;

           const url =`https://pokeapi.co/api/v2/pokemon/${busqueda}`;
           const resultado = await axios(url);
           guardarresultado(resultado.data); 
           guardarCargando(true);
          
           setTimeout(
            () =>{
              //cambiar el state de cargando
              guardarCargando(false);
              guardarresultado(resultado.data);
            }, 
              3000);
               
     }
       pokeResult();
   } , [busqueda]);

   const componente = (cargando) ? <Spinner/> : <Poke resultado={resultado} />
  return (
    <div className="App">
      <section className="hero has-background-danger-dark is-fullheight">
        <div className="hero-body ">
          <div className="container mt-6">
            <img src={logo} width="28%" className=" has-text-centered" alt="poke" />
            <h2 className="is-family-secondary has-text-warning is-size-1-mobile has-text-centered has-text-weight-bold">PokeApp</h2>
            </div>
            
        </div>
        <div className="container is-centered  animate__animated animate__pulse animate__infinite	infinite">
            <a href="#home"> 
            <span className="icon is-large has-text-warning">
               <i className="fas fa-angle-double-down fa-3x"></i>
            </span>
            </a>
        </div>
      </section>
   

    <section id="home">
         <Formulario 
         guardarbusqueda={guardarbusqueda}
         />
        
    </section>
    {componente}
         
    </div>
  );
}
export default App;