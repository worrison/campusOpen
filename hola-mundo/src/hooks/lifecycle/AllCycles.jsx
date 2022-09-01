import React , {useEffect}from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('componente actualizado')
        const intervalID= setInterval(()=>{
            console.log('1');
        },1000)
        return () => {
            console.log('componente va a desaparecer');
            clearInterval(intervalID);
        };
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
