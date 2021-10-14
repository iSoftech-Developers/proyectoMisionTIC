import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection'

const PaginaVendedores =({cardsUsuarios})=> {

  const variableCards = {
    icon:"fas fa-user-tag",
    cardTo:"/rolesUsuarios/detalleUsuarios",
    linkIcon:"/moduloVendedores/paginaEditarUsuarios",
    route:"http://localhost:3001/usuarios",
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
          
              <UpperBarSection titlePage="Lista de vendedores" selectorButton="/rolesUsuarios/nuevoUsuario" nameButton="Agregar Vendedor"/>
              <Cards variableCards={variableCards} />
     </> 
      
    );
  }
  export default PaginaVendedores;