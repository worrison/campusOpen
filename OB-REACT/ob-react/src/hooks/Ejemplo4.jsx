/**
 * Ejemplo para entender el uso de props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>
                *** Ejemplo de Childre PROPS ***
            </h1>            
            <h2>Nombre: {props.nombre}</h2>
            {/* porps.children pintará por defecto
            aquello que se encuentre entre las etiquetas de apertura y cierre
            de este componente desde el componente de orden superior 
            -se trata como props.children lo que se mete a mayores del componente en el app.js*/}
            {props.children}
        </div>
    );
}

export default Ejemplo4;
