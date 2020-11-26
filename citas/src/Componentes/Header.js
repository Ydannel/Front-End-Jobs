import React, {Component} from 'react';
import foto4 from '../fotos/4.svg';
class Header extends Component{
    render(){

return(
 <div> 
 
        <nav className="navbar navbar-expand-lg ">
               <h5 className="navbar-brand text-center font-weight-bold orange-text"> <img src={foto4} width="30" height="30" alt="cute"/> Pediatria
              </h5>
              
              </nav>   
</div>
     );
    }
}

export default Header;