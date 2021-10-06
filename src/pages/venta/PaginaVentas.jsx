import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';
import {useEffect, useState} from 'react';


const PaginaVentas =()=> {


  const [cardsVentas,setCardsVentas] =useState([]);
  useEffect(()=>{
    setCardsVentas(VENTAS);
  },[]);

  const VENTAS = [
    { id:0,field1: 1037645234, field2: "Juan Sebastian Cabrera Rojas", field3: "Online", field4: "313248789", field5: "29/09/2021" },
  ];
  
  const variableCards = {
    icon:"fas fa-tag",
    cardTo:"/moduloVentas/detalleVenta",
    linkIcon:"/moduloVentas/editarVenta",
    titleCard:"Id Venta",
    field1:"Documento",
    field2:"Nombres y apellidos",
    field3:"Valor total",
    field4:"Fecha de pago",
    field5:"Estado",
}

    return (
     <>
        <UpperBarSection titlePage="Listado de ventas" nameButton="Nueva Venta" selectorButton="/nuevaVenta"/>
        <Cards variableCards={variableCards} cardsinformation={cardsVentas}/>
     </> 
      
    );
  }
  export default PaginaVentas;