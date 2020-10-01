import React from 'react';

const Noticia =({noticia}) =>{
    //extaer data
    const {urlToImage, url, title, description, source} =noticia;
    //condiionar el atributo de imagen en caso de que debuelva null
    const imagen = (urlToImage)?  
    <div className="view overlay">
      <img className="card-img-top" width="75%" height="80%" src={urlToImage} alt="imagensits"/>  
       <span className="card-title">{source.name}</span>
        <div className="mask rgba-white-slight"></div>
     </div>
    :null;


    return(
        <div className="card-deck">
              <div className="card mb-4">
                      <p className="text-center">{imagen}</p>  
                         <div className="card-body">    
                              <h4 className="card-title font-weight-bold text-center">{title}</h4> 
                                  <p className="card-text text-justify">{description}</p> 
                                        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-cyan btn-block">Ver noticia completa</a>                           
                              </div>
              </div>
 
        </div>
        
    );


}
export default Noticia;
