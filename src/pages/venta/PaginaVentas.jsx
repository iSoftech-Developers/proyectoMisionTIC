import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';
import {useEffect, useState} from 'react';


const PaginaVentas =()=> {


  const [cardsinfomation,setCardsinfomation] =useState([]);
  useEffect(()=>{
    setCardsinfomation(VENTAS);
  },[]);
  const VENTAS = [
    { id:0, field1: "ID1234556", field2: "Juan Sebastian Cabrera Rojas", field3: "Administrador", field4: "Administrador",field5: "Administrador",},

  ];
  
  const variableCards = {
    icon:"fas fa-tag",
    cardTo:"/moduloVentas/detalleVenta",
    linkIcon:"/moduloVentas/detalleVentas/",
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
              <Cards variableCards={variableCards} cardsInfo={cardsinfomation}/>

     </> 
      
    );
  }
  export default PaginaVentas;