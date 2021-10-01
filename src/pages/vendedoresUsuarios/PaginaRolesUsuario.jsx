import UpperBarSection from "../../modules/upperBarSection/UpperBarSection";
import TarjetasUsuarios from "../../modules/tarjetasUsuarios/TarjetasUsuarios";
import { useEffect, useState } from 'react';


const PaginaRolesUsuario =()=>{

const [usercardinfo,setUserCardInfo] =useState([]);
    useEffect(()=>{
    setUserCardInfo(USUARIOS);
},[]); 

const USUARIOS = [
  { id:0,field1: "ID1234556", field2: "Juan Sebastian Cabrera Rojas", field3: "Administrador"},
  { id:0,field1: "ID1234556", field2: "Juan Sebastian Cabrera Rojas", field3: "Administrador"},
];

const variableUserCard = {
  cardTo:"/rolesUsuarios/detalleUsuarios",
  field1:"ID",
  field2:"Nombre y Apellidos",
  field3:"Cargo"
}

    return(
        <>
          <UpperBarSection titlePage="Administrar Usuarios" nameButton="NUEVO USUARIO" selectorButton="/rolesUsuarios/nuevoUsuario"/>
          <TarjetasUsuarios variableUserCard={variableUserCard} userCardInfo={usercardinfo}/>
        </>
    );

}


export default PaginaRolesUsuario;