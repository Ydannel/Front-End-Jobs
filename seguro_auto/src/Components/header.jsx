import React from 'react';
import carro from '../img/2.svg'
const Header = () => {
    return ( 
        <div>
            <nav className="navbar navbar-light unique-color">
            <span className="navbar-brand"> <img src={carro} width="15%" height="5%" alt="carro" />Cotizadora de seguros</span>
            </nav>
        </div>
     );
}
 
export default Header;