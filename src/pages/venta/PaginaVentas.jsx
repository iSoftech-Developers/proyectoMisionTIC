import Sidebar from '../../modules/sidebar/Sidebar';
import Navbar from '../../modules/navbar/Navbar';
import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';
import {useEffect, useState} from 'react';


const PaginaVentas =()=> {


  const [cardsinfomation,setCardsinfomation] =useState([]);
  useEffect(()=>{
    setCardsinfomation(VENTAS);
  },[]);
  const VENTAS = [
  

  ];
  
  const variableCards = {
    icon:"fas fa-tag",
    cardTo:"/detalleVenta",
    linkIcon:"/actualizarProducto",
    titleCard:"Id Venta",
    field1:"Documento",
    field2:"Nombres y apellidos",
    field3:"Valor total",
    field4:"Fecha de pago",
    field5:"Estado",
}





    return (
     <>
  
      <Sidebar />
      <main>
        <Navbar/>
          <section className="container-cards">
      
            <section className="contenido">
              <UpperBarSection titlePage="Listado de ventas" nameButton="Nueva Venta" selectorButton="/nuevaVenta"/>
              <Cards variableCards={variableCards} cardsInfo={cardsinfomation}/>
            </section>  
          </section>
      </main>
     </> 
      
    );
  }
  export default PaginaVentas;