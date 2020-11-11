import React, { useContext, useEffect } from 'react';
import Layout from '../Components/Layout'
import { useFormik} from 'formik';
import * as Yup from 'yup';
import Alerta from '../components/Alerta';
import {useRouter} from 'next/router';

import authContext from '../context/auth/authContext';

const Login = () => {

  
    // definir el context
    const AuthContext = useContext(authContext);
    const { mensaje, autenticado, iniciarSesion } = AuthContext;

    // Next router
    const router = useRouter();

    useEffect(() => {
      if(autenticado) {
        router.push('/');
      }
    }, [autenticado]);


    // Formulario y validación con formik y Yup
    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                      .email('El email no es válido')
                      .required('El Email es Obligatorio'),
            password: Yup.string()
                      .required('El password no puede ir vacio')
        }),
        onSubmit: valores => {
          iniciarSesion(valores)
        }
    });


  return ( 
    <Layout>

    <div className="text-center">

    { mensaje && <Alerta />}

    
               <h2 className="headline">Inicia sesion</h2>
           <form className="paper form-group" onSubmit={formik.handleSubmit}>
             
                  <input  type="email" placeholder="Escribe tu correo"
                            id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="input-block"
                   />

              { formik.touched.email && formik.errors.email ?(
                   <div className="alert alert-danger button-text">{formik.errors.pass} </div>
               ): null}
                <input  type="password" placeholder="Escribe tu clave"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="input-block"
                   />


               
              { formik.touched.password && formik.errors.password ?(
                   <div className="alert alert-danger button-text">{formik.errors.password} </div>
               ): null}

               <button type="submit" className="second-button second-button-text btn-block"> Iniciar sesion</button>

           </form>

    </div>
  
</Layout> 
   );
}
 
export default Login;