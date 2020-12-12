import React from 'react';

const Poke = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    const{name, sprites, types,base_experience}=resultado;
    return (
         <>
         <div className="card has-background-danger-light is-rounded">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={sprites.other.dream_world.front_default} alt="bigsprite"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={sprites.front_default} alt="sprite"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4 has-text-weight-bold has-text-danger-dark">Soy {name} ! </p>
    <p className="subtitle is-6">Tipo de pokemon: {types[0].type.name} </p>
      </div>
    </div>
     <div>
    <p className="has-text-weight-bold has-text-danger"> Nivel inicial: {base_experience}</p>
     </div>
  </div>
</div>
    </> );
}
 
export default Poke;