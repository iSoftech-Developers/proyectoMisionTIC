import Cards from '../../components/Cards';
import UpperBarSection from '../../components/UpperBarSection';





const PaginaClientes =({cardsClientes})=> {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  

  const variableCards = {
    icon:" fas fa-users",
    cardTo:"/moduloClientes/detalleCliente",
    linkIcon:"/moduloClientes/paginaEditarCliente",
    route:`${BASE_URL}/clientes`,
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