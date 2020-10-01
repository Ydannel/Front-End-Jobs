import React, {useEffect, useState} from 'react';

function Cargar(props) {
    const {random} = props;
    return(
        <div>
         <img src={random} width="100%" height="400rem" alt=""/>
          
        </div>   
      )
}

const Cargada = () => {

    // eslint-disable-next-line
    Array.prototype.random = function () {
        return this[Math.floor((Math.random()*this.length))];
      }
    
      var list = [0,1,2,4,5,6,9,10,11,15].random();

      //para jumbotron
  const [random, guardarRandom] = useState() 
  useEffect(
    ()=>{
      const buscaai = async () =>{
       
      const key ='13169014-17163caa6524fc43300404d1b';
      const url2 =`https://pixabay.com/api/?key=${key}&q=naturaleza`;
      const request2 = await fetch(url2);
      const result2 = await request2.json();
      guardarRandom(result2.hits[list].largeImageURL);
      }

      buscaai();
        // eslint-disable-next-line
    }, []);


    return ( 
             <> 
             <Cargar 
             random={random}
             
             />
             </>
     );
}
 
export default Cargada;