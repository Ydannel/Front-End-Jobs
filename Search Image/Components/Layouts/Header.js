import React, {useContext} from 'react';
import BUSCADOR from '../UI/buscador'

import Link from 'next/link'
import styled from '@emotion/styled';

import BOTON from '../UI/Botton'

//con este context cambiara el estado de los botones y mostrar el nombre del usuario
import {FirebaseContext} from '../../Firebase/index'
const Logo = styled.p`
   color: var(--naranja);
   font-size: 4rem;
   line-height: 0;
   font-weight:700;
`;

const Header = () => {
    //dependiendo si el usuario esta autenticado o no mostrara los diferentes botones
    const {usuario, firebase}= useContext(FirebaseContext);


    return ( 
        <>
        <header className="ui secondary  menu"
        >
         
            <div className="item"
            >
                <br/>
                <div  className="item">
                   <Logo>S</Logo>
                    </div>
                    <div  className="item">
                        {/**BUSCADOR  */}
                        <BUSCADOR  ></BUSCADOR>
                </div>
                 <div className="item">
                         {/**BARRA DE NAVEGACION */}
                         <Link  href="/">Inicio</Link>
                 </div>
                 <Link  href="/Populares">Populares</Link>  
                    <div className="item">
                              {//si el usuario existe, mostrar la opcion de crear productos nuevos 
                        usuario && (<Link href="/Nuevo_Productos">Nuevos Productos</Link>)}
                  
                        </div>
                <div className="right menu" >

                
                <div className="item">
                    { usuario ? 
                    (
                        <>
                             {/**ADMINISTRACION */}
                    <p className="item"> Hola : { usuario.displayName} </p>
                    <BOTON  bgColor="true" 
                    onClick={() => firebase.cerrrarSesion()}>
                         Cerrar sesion</BOTON>
                    </>
                    )
                     : 
                    (
                     <>
                        <Link href="/Login"><BOTON bgColor="true"> Iniciar Sesion</BOTON></Link>
                        <Link href="/Crear_Cuenta"><BOTON> Crear Cuenta</BOTON></Link>
                    </>
                    )}
                   </div>
                </div>
            </div>
           
        </header>
        </>
      );
}
 
export default Header; 