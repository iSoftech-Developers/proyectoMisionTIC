import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection'

const PaginaVendedores =()=> {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const variableCards = {
    icon:"fas fa-user-tag",
    cardTo:"/rolesUsuarios/detalleUsuarios",
    linkIcon:"/moduloVendedores/paginaEditarUsuarios",
    route:`${BASE_URL}/usuarios`,
    filtroVendedores:true,
    page:"/moduloVendedores",
    field1:"Nombre y Apellidos",
    field2:"Documento", 
    field3:"Correo electrónico",
    field4:"Rol",
    field5:"Fecha de ingreso",
}
    return (
     <>        
        <UpperBarSection titlePage="Lista de vendedores" selectorButton="/rolesUsuarios/nuevoUsuario" nameButton="Nuevo Vendedor" vendedores={true}/>
        <Cards variableCards={variableCards} edit={false}/>
     </> 
      
    );
  }
  export default PaginaVendedores;