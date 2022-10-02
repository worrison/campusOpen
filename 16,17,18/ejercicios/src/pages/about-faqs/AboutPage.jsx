import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const AboutPage = () => {
    const location = useLocation();
    console.log('estamos en ruta',location.pathname);

    const navigate=useNavigate();

    function navegacion(path){
        navigate(path)
    }
    return (
        <div>
            <h1>About |  FAQs Page</h1>
            <div>
                <button onClick={()=>navegacion('/')}>Go to home</button>
                <button onClick={() => navigate(-1)}>Go to back</button>
                <button onClick={() => navigate(1)}>Go to forward</button>
            </div>
        </div>
        
    );
}

export default AboutPage;
