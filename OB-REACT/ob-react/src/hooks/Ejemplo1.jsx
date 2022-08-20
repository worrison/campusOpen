/**
 *Ejemplo de uso del Hook useState
 *
 * Crear un componente de tipo funcion y acceder a su estado
 * privado a traves de un hook y, ademas,poder modificarlo 
 */
import React, {  useState  } from 'react';

const Ejemplo1 = () => {
    //valor inicial para un contador
    const valorInicial  =0;

    //valor inicial para una persona

    const   personaInicial  =   {
        nombre:    'Martin',
        email:    'martin@email.com'
    }

    /**
     * Queremos que el VALORINICIAL Y PERSONAINICIAL sean
     * parte del estado del componente para asi poder gestionar su cambio
     * y que esté se vea refrejado en la vista del componente
     * 
     * const    [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */
    const  [contador, setcontador] = useState(valorInicial);
    const  [persona, setpersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador() {
        //  ? funcion ParaCambiar(nuevoValor)
        setcontador(contador + 1);
    }

      /**
       * Función para actualizar el estado de persona en el componente
       */
    function actualizarPersona() {
        setpersona(
            {
                nombre:    'Victor',
                email:  'prueba@email.es'
            }
        );
    }
    
    return (
        <div>
                <h1>**Ejemplo de useState()</h1>
                <h2>Contador: {  contador  }</h2>
                <h2>DATOS DE LA PERSONA</h2>
                <h3>NOMBRE: {  persona.nombre  }</h3>
                <h4>EMAIL: {  persona.email  }</h4>
                {/* bloque de botones para actualizar el estado del componente*/ }
                <button onClick={incrementarContador}>Incrementar contador</button>
                <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
