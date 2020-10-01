import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../Context/categoria_context';
import {RecetasContext} from '../Context/ResetasContext'

const Formulario = () => {
    
    const {categorias } = useContext(CategoriasContext);
    const {buscarRecetas, guardarConsulta} = useContext(RecetasContext )
    const [data, guardardata] =useState({
        nombre:'',
        categoria:''
    });
          //leer la data
     const obtenerdata  = e => {
        guardardata({
            ...data,
            [e.target.name] : e.target.value
        })
    }
      const cseguro = e => {
          e.preventDefault();    
          buscarRecetas(data)  
          guardarConsulta(true)
        }
    return ( 
        <>
        <div className="jumbotron  elegant-color-dark"> 
            <form className="text-center  md-form font-weight-bold input-group mb-3" onSubmit={cseguro} >
                  <h1 className="text-white">Busca Recetas <i class="fas fa-glass-cheers"></i></h1>
                  <input type="text" className="form-control" placeholder="Busca una bebida o ingrediente....." 
                    required name="nombre" onChange={obtenerdata}
                    />
                    <label className="custom-control"></label>
                        <select className="browser-default custom-select" name="categoria"  onChange={obtenerdata} required>
                            <option value="" disabled selected>Selecciona categoria</option>                       
                            {categorias.map(categoria =>(
                                  <option key={categoria.strCategory} 
                                  value ={categoria.strCategory}> {categoria.strCategory}</option>
                            ))}
                            
                        </select>
                        <div class="input-group-append">
                    <button className="btn btn-md btn-orange waves-effect" type="submit" >Buscar<i class="ml-3  fas fa-search"></i></button>
                     </div>
                     </form>
                 </div>
              </>
     );
}
export default Formulario;