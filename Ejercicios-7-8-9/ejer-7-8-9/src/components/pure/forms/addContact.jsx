import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddContact = ({add}) => {
    const nombreRef = useRef('');
    const telefonoRef = useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = {
            conectado:false,
            nombre:nombreRef.current.value,
            telefono:telefonoRef.current.value
    };
        console.log(newContact)
        add(newContact);
    }



    return (
        <Form onSubmit={ addContact } >
                <h3>Nuevo contacto</h3>
                <input ref={nombreRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus  placeholder="Nombre" />
                <input ref={telefonoRef} id='inputTelefono' type='text' className='form-control form-control-lg' required   placeholder="Telefono" />

                <Button type="submit" variant="primary" >
                    Submit
                </Button>
      
    </Form>
    );
}

export default AddContact;
