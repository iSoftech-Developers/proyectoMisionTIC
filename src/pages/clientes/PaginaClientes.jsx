import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';





const PaginaClientes =({cardsClientes})=> {
  

  const variableCards = {
    icon:" fas fa-users",
    cardTo:"/moduloClientes/detalleCliente",
    linkIcon:"/moduloClientes/paginaEditarCliente",
    titleCard:"Cliente ID",
    field1:"Razon Social*",
    field2:"NIT/CC*",
    field3:"Email",
    field4:"Ciudad",
    field5:"Teléfono",
}
    return (
     <>
  
        <UpperBarSection titlePage="Clientes" nameButton="Agregar Cliente" selectorButton="/moduloClientes/nuevoCliente"/>
        <Cards variableCards={variableCards} cardsinformation={cardsClientes}/>
       
     </> 
      
    );
  }
  export default PaginaClientes;