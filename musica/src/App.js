import React, {useState, useEffect} from 'react';
import './index.css';
import Formulario from './Components/Formulario';
import  axios from 'axios';
import CancionA from './Components/Cancio';
import INFO from './Components/Artista';

function App() {

  //definir los estados
  const [busquedaletra, guardarbusquedaletra] = useState({});
   //estado para la letras
   const [letra, guardarletra] = useState ('');
   //el estado de la info del arista
   const [info, guardarinfo] =useState({})

   useEffect(() => {
    if(Object.keys(busquedaletra).length === 0 ) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ]);

      guardarletra(letra.data.lyrics);
      guardarinfo(informacion.data.artists[0]);

      // guardarLetra(resultado.data.lyrics);
    }
    consultarApiLetra();
  }, [busquedaletra, info]);

  return (
    <div className="App">
      <div className="fondo">
      <header className="App-header">
      </header>
     <Formulario
             guardarbusquedaletra={guardarbusquedaletra}
     />
     <div className="container  mt-5">
       <div className="row"> 
         <div className="col-md-6">
           <INFO 
           info = {info}
           />
         </div>
         <div className="col-md-6">
         <CancionA 
         letra={letra}/>
           </div>
       </div>
       
     </div>
      </div>
      
    </div>
  );
}

export default App;
