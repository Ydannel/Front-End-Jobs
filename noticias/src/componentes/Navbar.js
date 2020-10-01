import React, {Component} from 'react';
import banner from '../fotos/1.svg'
import '../index.css';
class Navbar extends Component{
    render(){
// navegacion del sitio
return(
 <div> 
             <div className="colornav container-fluid" >
                 <div className="row">                      
                        <div className="col-sm-7">
                            <br/><br/><br/><br/>
                            <h2 className="mt-5 display-3 tamanio font-weight-bold text-center text-white"> Dando la 
                            </h2>
                            <h2 className="tamanio display-4 font-weight-bold text-center naranja">vuelta </h2>
                            <h2 className="tamanio display-3 font-weight-bold text-center text-white"> al mundo</h2>
                            <h3 className="font-weight-bold text-center mb-3 mt-3 text-white">  Con solo un click  <i class="ml-2 fas  fa-mouse-pointer fa-2x naranja"></i> </h3>
                        </div>
                        <div className="col-sm-5 d-none d-sm-block">
                        <br/><br/><br/>
                            <img src={banner}  alt ="banner" width="80%" height="100%" />
                        </div>
                 </div>  
              
             </div>
              <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1440 320">
                  <path fill="#14b1ab" 
                  fill-opacity="1"
                   d="M0,320L80,282.7C160,245,320,171,480,165.3C640,160,800,224,960,245.3C1120,267,1280,245,1360,234.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
                </path></svg>              
</div>
     );
    }
}

export default Navbar;