import React from 'react';

const Info = ({info}) => {
    //object.keys funciona para saber si un objeto viene vacio o no
    if(Object.keys(info).length === 0) return null;
    //metodo
    const { strArtistThumb, strGenre, strBiographyES } = info;

    return ( 
        <div className= "card border-light fondoCard mb-4">
            <div className="card-header "> <h3 className="display-4 text-center font-weight-bold">Informacion del artista</h3></div>
               <div className="card-body"> 
                 <img src={strArtistThumb} className="card-img-top" alt="img logo"/>
                 <h4 className="card-text text-white fonr">Genero: {strGenre}</h4>
                 <h2> Biografia</h2>
                 <p className="text-center text-white"> {strBiographyES}</p>
                </div>
        </div>
     );
}
 
export default Info;