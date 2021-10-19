import CardsVentas from '../../modules/cardsVentas/CardsVentas';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';


const PaginaVentas =()=> {


  
  const variableCards = {
    icon:"fas fa-tag",
    cardTo:"/moduloVentas/detalleVenta",
    linkIcon:"/moduloVentas/editarVenta",
    route:"https://dry-woodland-34975.herokuapp.com/venta",
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