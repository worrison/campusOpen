import React,{useState} from 'react';
import Table from 'react-bootstrap/Table';
import ContactComponent from '../pure/contact'
import AddContact from '../pure/forms/AddContact'

const ListContact = () => {

    const defaultContact1={conectado:true,nombre:'victor',telefono:'666366003'}
    const defaultContact2={conectado:true,nombre:'Ana',telefono:'234234'}
    const defaultContact3={conectado:false,nombre:'Alicia',telefono:'111111'}

    const [contactos, setContactos] = useState([defaultContact1,defaultContact2,defaultContact3]);

    function deleteContact(contacto){
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos.splice(index,1);
        setContactos(tempContactos);
    }

    function newContact(contacto){
        const tempContactos = [...contactos];
        console.log(tempContactos);
        tempContactos.push(contacto);
        setContactos(tempContactos);
    }
    return (
        <div>
            <h1>Agenda Contactos</h1>
                <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>Conectado</th>
                                <th>Nombre</th>
                                <th>teléfono</th>
                                <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                contactos.map((contacto, index)=> {
                                         return (
                                            <ContactComponent 
                                                    key={index} 
                                                    // conectado={contacto.conectado}
                                                    // nombre={contacto.nombre}
                                                    // telefono={contacto.telefono}
                                                    remove = {deleteContact}
                                                    contacto={contacto}>
                                            </ContactComponent>                      
                                                                    )
                                 })                                   
                            }
                                        
                            </tbody>
     
                 </Table>

                <AddContact add={newContact}></AddContact>
        </div>
    );
}

export default ListContact;
