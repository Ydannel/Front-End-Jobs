import React, {Component} from 'react';
import './index.css';
import Navbar from './componentes/Navbar.js';
import ListaNoticias from './componentes/ListaNoticias.js';
import Formulario from './componentes/Formulario.js';

class App  extends Component {

  state ={
    noticias : []
  }

  //AQUI IRA LA API CON UN COMPONENTE LISTO (los llamados a api se hacen aqui)
  
   async componentDidMount(){
    this.consultarNoticias();
   }
   //es mejor en una funcion que en el componentdid mount po que es mas complicado
   consultarNoticias =async (categoria ='general') =>{
      const url =`https://saurav.tech/NewsAPI/top-headlines/category/${categoria}/us.json`;
     //extraer datos sin escribir promises
     const respuesta = await fetch(url);
     // retornando la respuesta
     const noticias = await respuesta.json();
     //console.log(noticias.articles);
      this.setState({noticias : noticias.articles})

   }

  render(){
  return (
     <div className="App">
      <Navbar/>
      <br/>
              <div className="container">
                      <Formulario
                        consultarNoticias={this.consultarNoticias}
                      /><br/><br/>
                      <ListaNoticias
                       noticias={this.state.noticias}
                      />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#14b1ab" fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,85.3C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
     </div>
    
  );
}
}
export default App;
