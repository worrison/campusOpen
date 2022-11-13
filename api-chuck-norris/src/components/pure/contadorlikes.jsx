import React,{useState,useEffect} from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'; //mano arriba vacia
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';//mano abajo vacia
import ThumbUpIcon from '@mui/icons-material/ThumbUp';//mano arriba llena
import ThumbDownIcon from '@mui/icons-material/ThumbDown';//mano abajo llena


const Contadorlikes = ({nuevoChiste}) => {
  
    const [likes, setlike] = useState(0);
    const [dislikes, setdislike] = useState(0);

    const [likeActivo, setlikeActivo] = useState(false);
    const [disLikeActivo, setdisLikeActivo] = useState(false);

  function sumalikes(){
    setlike(likes+1);
    setlikeActivo(true);

    if(disLikeActivo){
        setdisLikeActivo(false);
        setdislike(dislikes-1);
    }
   
  }

  function restalikes(){
    setlike(likes-1);
    setlikeActivo(false);
  }

  function sumadislikes(){
    setdislike(dislikes+1);
    setdisLikeActivo(true);

    if(likeActivo){
        setlikeActivo(false);
        setlike(likes-1);
    }

  }

  function restadislikes(){
    setdislike(dislikes-1);
    setdisLikeActivo(false);
  }


useEffect(() => {
    setlikeActivo(false);
    setdisLikeActivo(false);
  
}, [nuevoChiste]);


    return (
        <div>
           { !likeActivo ?  <ThumbUpOffAltIcon  onClick={sumalikes}></ThumbUpOffAltIcon> :  null }

           { likeActivo ? <ThumbUpIcon  onClick={restalikes}></ThumbUpIcon> : null}

           { !disLikeActivo ?  <ThumbDownOffAltIcon  onClick={sumadislikes}></ThumbDownOffAltIcon> :  null }

           { disLikeActivo ? <ThumbDownIcon  onClick={restadislikes}></ThumbDownIcon> : null}

            <p>Te han gustado:{likes}</p>
            <p>Te han disgustado:{dislikes}</p>
            <button onClick={() => nuevoChiste()}>Nuevo chiste</button>
    
        </div>
    );
}

export default Contadorlikes;
