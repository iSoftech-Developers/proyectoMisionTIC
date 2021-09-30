import UpperBarSection from "../../modules/upperBarSection/UpperBarSection";
import GestordeRoles from "../../modules/gestorderoles/Gestorderoles"


const PaginaRolesUsuario =()=>{



    return(
        <>
          <UpperBarSection titlePage="Administrar Usuarios" nameButton="NUEVO USUARIO" selectorButton="/rolesUsuarios/nuevoUsuario"/>
          <GestordeRoles/>       
        </>


    );

}


export default PaginaRolesUsuario;