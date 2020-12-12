import React, {useState} from 'react';

const Formulario = ({guardarbusqueda}) => {

    const [poke, guardarPoke] = useState('');
    
    const buscarPoke = e =>{
        e.preventDefault();
        guardarbusqueda(poke);

    }

    return ( 
    
    <>

    <section className="hero is-large is-warning is-bold">
        <div className="hero-body">
            <div className="container has-text-centered">
            <h1 className="title">
               Has de tu busqueda mas sencilla
            </h1>
            <br/>
            <form className="ml-5 mt-5" onSubmit={buscarPoke}>
            <div className="field has-addons">
                <div className="control">
                    <input className="input" type="text" placeholder="busca un pokemon"
                      required onChange={ data => guardarPoke(data.target.value)}
                    />
                </div>
                <div className="control">
                    <button className="button is-danger is-rounded " type="submit">Buscar</button>
                </div>
                </div>
            </form>
            </div>
        </div>
    </section>
     
    
    
    </> );
}
 
export default Formulario;