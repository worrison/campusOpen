import React from 'react';


const Contact = ({posicion,nombre,telefono,remove,contacto}) => {


    return (
      
                                <tr>
                                    <td>{posicion}</td>
                                    <td>{nombre}</td>
                                    <td>{telefono}</td>
                                    <td>
                                    <i className='bi-trash' style={ {color: 'tomato'}} onClick={() => remove(contacto)}></i>
                                    </td>
                                </tr>

        
    );
}

export default Contact;
