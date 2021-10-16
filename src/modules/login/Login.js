import './Login.css';
import { useAuth0 } from '@auth0/auth0-react';
import React from "react";


const Login=()=>{

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();

    return(
        
    
    <form className=" container-login w-full h-full flex flex-col justify-center items-center text-white">
        <div className="logo text-7xl">SPORTY </div>
        <div className="text-2xl mb-9">SALES MANAGER </div>
        
        <button className= "w-1/6 cursor-pointer bg-black h-10 text-white font-semibold border border-white hover:bg-white rounded hover:text-black flex items-center justify-center"
        onClick={() => loginWithRedirect()}>LOGIN</button>
        {/*<button onClick={() => logout({ returnTo: window.location.origin })}>
            Cerrar Sesión
    </button>*/}
        
        
        
    </form>
    


        
    );
}

export default Login;

