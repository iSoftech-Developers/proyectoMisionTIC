import Sidebar from '../../modules/sidebar/Sidebar';
import Navbar from '../../modules/navbar/Navbar';
import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';
import { useEffect, useState } from 'react';


const PaginaClientes =()=> {


  const [cardsinfomation,setCardsinfomation] =useState([]);
  useEffect(()=>{
    setCardsinfomation(VENTAS);
  },[]); 
  const VENTAS = [
    { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
    { id: 1, title: "Lime Green", color: "LimeGreen" },
    { id: 2, title: "Tomato", color: "Tomato" },
    { id: 3, title: "Seven Ate Nine", color: "#789" },
    { id: 4, title: "Crimson", color: "carlitos" }, 
    { id: 3, title: "Seven Ate Nine", color: "#789" },
    { id: 4, title: "Crimson", color: "carlitos" }, 
    { id: 3, title: "Seven Ate Nine", color: "#789" },
    { id: 4, title: "Crimson", color: "carlitos" }, 
  ];
  const variableCards = {
    cardTo:"/detalleCliente",
    linkIcon:"/actualizarProducto",
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
  
      <Sidebar />
      <main>
        <Navbar/>
        <section className="container-cards">
      
          <section className="contenido">
            <UpperBarSection titlePage="Clientes" nameButton="AGREGAR CLIENTE" selectorButton="/nuevoCliente"/>
            <Cards cardIcon={cardIcon} variableCards={variableCards} cardsInfo={cardsinfomation}/>
          </section>
        </section>
      </main>
     </> 
      
    );
  }
  export default PaginaClientes;