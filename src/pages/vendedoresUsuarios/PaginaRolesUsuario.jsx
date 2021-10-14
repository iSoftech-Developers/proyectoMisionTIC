import TarjetasUsuarios from "../../modules/tarjetasUsuarios/TarjetasUsuarios";
import { useEffect, useState } from 'react';


const PaginaRolesUsuario =({})=>{

    const variableCards = {
      cardTo:"/rolesUsuarios/detalleUsuarios",
      linkIcon:"/rolesUsuarios/paginaEditarUsuarios",
      route:"http://localhost:3001/usuarios",
      page:"/rolesUsuarios",
  }


    
    return(
        <>
          <TarjetasUsuarios variableCards={variableCards}/>
        </>
    );

}


export default PaginaRolesUsuario;