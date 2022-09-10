import React , {useState}from 'react';

//login logout

const LoginButton = ({loginAction})=>{
    return(
        <button onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction})=>{
    return(
        <button onClick={logoutAction}>Logout</button>
    )
}




const OptionalRender = () => {

    const loginAction = ()=>{
        setAccess(true)
    }
    
    const logoutAction = ()=>{
        setAccess(false)
    }

    const [access, setAccess]= useState(true);
    const [nMessages, setNMessages]= useState(0);

    /*const updateAccess = ()=>{
        setAccess(!access);
    }*/
    let optionaButton;

    if (access) {
        optionaButton=<LogoutButton logoutAction={logoutAction}></LogoutButton>
    }else{
        optionaButton=<LoginButton loginAction={loginAction}></LoginButton>
    }
    //unreadMessages
    let addMessages = () =>{
        setNMessages(nMessages + 1)
    }
    return (
        <div>
            {   optionaButton   }
            {nMessages > 0 ? <p> You have {nMessages} new messages ...</p> : <p>No new messages </p>}
            <button onClick={addMessages}>New messages</button>
        </div>
    );
}

export default OptionalRender;
