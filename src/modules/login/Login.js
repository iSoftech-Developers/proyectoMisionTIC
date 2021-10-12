import './Login.css';
import { Link } from 'react-router-dom';
import image from '../../media/googleLogo.png'; 
import { useAuth0 } from '@auth0/auth0-react';
import React from "react";

const Login=()=>{

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();

    return(
        

    <form className=" container-login w-full h-full flex flex-col justify-center items-center text-white">
        <div className="logo text-7xl">SPORTY </div>
        <div className="text-2xl mb-9">SALES MANAGER </div>
        
        <button onClick={() => loginWithRedirect()}>LOGIN</button>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
            Cerrar Sesión
        </button>
        
        
        
    </form>



        
    );
}

export default Login;

//<input className="loginButton" type="submit" value="LOGIN"/>