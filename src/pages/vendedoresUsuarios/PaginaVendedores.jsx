import Sidebar from '../../modules/sidebar/Sidebar';
import Navbar from '../../modules/navbar/Navbar';
import Cards from '../../modules/cards/Cards';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection'
import { useEffect, useState } from 'react';


const PaginaVendedores =()=> {


  const [cardsinfomation,setCardsinfomation] =useState([]);
  useEffect(()=>{
    setCardsinfomation(VENTAS);
  },[]); 
  const VENTAS = [
    { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
    { id: 1, title: "Lime Green", color: "LimeGreen" },

  ];

  const variableCards = {
    cardTo:"/perfilUsuario",
    linkIcon:"/actualizarProducto",
    titleCard:"Vendedor Id",
    field1:"Documento",
    field2:"Nombre y Apellidos",
    field3:"Especialidad",
    field4:"Numero de celular",
    field5:"Fecha de ingreso",
}

  const cardIcon = {
    iconProperties:" fas fa-user-tag text-white bg-gray-800 mr-4 pt-4 px-3 pb-2"
} 

    return (
     <>
  
      <Sidebar />
      <main>
        <Navbar/>
        <section className="container-cards  overflow-y-scroll ">
      
          <section className="contenido ">
            <NoButtonUpperBarSection title="Vendedores"/>
            <Cards cardIcon={cardIcon} variableCards={variableCards} cardsInfo={cardsinfomation}/>
          </section>
        </section>
      </main>
     </> 
      
    );
  }
  export default PaginaVendedores;