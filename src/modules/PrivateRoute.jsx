import { useUsuario } from '../context/UsuarioConectado';
import React from 'react';

const PrivateRoute = ({ roleList, children }) => {
const { usuario } = useUsuario();

if (roleList.includes(usuario.field4)) {
return children;
}

return(

    <>
        <h1>No tienes permiso para ver esta página</h1>
    </>
);
};

export default PrivateRoute;