import React from 'react';
const Imagen = ({imagen}) => {
    //extraer 
    const{largeImageURL, likes, previewURL, tags, views } =imagen;
    return ( 
        <div>
            <div className="card-deck">
                <div className="col-md-12"> 
                    <div className="card">
                    <div className="view overlay">
                        <img className="card-img-top"
                            src={previewURL} alt={tags}
                            width="100%" height="200rem"
                            />
                        </div>
                        <div className="card-body">         
                            <p className="card-text"><i className="fas fa-heart mr-2 fa-lg red-text"></i> {likes}  Me gusta</p>
                            <p className="card-text"><i className="far fa-eye mr-2 fa-lg"></i>{views} Vistas</p>
                            <hr/>
                        <a href={largeImageURL} target="_blank" rel="noopener noreferrer"  className="black-text d-flex justify-content-end">
                            <h5>Ver imagen <i class="fas fa-angle-double-right"></i></h5>
                        </a>
                        </div>
                    </div>
              </div>
            </div>
        </div>
            
     );
}
 
export default Imagen;