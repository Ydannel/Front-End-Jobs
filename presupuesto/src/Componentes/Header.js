import React, {Component} from 'react';
import money from '../fotos/1.svg';

class Header extends Component{
    render(){

return(
 <div> 
 <div className="fondom container-fluid"> 
     <br/>
     <div className="row">
         {
             //cuando la pantalla sea menor a los 1200px  aparecera
         }
        <div className="col-sm-7 d-block d-xl-none">

            <h2 className=" mt-5 display-4 tamanio font-weight-bold text-center text-white"> Toma </h2>
            <h2 className=" tamanio display-5 font-weight-bold text-center naranja">el  control</h2>
            <h2 className="tamanio display-4 font-weight-bold text-center text-white"> de tu dinero</h2>
            <h3 className="font-weight-bold text-center mb-3 mt-3 text-white">  Con solo un click 
             <i className="ml-2 fas  fa-mouse-pointer fa-lg naranja"></i> </h3>
        </div>
        {
             //cuando la pantalla supere  los 1200px aparecera
         }
         <div className="col-sm-7 d-none d-xl-block">
           <h2 className=" mt-5 display-2 tamanio font-weight-bold text-center text-white"> Toma </h2>
             <h2 className=" tamanio display-3 font-weight-bold text-center naranja">el  control</h2>
             <h2 className="tamanio display-2 font-weight-bold text-center text-white"> de tu dinero</h2>
              <h3 className="font-weight-bold text-center mb-3 mt-3 text-white">  Con solo un click 
              <i className="ml-2 fas  fa-mouse-pointer fa-x3 naranja"></i> </h3>

             </div> 

        <div className="col-sm-5 d-none d-sm-block">
            <img src={money} width="100%" height="100%" alt="presupuesto" />
        </div>
         </div>
         </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#00cba9" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,197.3C672,213,768,203,864,218.7C960,235,1056,277,1152,272C1248,267,1344,213,1392,186.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
          
</div>







     );
    }
}

export default Header;