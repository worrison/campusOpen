/**
 * Ejemplo de uso de:
 *      -useState()
 *      -useRef() =>Identificar elementos,referenciar elementos dentro de la vista
 *      -useEffect() => Para controlar cambios en la vista
 */
import React, { useState, useRef, useEffect }from 'react';

   
const Ejemplo2 = () => {

     //vamos a crear dos contadores distintos
    //cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable
    // con un  elemento del DOM del componente (vista HTML)

    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }

    /**
     * Trabajando con UseEffect
     */

    /**
     *  ? caso 1: Ejecutar Siempre un snippet de código
     * cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro del useEffect()
     */
    // useEffect(() => {
      
    //         console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //         console.log('Mostrando Referencia a elemento del DOM');
    //         console.log(miRef);
       
    // });


     /**
     *  ? caso 2: Ejecutar solo cuando cambie contador1
     * cada vez que haya un cambio en el contador 1 se ejecuta lo que tenga el useEffect
     * En caso de que cambie contador2, no habra ejecución
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando Referencia a elemento del DOM');
    //     console.log(miRef);
       
    // },[contador1]);


     /**
     *  ? caso 3: Ejecutar solo cuando cambie contador1 o contador2
     * cada vez que haya un cambio en el contador 1 o contador2 se ejecuta lo que tenga el useEffect
     */

      useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DE CONTADOR1 O CONTADOR2');
        console.log('Mostrando Referencia a elemento del DOM');
        console.log(miRef);
       
    },[contador1, contador2]);

    return (
        <div>
                <h1>**Ejemplo de useState(), useRef, y useEffect() ****</h1>
                <h2>contador1: {  contador1  }</h2>
                <h2>contador2: {  contador2  }</h2>
                {/*Elemento referenciado */}
                <h4 ref={miRef}>
                    Ejemplo de elemento referenciado
                </h4>

                {/* bloque de botones para actualizar el estado del componente*/ }
                <button onClick={incrementar1}>Incrementar contador1</button>
                <button onClick={incrementar2}>Incrementar contador2</button>
        </div>
    );
}

export default Ejemplo2;
