import React, {useEffect, useState} from 'react';
import useMoneda from '../Hooks/usemoneda';
import useCriptomoneda from '../Hooks/useCriptomoneda';
import axios from 'axios';


const Formulario = ({guardarmoneda, guardarcriptom}) =>{
  //state de listado de api
  const [cripto, guardarcripto] = useState([]);

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar americano'},
        {codigo: 'MXN', nombre: 'Peso mexicano'},
        {codigo: 'EUR', nombre: 'Euros'},
        {codigo: 'GBP', nombre: 'Libra esterlina'}
    ]
    //usar use moneda
    const [moneda, SeleccionaMoneda] = useMoneda(MONEDAS);
    //usar use cripto

    const [criptomoneda, SeleccionarCripto] = useCriptomoneda(cripto);
    //  LLAMAR A LA API

    useEffect(
        () =>{
            const API = async ()  =>{
                const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
                const resultado = await axios( URL);
                guardarcripto(resultado.data.Data);
            }
            API();
        }, []
    );
        //si estan vacios los campos, se activara el estado de error 
        const [error, guardarError] = useState(false);

        //optener data
        const cseguro = e => {
            e.preventDefault();
            if (moneda === '' || criptomoneda ===''){
              guardarError(true);
              return;
          }
          guardarError(false);
          guardarmoneda(moneda);
          guardarcriptom(criptomoneda);
        }

    return (
        <div >
            {// si esta vacio, mostrara un alert de error
            error ? 
            <div className="message is-danger" role="alert"><i className="fas fa-exclamation-triangle"></i> Los campos son obligatorios
                 
            </div>
            : null}
             <form className="" onSubmit={cseguro} >
                 <SeleccionaMoneda></SeleccionaMoneda>
                 <br/>
                 <SeleccionarCripto></SeleccionarCripto>
                                                   
                            <br/><br/>
                      <button type="submit" className="soft-botton button is-fullwidth">Calcular  </button>
              </form>
        </div>
    );
}
export default Formulario; 