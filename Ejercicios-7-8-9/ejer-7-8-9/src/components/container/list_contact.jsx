import React,{useState} from 'react';
import Table from 'react-bootstrap/Table';
import ContactComponent from '../pure/contact'

const ListContact = () => {

    const defaultContact1={posicion:'1',nombre:'victor',telefono:'666366003'}
    const defaultContact2={posicion:'2',nombre:'Ana',telefono:'234234'}
    const defaultContact3={posicion:'3',nombre:'Alicia',telefono:'111111'}

    const [contactos, setContactos] = useState([defaultContact1,defaultContact2,defaultContact3]);

    function deleteContact(contacto){
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos.splice(index,1);
        setContactos(tempContactos);
    }
    return (
        <div>
            <h1>Agenda Contactos</h1>
                <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>#</th>
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
                                                    posicion={contacto.posicion}
                                                    nombre={contacto.nombre}
                                                    telefono={contacto.telefono}
                                                    remove = {deleteContact}
                                                    contacto={contacto}>
                                            </ContactComponent>                      
                                                                    )
                                 })                                   
                            }
                                        
                            </tbody>
     
                 </Table>


        </div>
    );
}

export default ListContact;
