import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {es} from 'date-fns/locale';

//para routing dinamico 

import Link from 'next/link'

const DetallesP = ({proyecto}) => {
    //extrayendo el producto desde el index hacia aca
    const {id, url, creado, descripcion, creador , nombre, urlImagen}= proyecto
    return ( 
        <li className="ui list">
            <div className="ui card centered 
            ">

                <div className="content"> 
                   <div className="right floated meta">
                       {formatDistanceToNow( new Date(creado), {locale: es})} </div>
                <div>{creador.nombre} </div>
                </div>
               <div className="content">
                   <img className="image fluid center aligned" src={urlImagen} 
                   alt="plublicacion"
                   width="100%"
                   
                   /> 
               </div>
               <div className="ui center aligned "> 
               <Link href="/productos/[id]" as={`/productos/${id}`}>
                   {nombre}
                   </Link>
               </div>
               <div className="ui center aligned ">
               {descripcion}
               </div>

               
               <div className="extra content">
               <span className="right floated"> 
                        <i className="heart outline like icon"></i>{votos} </span> <i className="comment icon"></i> 
                        {comentarios.length}   </div>
            <div className="extra content"></div>
             </div>
          
            {/*  npm i date-fns
            para la fechas
            */}
          
        </li>
     );
}
 
export default DetallesP;