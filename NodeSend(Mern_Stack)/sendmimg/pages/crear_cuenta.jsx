import React, { useContext, useEffect } from 'react';
import Layout from '../Components/Layout';
import { useFormik} from 'formik';
import * as Yup from 'yup';
import Alerta from '../components/Alerta'
import {useRouter} from 'next/router';

import authContext from '../context/auth/authContext';

//npm i formik yup validacion de formularios
//npm i react-dropzone con esto se suben las imagenes
//usecontext crea el context 
//use reducer son las funciones que modifican el state
//use state las acciones que disparan en el reducer
//context. provider = da la data
//context. consumer = recive la data


/*
para comunicarse el state con el reducer existen los
types
estos van el el objeto dispatch el cual son dos 
objetos: el type  y el payload
con el type se evalua en el case de un switch
con el payload es que se modifican los datos del state
           dispatch({
                type: REGISTRO_ERROR,
                payload: error.response.data.msg
            })

*/

const crear_Cuenta = () => {

    const AuthContext = useContext(authContext);
    const { mensaje, registrarUsuario } = AuthContext;
    const router = useRouter();

    // Formulario y validación con formik y Yup
    const formik = useFormik({
        initialValues: {
          nombre: '',
          email: '',
          password: ''
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                      .required('El Nombre es Obligatorio'),
            email: Yup.string()
                      .email('El email no es válido')
                      .required('El Email es Obligatorio'),
            password: Yup.string()
                      .required('El password no puede ir vacio')
                      .min(8, 'El password debe contener al menos 8 caracteres')
        }),
        onSubmit: valores => {
            registrarUsuario(valores)
          
        }
    });
  

  return ( 
     
    <Layout>

        <div className="text-center">

        { mensaje && <Alerta />}
                   <h2 className="headline">Crea una cuenta</h2>
               <form className="paper form-group headline"  onSubmit={formik.handleSubmit}>
                   <input  type="text" placeholder="Escribe tu nombre"
                    id="nombre"
                   value={formik.values.nombre}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   className="input-block"
                   />
                   { formik.touched.nombre && formik.errors.nombre ?(
                       <div className="alert alert-danger button-text">{formik.errors.nombre} </div>
                   ): null}


                     <input  type="email" placeholder="Escribe tu correo"
                            id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="input-block"
                   />

                  { formik.touched.email && formik.errors.email ?(
                       <div className="alert alert-danger button-text">{formik.errors.email} </div>
                   ): null}
                     <input  type="password" placeholder="Escribe tu clave"
                            id="password"
                    value={formik.values.password1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="input-block"
                   />

                   
                  { formik.touched.password && formik.errors.password ?(
                       <div className="alert alert-danger button-text">{formik.errors.password} </div>
                   ): null}

                   <button className="btn-success btn-block" type="submit"> Crear cuenta</button>

               </form>

        </div>
      
    </Layout> 

   );
}
 
export default crear_Cuenta;