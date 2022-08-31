/**
 * Conversion a tipo funcional
 */
import React, { useState, useEffect } from 'react';

const ComponenteFuncionalClock = (props) => {

    const valorInicial = {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
     };

     const  [reloj, setEdad] = useState(valorInicial);


     const DidmountHook = () => {

        useEffect(() => {
            const timerID = setInterval (
                () => tick(), 1000
             );
        }, [])
    }

    const WillunmountHook = () => {

        useEffect(() => {
            console.log('Comportamiento antes de que el componente sea añadido al DOM (rederice)');
            clearInterval (timerID);
        }, [])
    }




   const tick=()=>{
        setEdad((prevState) => {
           let edad = prevState.edad +1;
           return {
              ...prevState,
              fecha: new Date(),
              edad
           }
        });
     }

    return (
        <div>
            <h2>
            Hora Actual:
            {reloj.fecha.toLocaleTimeString()}
            </h2>

            <h3>{reloj.nombre} {reloj.apellidos}</h3>
            <h1>Edad: {reloj.edad}</h1>
     </div>
    );
}

export default ComponenteFuncionalClock;
