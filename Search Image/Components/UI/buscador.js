import React, {useState} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import Router from 'next/router'
const Imput = styled.input`
 border: 1px solid var(--gris3);
 padding: 1rem;
 min-width:300px;

`;
//background-image: url('/static/img/1.png');
//background-repeat: no-repeat;


const Submit = styled.button`
height: 3rem;
width: 3rem;
background-size: 4rem;
right: 4rem;
top: 1px;
background-color: white;
border: none;
&:hover{
    cursor:pointer;
 
}
`;
const Buscador = () => {

    const [busqueda, guardarBusqueda ] = useState('');
   const buscarProducto =e =>{
        e.preventDefault();

        if(busqueda.trim() === '') return;
        //redireccionar a buscar
        Router.push({
            pathname:'/buscar',
            //query de lo que mostrara en busqueda
            //la Q es para acceder al valor
            //esto pasara los datos de un componete a otro
            //en este caso a Buscar .js
              //aqui se pasa
            query: {
                 q : busqueda
            }
        })



   }
 
    return (
        <form className="ui form"
        
        onSubmit={buscarProducto}
        >
            <div className="ui icon input">
            <Imput type="text"
            onChange={ e=> guardarBusqueda(e.target.value)}
            placeholder="Buscar..."
            />
              <button className="ui black button">Buscar</button>
          
            </div>
            
        </form>
      );
}


 
export default Buscador;