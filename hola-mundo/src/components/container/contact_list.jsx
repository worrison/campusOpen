import React from 'react';
import ContactComponent from '../../components/pure/contact';
import { Contacto } from '../../models/contacto.class';


const ContactList = ()=> {
    const defaultContact = new Contacto('Ana','Martinez','a@a.com');
    /*const  changeState = (id)=> {
        console.log('TODO: Cambiar estado de una tarea');
    }*/


        return (
            <div>
                            {/*<ContactComponent Contacto={ defaultContact }></ContactComponent>*/ }
                            <ContactComponent Nombre="Victor" Apellido="Ordax" Email="aa@correo.com"></ContactComponent>
            </div>  
        );
    
}
export default ContactList;

