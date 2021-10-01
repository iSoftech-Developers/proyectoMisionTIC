import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';
import { useEffect, useState } from 'react';


const PaginaProductos =()=> {

  const [cardsinfomation,setCardsinfomation] =useState([]);
  useEffect(()=>{
    setCardsinfomation(productos);
  },[]);
  const productos = [
    { id: 555555, field1:"Camiseta nike verde", field2: 20000 , field3: 1000, field4: "XS", field5: "DISPONIBLE"},
    { id: 111111, field1:"Lime Green", field2: 10000, field3: 300000, field4: "S", field5: "DISPONIBLE" },
    { id: 222222, field1:"Tomato", field2: 40000 , field3: 500000, field4: "M", field5: "DISPONIBLE"},
    { id: 333333, field1:"Seven Ate Nine", field2: 50000 , field3: 600000, field4: "L", field5: "DISPONIBLE"},
  ];

const variableCards = {
    icon:"fas fa-tshirt",
    cardTo:"/productos/detalleProducto",
    linkIcon:"/productos/actualizarProducto",
    titleCard:"Id Producto",
    field1:"Descripción",
    field2:"Valor unitario",
    field3:"Unidades disponibles",
    field4:"Talla",
    field5:"Estado",
}



    return (
     <>
  
        <UpperBarSection titlePage="Productos" nameButton="Nuevo Producto" selectorButton="/productos/nuevoProducto"/>
        <Cards variableCards={variableCards} cardsInfo={cardsinfomation}value="2"/>
       
     </> 
      
    );
  }
  export default PaginaProductos;
