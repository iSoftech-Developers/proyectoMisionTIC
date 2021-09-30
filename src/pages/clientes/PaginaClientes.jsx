import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';


const PaginaClientes =()=> {
  const variableCards = {
    cardTo:"/moduloClientes/detalleCliente",
    linkIcon:"/moduloClientes/paginaEditarCliente",
    titleCard:"Cliente ID",
    field1:"Razon Social*",
    field2:"NIT/CC*",
    field3:"Email",
    field4:"Dirección",
    field5:"Teléfono",
}

  const cardIcon = {
    iconProperties:" fas fa-users text-white bg-gray-800 mr-4 pt-4 px-3 pb-2"
}

    return (
     <>
        <UpperBarSection titlePage="Clientes" nameButton="AGREGAR CLIENTE" selectorButton="/moduloClientes/nuevoCliente"/>
        <Cards cardIcon={cardIcon} variableCards={variableCards}/>
     </> 
      
    );
  }
  export default PaginaClientes;