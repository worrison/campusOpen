import React from 'react';
import { Tareas } from '../../../models/tareas.class';
import { Formik , Field , Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';


const FormTareas = () => {

    const tareasSchema = Yup.object().shape({
        name: Yup.string()
                .min(6,'Demasiado corto')
                .max(12,'Demasiado largo')
                .required('Obligatorio'),
        descripcion: Yup.string()
                 .min(12,'Demasiado corto')
                 .max(30,'Demasiado largo')
                 .required('descripcion is required')
    })

    const initialValues = {
        name:'',
        descripcion:'',
        completed:false
    }
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={initialValues}
                //validation schema
                validationSchema={tareasSchema}
                onSubmit={ async (values)=>{
                    await new Promise((r)=>setTimeout(r,1000));
                    alert(JSON.stringify(values,null,2));
                   
                }}
            >
            {/** obtenemos props para formik */}
            { 
             
              ( {values,touched,errors,isSubmitting,handleChange,handleBlur }) =>(
                    <Form>
                    <label htmlFor='name'>Name</label>
                    <Field id="name" name="name" placeholder="tarea" type="text"></Field>
                    {
                        errors.name && touched.name && (
                            <ErrorMessage name='name' component='div'></ErrorMessage>
                        )
                    }

                    <label htmlFor="descripcion">Descripcion</label>
                    <Field id="descripcion" name="descripcion" placeholder="descripcion" type='text'></Field>
                    {
                        errors.descripcion && touched.descripcion && (
                            <ErrorMessage name='descripcion' component='div'></ErrorMessage>
                        )
                    }

                    <button type='submit'>submit</button>
                    {isSubmitting ? (<p>Creando Tarea....</p>):null}
                </Form>
                )
            }
               

            </Formik>

        </div>
        
    );
}

export default FormTareas;
