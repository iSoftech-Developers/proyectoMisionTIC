import { createContext,useContext } from "react";

export const UsuarioConectadoContext=createContext(null);


export const useUsuario=()=>{
    return useContext(UsuarioConectadoContext);
}