import TarjetasUsuarios from "../../modules/tarjetasUsuarios/TarjetasUsuarios";
import { useEffect, useState } from 'react';


const PaginaRolesUsuario =()=>{

const [userCardInfo,setUserCardInfo] =useState([]);
    useEffect(()=>{
    setUserCardInfo(USUARIOS);
},[]); 

const USUARIOS = [
  { id:0,field1: "ID1234556", field2: "Juan Sebastian Cabrera Rojas", field3: "Administrador"},
  { id:0,field1: "ID456787", field2: "Juan Pablo Gomez Perez", field3: "Vendedor"},
  { id:0,field1: "ID1234556", field2: "Juan Sebastian Cabrera Rojas", field3: "Administrador"},
  { id:0,field1: "ID456787", field2: "Juan Pablo Gomez Perez", field3: "Vendedor"},
  { id:0,field1: "ID1234556", field2: "Juan Sebastian Cabrera Rojas", field3: "Administrador"},
  { id:0,field1: "ID456787", field2: "Lisa Luna Gomez", field3: "Vendedor"},
  { id:0,field1: "ID1234556", field2: "Juan Sebastian Cabrera Rojas", field3: "Administrador"},
];


    return(
        <>
          <TarjetasUsuarios userCardInfo={userCardInfo}/>
        </>
    );

}


export default PaginaRolesUsuario;