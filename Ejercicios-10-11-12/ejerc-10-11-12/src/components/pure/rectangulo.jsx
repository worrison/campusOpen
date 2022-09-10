import React ,  {useState,useEffect} from 'react';
let ejecucion;
const Rectangulo = () => {
    
    const [backColorRed, setBackColorRed] = useState(0);
    const [backColorGreen, setBackColorGreen] = useState(0);
    const [backColorBlue, setBackColorBlue] = useState(0);
    const caracteristicas={
        width:255,
        height:255,
        backgroundColor: `rgb(${backColorRed},${backColorGreen},${backColorBlue})`,
    }
     
      function getRandomInt() {
        return Math.floor(Math.random() * 255);
      }
     
    function changeBackground (){
        setBackColorRed(getRandomInt);
        setBackColorGreen(getRandomInt)
        setBackColorBlue(getRandomInt)
    }

    function mantenerBackground (){
        clearTimeout(ejecucion);
        setBackColorRed(backColorRed)
        setBackColorGreen(backColorGreen)
        setBackColorBlue(backColorBlue)
        console.log('para')
    }
    function callChangeColor(){
        ejecucion= setInterval(() => {
        changeBackground();
     }, 1000);
    }

    /*useEffect(() => {
       ejecucion = setTimeout(() => {
            setBackColor(getRandomInt)
        }, 1000);
      },[backColor]);*/

    return (
        <div onMouseOver={callChangeColor} onMouseOut={mantenerBackground} onDoubleClick={mantenerBackground} style={caracteristicas} >
            
        </div>
    );
}

export default Rectangulo;
