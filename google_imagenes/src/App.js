import React, { useState, useEffect } from 'react';
import './index.css';
import FORMULARIO from './Components/Form';
import LISTA from './Components/visor';
import Random from './Components/jumbotron';
import Spinner from './Components/spinner';
function App() {
  const [busqueda, guardarbusqueda] = useState('');
  const [imagenes, guardarimg]=useState([]);
  //para paginador
  const [pagina, guardarpag] = useState(1);
  const [total, guardartotalpag]= useState(1);
  
  //para spiner 
  const [cargando, guardarCargando] = useState(false)
  useEffect(
    ()=>{
      const buscaai = async () =>{
        if(busqueda === '')return;

      const imagenespag = 30;
      const key =process.env.REACT_APP_ID;
      const url =`https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenespag}&page=${pagina}`;
      const request = await fetch(url);
      const result = await request.json();
      
       //carga del spiner
        guardarCargando(true);
        //ocultar el spinner y mostrar la info
        setTimeout(
          () =>{
            //cambiar el state de cargando
            guardarCargando(false);
            //guardar info
            guardarimg(result.hits);
            //calcular el total de paginas para el paginador 
      const calcular = Math.ceil(result.totalHits / imagenespag);
      guardartotalpag(calcular)

      //al dar click a algun boton, la pagina vuelva hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({
        behavior: 'auto'
      })
      
          }, 3000
        );

      }

      buscaai();

      //para que recargue otras 30 imagenes mas, se le pasa como dependencia 
      //al use effect para que haga un llamado a la api
    }, [busqueda, pagina]);

    //paginadores
     const paginaAnt= () =>{
       const nuevo = pagina -1;
       //si pasa de cero, debe de retornar
       if(nuevo === 0) return;
       guardarpag(nuevo);
       
     }
     const paginaSig= () =>{
      const nuevo = pagina +1;
      //si pasa de cero, debe de retornar
      if(nuevo > total) return;
      guardarpag(nuevo);
    }

    //mostrar el spinner 
    const componente = (cargando) ? <Spinner/> : <LISTA  imagenes={imagenes}/>  

  return (
    <div className="App container-fluid">
      <div className="view">
          <div className="jumbotron card p-0 hoverable p-4 jumbotron-fluid">
             <Random/>
              <div className="mask">
                 <br/><br/><br/>
                  <p className="font-weight-bold display-4 text-center"> Buscador de imagenes</p>
                  <FORMULARIO guardarbusqueda={guardarbusqueda} />
              </div>
           
          </div>
      </div>
       
       <div className="row justify-content-center">

       {componente}
         
         
            {//ocultar los botones segun se necesite
            }
            { 
               (pagina === 1) ? null: (
           <button className="btn  btn-elegant" onClick={paginaAnt} > &laquo;Anterior </button>    
            )
              }
              {
                (pagina === total)? null : (
                  <button className="btn  btn-elegant" onClick={paginaSig}> Siguiente &raquo;</button>
       
                )
              }
         
       </div>
    </div>
  );
}
export default App;