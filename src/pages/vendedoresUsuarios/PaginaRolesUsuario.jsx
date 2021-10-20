import TarjetasUsuarios from "../../components/TarjetasUsuarios";



const PaginaRolesUsuario =()=>{
  const BASE_URL = process.env.REACT_APP_BASE_URL;

    const variableCards = {
      cardTo:"/rolesUsuarios/detalleUsuarios",
      linkIcon:"/rolesUsuarios/paginaEditarUsuarios",
      route:`${BASE_URL}/usuarios`,
      page:"/rolesUsuarios",
  }


    
    return(
        <>
          <TarjetasUsuarios variableCards={variableCards}/>
        </>
    );

}


export default PaginaRolesUsuario;