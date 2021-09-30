import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';


const PaginaVentas =()=> {

  const variableCards = {
    cardTo:"/moduloVentas/detalleVenta",
    linkIcon:"/actualizarProducto",
    titleCard:"Id Venta",
    field1:"Documento",
    field2:"Nombres y apellidos",
    field3:"Valor total",
    field4:"Fecha de pago",
    field5:"Estado",
}

const cardIcon = {
    iconProperties:"fas fa-tag text-white bg-gray-800 mr-4 pt-4 px-3 pb-2"
}

    return (
     <>
        <UpperBarSection titlePage="Listado de ventas" nameButton="Nueva Venta" selectorButton="/nuevaVenta"/>
        <Cards cardIcon={cardIcon} variableCards={variableCards}/>
     </> 
      
    );
  }
  export default PaginaVentas;