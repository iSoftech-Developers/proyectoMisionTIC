import Cards from '../../modules/cards/Cards';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection'


const PaginaVendedores =()=> {
  const variableCards = {
    cardTo:"/rolesUsuarios/perfilUsuario",
    linkIcon:"/actualizarProducto",
    titleCard:"Vendedor Id",
    field1:"Documento",
    field2:"Nombre y Apellidos",
    field3:"Especialidad",
    field4:"Numero de celular",
    field5:"Fecha de ingreso",
}

  const cardIcon = {
    iconProperties:" fas fa-user-tag text-white bg-gray-800 mr-4 pt-4 px-3 pb-2"
} 

    return (
     <>
          <NoButtonUpperBarSection title="Vendedores"/>
          <Cards cardIcon={cardIcon} variableCards={variableCards}/>
     </> 
      
    );
  }
  export default PaginaVendedores;