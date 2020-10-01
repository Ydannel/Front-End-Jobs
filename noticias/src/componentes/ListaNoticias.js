import React from 'react';
import Noticia from './Noticia.js';

//se lista la informacion de las noticias en targetas
const ListaNoticias =({noticias}) =>(
    <div className="container-fluid">
    <div>
       {noticias.map(noticia=>(
          < Noticia 
            key={noticia.url}
            noticia={noticia}
          />
       ))
           
       }
    </div>

        
    </div>


);

export default ListaNoticias;