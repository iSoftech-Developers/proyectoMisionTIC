import Sidebar from '../../modules/sidebar/Sidebar';
import Navbar from '../../modules/navbar/Navbar';
import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';
import { useEffect, useState } from 'react';


const PaginaClientes =()=> {


  const [cardsinfomation,setCardsinfomation] =useState([]);
  useEffect(()=>{
    setCardsinfomation(clientes);
  },[]); 
  const clientes = [
    { id: 1, field1:"Liliana Romero", field2: "123456789",field3:"liliana@gmail.com",field4:"Bogota DC",field5:"bogota",field6:"cra 1 # 1-1",field7:"3135635569"},
    { id: 2, field1:"Anna Blanco", field2: "987654321",field3:"anna@gmail.com",field4:"Medellin",field5:"313333333",field6:"antioquia",field7:"cra 2 # 2-2" },
 
  ];
  const variableCards = {
    icon:" fas fa-users",
    cardTo:"/detalleCliente",
    linkIcon:"/actualizarProducto",
    titleCard:"Cliente ID",
    field1:"Razon Social*",
    field2:"NIT/CC*",
    field3:"Email",
    field4:"Ciudad",
    field5:"Teléfono",
}

 

    return (
     <>
  
      <Sidebar />
      <main>
        <Navbar/>
        <section className="container-cards">
      
          <section className="contenido">
            <UpperBarSection titlePage="Clientes" nameButton="AGREGAR CLIENTE" selectorButton="/nuevoCliente"/>
            <Cards variableCards={variableCards} cardsInfo={cardsinfomation}/>
          </section>
        </section>
      </main>
     </> 
      
    );
  }
  export default PaginaClientes;