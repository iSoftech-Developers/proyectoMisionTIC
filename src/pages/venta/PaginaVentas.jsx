import CardsVentas from '../../components/CardsVentas';
import UpperBarSection from '../../components/UpperBarSection';


const PaginaVentas =()=> {

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  
  const variableCards = {
    icon:"fas fa-tag",
    cardTo:"/moduloVentas/detalleVenta",
    linkIcon:"/moduloVentas/editarVenta",
    route:`${BASE_URL}/venta`,
    titleCard:"Id Venta",
    page:"/moduloVentas",
    field1:"Documento",
    field2:"Nombres y apellidos",
    field3:"Valor total",
    field4:"Fecha de pago",
    field5:"Estado",
}

    return (
     <>
        <UpperBarSection titlePage="Listado de ventas" nameButton="Nueva Venta" selectorButton="/nuevaVenta" vendedores= {false}/>
        <CardsVentas variableCards={variableCards} />
     </> 
      
    );
  }
export default PaginaVentas;