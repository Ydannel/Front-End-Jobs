import React, {Component} from 'react';
import './css/Estilos.css';
import './css/imagenes.css';
import foto4 from './Source/4.svg';
import Cita from './Componentes/Cita.js';
import ListaCitas from './Componentes/ListaCitas.js';
class App extends Component {
state ={
  citas :[]
}
//cuando la aplicacion carga 
//usaremos los ciclos de vida para que la informacion
// guardada en el local storage el usuario la borre hasta que el quieras
componentDidMount(){
  //cargara la info del local storage al recargar la pagina  
  const  citasLS = localStorage.getItem('citas')
  //en caso de que haya algo en el state, se pondra
  if(citasLS)
  {
    //los datos guardados como strings, se convertiran a objetos
    this.setState({citas : JSON.parse(citasLS)});
  }

 
}
//cuando agreguemos o eliminamos alguna cita, este se ejecuta
componentDidUpdate(){
  //el storage no aguanta los arreglos, por eso se comvertira a strign
localStorage.setItem('citas', JSON.stringify(this.state.citas));
}

crearNuevaCita = datos =>{
  console.log(datos);
  //copiar el state actual
  const citas =[...this.state.citas, datos]
  //agregar el nuevo state
  this.setState ({citas})
}

//metodo para eliminar las citas contenidas en el state
   eliminarCita = id=>{
     //hay que tomar una copia del state
         const citasActuales =[...this.state.citas];
     // usar un filtro para sacar el elemento del ID
     //se filtra la informacion pasandole los datos mediante el arrow function
     // extrayendolos y creando la copia
         const citas = citasActuales.filter(cita => cita.id !==id)
     //actualizar el state
     this.setState({citas});
   }

 render(){
  return (
    <div className="App fondonav container-fluid">
          
              <div>  {/* barra de navegacion*/}
                <nav className="navbar navbar-expand-lg  ">
               <h5 className="navbar-brand"> <img src={foto4} width="20%"  alt="cute"/> Hola, Bienvenido/a
              </h5>
              
              </nav>
             </div>
                {/*area de citas*/}
              <div className="row"> 
                <div className="col-md-10 mx-auto">
                  <br/><br/><br/>
                  <Cita
                  crearNuevaCita ={this.crearNuevaCita}
                  />
                   </div>

                 <div className="mt-5 col-md-10 mx-auto container">
                   <ListaCitas
                   citas={this.state.citas}
                   eliminarCita ={this.eliminarCita}
                   />
                 </div>
                 
 
              </div>
              <br/><br/><br/>
    </div>
  );}
}

export default App;
