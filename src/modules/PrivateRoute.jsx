import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';


const PrivateRoute = ({ children }) => {

    const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
       const fetchAuth0Token = async ()=> {
            const accesToken=  await getAccessTokenSilently({
                audience: 'api-proyecto-softech',
        });
        localStorage.setItem("token", accesToken);
       };
       if(isAuthenticated){
       fetchAuth0Token (); 
       }
    }, [isAuthenticated, getAccessTokenSilently]);

    if(isLoading) return <div className=" text-indigo-900 font-bold">Loading...</div>;
        
            
    
    return isAuthenticated ? <>{children}</>: <div className="text-lg text-red-700">No esta autorizado para este ingreso</div>
    
     
    
    
};

export default PrivateRoute
