import UpperBarSection from "../../modules/upperBarSection/UpperBarSection";
import TarjetasUsuarios from "../../modules/tarjetasUsuarios/TarjetasUsuarios";


const PaginaRolesUsuario =()=>{



    return(
        <>
          <UpperBarSection titlePage="Administrar Usuarios" nameButton="NUEVO USUARIO" selectorButton="/rolesUsuarios/nuevoUsuario"/>
          <TarjetasUsuarios/>       
        </>


    );

}


export default PaginaRolesUsuario;