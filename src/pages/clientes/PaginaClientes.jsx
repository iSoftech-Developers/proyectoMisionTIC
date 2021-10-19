import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';





const PaginaClientes =({cardsClientes})=> {
  

  const variableCards = {
    icon:" fas fa-users",
    cardTo:"/moduloClientes/detalleCliente",
    linkIcon:"/moduloClientes/paginaEditarCliente",
    route:"https://dry-woodland-34975.herokuapp.com/clientes",
    filtroVendedores:false,
    page:"/moduloClientes",
    titleCard:"Cliente ID",
    field1:"Razon Social*",
    field2:"NIT/CC*",
    field3:"Email",
    field4:"Ciudad",
    field5:"Teléfono",
}
    return (
     <>
  
        <UpperBarSection titlePage="Clientes" nameButton="Nuevo Cliente" selectorButton="/moduloClientes/nuevoCliente" vendedores= {false}/>
        <Cards variableCards={variableCards} cardsinformation={cardsClientes} edit={true}/>
       
     </> 
      
    );
  }
  export default PaginaClientes;