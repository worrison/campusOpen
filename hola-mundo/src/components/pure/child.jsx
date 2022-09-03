import React, { useRef  } from 'react';

const Child = ({name,send , update}) => {

    const  messageRef  = useRef('');
    const  nameRef  = useRef('');


    function pulsarBoton(){
        const text = messageRef.current.value;
        alert(`testing input: ${text}`);
    }

    function pulsarBoton2( text){
            alert(`Text: ${text}`);
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }
    return (
        <div style={ {background:'green',padding: '10px'}}>
            <p onMouseOver={()=> console.log('on mouse over')}>Hello: { name}</p>
            <button onClick={pulsarBoton}>Boton 1</button>
            <button onClick={() =>pulsarBoton2('Hola buenos dias')}>Boton 2</button>
            <input placeholder='Envia texto a tu padre' 
                onFocus={()=>console.log('Input focus')}
                onChange={(e)=>console.log('Texto cambiado', e.target.value)}
                onCopy={() => console.log('Copied text')}
                ref = {messageRef}>
            </input>

            <button onClick={()=> send(messageRef.current.value)}>Send Message</button>

            <div style={{marginTop:'20px',background:'blue'}}>

                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='new name'></input>
                    <button type='submit'>Update Name</button>
                </form>

            </div>
        </div>
    );
}

export default Child;
