import React, {useState} from 'react';

const Formulario = ({guardarbusqueda}) => {
    const [termino, guardartermino] = useState('');
    
    const buscarImg = e =>{
        e.preventDefault();
        guardarbusqueda(termino);

    }


    return ( 
       <div className="container">
           <div className="container">

           
            <form className="input-group mb-3 form-inline d-flex justify-content-center md-form form-sm active-pink-2 mt-2" onSubmit={buscarImg}>
                <input type="text" className="form-control form-control-sm mr-3 w-75" placeholder="Busca una imagen....." 
                    required onChange={ data => guardartermino(data.target.value)} 
                    
                    />
                     
                <div className="input-group-append">
                    <button className="btn btn-md btn-deep-purple waves-effect" type="submit" >Buscar imagen</button>
                </div>
             </form>
             </div>
       </div> 
     );
}
 
export default Formulario;