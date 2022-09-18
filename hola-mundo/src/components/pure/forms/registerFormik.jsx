import React from 'react';
import { Formik ,Field, Form, ErrorMessage, yupToFormErrors } from 'formik';
import * as Yup from 'yup'

//models

import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {
    let user = new User();

    const initialValues = {
        username:'',
        email:'',
        password:'',
        confirm:'',// password confirm
        role:ROLES.USER
    }
    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                        .min(6,'Demasiado corto')
                        .max(12,'Demasiado largo')
                        .required('Obligatorio'),
            email: Yup.string()
                        .email('Formato invalido')
                        .required('Password is required'),
            role: Yup.string()
                            .oneOf([ROLES.user,ROLES.ADMIN],'debes poner un rol User / Admin')
                            .required('es obligatorio'),
            password: Yup.string()
                        .min(8,'Password demasiado corta')
                        .required('Es requerida'),
            confirm: Yup.string()
                        .when("password",{
                            is:value =>(value && value.length >0 ? true :false),
                            then:  Yup.string().oneOf(
                                [Yup.ref("password")],'passwords debe coincidir'
                            )
                        }).required('debes confirmar la password')
        }
    );

    const submit = (values)=>{
      alert('Register User')
    }
    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={ initialValues }
                validationSchema={registerSchema}
                onSubmit={ async (values)=>{
                    await new Promise((r)=>setTimeout(r,500));
                    alert(JSON.stringify(values,null,2));
                }}
            >
                 { 
             
             ( {values,touched,errors,isSubmitting,handleChange,handleBlur }) =>(
                   <Form>
                   <label htmlFor='username'>username</label>
                   <Field id="username" name="username" placeholder="username" type="text"></Field>
                   {
                       errors.username && touched.username && (
                           <ErrorMessage name='username' component='div'></ErrorMessage>
                       )
                   }

                   <label htmlFor='email'>email</label>
                   <Field id="email" name="email" placeholder="prueba@email.com" type="email"></Field>
                   {
                       errors.email && touched.email && (
                           <ErrorMessage name='email' component='div'></ErrorMessage>
                       )
                   }

                   <label htmlFor="password">Password</label>
                   <Field id="password" name="password" placeholder="password" type='password'></Field>
                   {
                       errors.password && touched.password && (
                           <ErrorMessage name='password' component='div'></ErrorMessage>
                       )
                   }

                   <label htmlFor="confirm">confirm</label>
                   <Field id="confirm" name="confirm" placeholder="confirm" type='password'></Field>
                   {
                       errors.confirm && touched.confirm && (
                           <ErrorMessage name='confirm' component='div'></ErrorMessage>
                       )
                   }

                   <button type='submit'>Register Account</button>
                   {isSubmitting ? (<p>Enviando usuario</p>):null}
               </Form>
               )
           }
            </Formik>
        </div>
    );
}

export default RegisterFormik;
