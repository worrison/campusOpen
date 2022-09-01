/**
 * Ejemplo del uso del metodo
 * deciclo de vida en componente cale y el hook de ciclo de vida
 * en componente funcional
 */
import React, { Component , useEffect } from 'react'

export default class DidMount extends Component {

    componentDidMount(){
        console.log('comportamiento antes de que el componente sea añadido al DOM (RENDERICE)')
    }
  render() {
    return (
      <div>
        <h1>DidMount</h1>
     </div>
    )
  }
}


export const DidMountHook = () => {
    useEffect(() => {
        console.log('comportamiento antes de que el componente sea añadido al DOM (RENDERICE)')
        return () => {
        };
    }, []);
    return (
        <div>
        <h1>DidMount</h1>
     </div>
    );
}


