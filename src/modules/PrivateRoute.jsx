import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {

    const { isAuthenticated, isLoading } = useAuth0();

    if(isLoading) return <div className=" text-indigo-900 font-bold">Loading...</div>;
        
            
    
    return isAuthenticated ? <>{children}</>: <div className="text-lg text-red-700">No esta autorizado para este ingreso</div>
    
     
    
    
};

export default PrivateRoute
