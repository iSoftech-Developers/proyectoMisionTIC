import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';




const PaginaProductos =()=> {


  const [cardsProductosInfomation,setCardsProductosInfomation] =useState([]);

  useEffect(() => {
      
     
      const options = { method: 'GET', url: 'http://localhost:3001/productos' };
      axios.request(options).then(function (response){
          console.log(response.data);
          setCardsProductosInfomation(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
      },[]);


  

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
        <Cards variableCards={variableCards} cardsInfo={cardsProductosInfomation}/>
       
     </> 
      
    );
  }
  export default PaginaProductos;
