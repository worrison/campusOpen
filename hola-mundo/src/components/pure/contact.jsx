import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


class ContactComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            conectado: true
        }
    }

    render() {
        return (
            <div>
                <h2>Nombre: {this.props.Nombre}</h2>
                <h2>Apellido: {this.props.Apellido}</h2>
                <h2>Email: {this.props.Email}</h2>
                <h5>{this.state.conectado ?  'Contacto en linea' : 'Contacto no disponible'}</h5>
                <div>
                    <button onClick={this.conexion}>Cambiar estado</button>
                </div>
            </div>
        );
    }

    conexion =() =>{
        this.setState((prevState)=>(
            {
                conectado:prevState.conectado ? false : true
            }
            
        ))
    }
};



ContactComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ContactComponent;
