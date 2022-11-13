import React, {useState , useEffect}  from 'react';
import getRandomChiste from '../../utils/axios-service';
import Contadorlikes from './contadorlikes';

const ChistesChuckNorris = () => {

  const [chiste, setChiste] = useState({});

        useEffect(() => {
        
          getRandomChiste()
              .then((response)=>{
                console.log(response)
                setChiste(response.data)
              })
              .catch((error)=>{
                alert(error)
              })
        
        }, []);

        function generarNuevoChiste(){
          getRandomChiste()
              .then((response)=>{
                console.log(response)
                setChiste(response.data)
              })
              .catch((error)=>{
                alert(error)
              })
        }

       
        return (
          <div>
              <h1>Chiste</h1>
              <p>{chiste.value}</p>
              <Contadorlikes nuevoChiste={generarNuevoChiste}></Contadorlikes>
          </div>
        );
}

export default ChistesChuckNorris;
