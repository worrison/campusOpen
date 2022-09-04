import React from 'react';


const Contact = ({conectado,nombre,telefono,remove,contacto}) => {


    return (
      
                                <tr>
                                    <td>{contacto.conectado?'SI':'NO'}</td>
                                    <td>{contacto.nombre}</td>
                                    <td>{contacto.telefono}</td>
                                    <td>
                                    <i className='bi-trash' style={ {color: 'tomato'}} onClick={() => remove(contacto)}></i>
                                    </td>
                                </tr>

        
    );
}

export default Contact;
