import Layout from '../../components/Layout';
import clienteAxios from '../../config/axios';
import React, {useState, useContext } from 'react';
import appContext from '../../context/app/appContext';
import Alerta from '../../components/Alerta';

export async function getServerSideProps({params}) {
    const { enlace } = params;

    // console.log(enlace)
   const resultado = await clienteAxios.get(`/api/enlaces/${enlace}`);

//    console.log(resultado);

    return {
        props: {
            enlace: resultado.data
        }
    }
}

export async function getServerSidePaths() {
        const enlaces = await clienteAxios.get('/api/enlaces');
        return {
            paths: enlaces.data.enlaces.map( enlace => ( {
                params: { enlace : enlace.url }
            })),
            fallback: false
        }
}



export default ({enlace}) => {

    // Context de la app
    const AppContext = useContext(appContext);
    const {  mostrarAlerta, mensaje_archivo } = AppContext;
    

    const [ tienePassword, setTienePassword ] = useState(enlace.password);
    const [ password, setPassword ] = useState('');

    console.log(tienePassword)

    //  console.log(enlace);

    const verificarPassword = async e => {
        e.preventDefault();

        const data = {
            password
        }

        try {
            const resultado = await clienteAxios.post(`/api/enlaces/${enlace.enlace}`, data);
            setTienePassword(resultado.data.password);
        } catch (error) {
            mostrarAlerta(error.response.data.msg);
        }
        

    }

    return (
        <Layout>
            {
                tienePassword ? (
                    <>
                        <p className="text-center">Este enlace esta protegido por un password, colocalo a continuación</p>

                        { mensaje_archivo && <Alerta /> }
                        <div className="">
                            <div className="">
                                <form
                                    className="form-group"
                                    onSubmit={ e => verificarPassword(e) }
                                >
                                    <div className="text-center">
                                        <label 
                                            className="headline "
                                            htmlFor="password"
                                        >Password</label>
                                        <input
                                            type="password"
                                            className="input-block background-warning"
                                            id="password"
                                            placeholder="Password del enlace"
                                            value={password}
                                            onChange={ e => setPassword(e.target.value) }
                                        />
                                    </div>

                                    <input 
                                        type="submit"
                                        className="paper-btn btn-block button"
                                        value="Validar Password..."
                                    />
                                    <img src="/private.svg" height="100%" width="50%"/>
                                </form>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="headline">Descarga tu archivo</h1>
                        <div className="text-center">
                            <a 
                                href={`${process.env.backendURL}/api/archivos/${enlace.archivo}`} 
                                className="paper-btn btn-block button"
                                download    
                            >Descargar Archivo</a>
                        </div>

                        <img src="/download.svg" width="100%"/>
                    </>
                )
            }

        </Layout>
    )
}