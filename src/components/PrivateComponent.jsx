import { useUsuario } from '../context/UsuarioConectado';
import React from 'react';

const PrivateComponent = ({ roleList, children }) => {
const { usuario } = useUsuario();

if (roleList.includes(usuario.field4)) {
return children;
}

return <></>;
};

export default PrivateComponent;
