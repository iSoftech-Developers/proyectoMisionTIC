import TarjetasUsuarios from "../../modules/tarjetasUsuarios/TarjetasUsuarios";



const PaginaRolesUsuario =()=>{

    const variableCards = {
      cardTo:"/rolesUsuarios/detalleUsuarios",
      linkIcon:"/rolesUsuarios/paginaEditarUsuarios",
      route:"https://dry-woodland-34975.herokuapp.com/usuarios",
      page:"/rolesUsuarios",
  }


    
    return(
        <>
          <TarjetasUsuarios variableCards={variableCards}/>
        </>
    );

}


export default PaginaRolesUsuario;