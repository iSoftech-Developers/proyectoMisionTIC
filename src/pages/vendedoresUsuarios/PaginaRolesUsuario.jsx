import TarjetasUsuarios from "../../modules/tarjetasUsuarios/TarjetasUsuarios";
import { useEffect, useState } from 'react';


const PaginaRolesUsuario =({cardsUuarios})=>{

    const variableCards = {
      cardTo:"/rolesUsuarios/paginaEditarUsuarios",
      route:"http://localhost:3001/usuarios",
      page:"/rolesUsuarios",
  }


    return(
        <>
          <TarjetasUsuarios cardsUsuarios={variableCards}/>
        </>
    );

}


export default PaginaRolesUsuario;