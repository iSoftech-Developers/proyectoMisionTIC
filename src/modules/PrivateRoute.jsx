import { useUsuario } from '../context/UsuarioConectado';
import React from 'react';
import './PrivateComponent.css';

const PrivateRoute = ({ roleList, children }) => {
const { usuario } = useUsuario();

if (roleList.includes(usuario.field4)) {
return children;
}

return(

    <>
        <div className="notAllowed">
            <i class="fas fa-exclamation-triangle"></i>
            <h1 className="text-5xl">No tienes permiso para ver esta página</h1>
        </div>
    </>
);
};

export default PrivateRoute;