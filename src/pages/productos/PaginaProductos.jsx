import Sidebar from '../../modules/sidebar/Sidebar';
import Navbar from '../../modules/navbar/Navbar';
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
    cardTo:"/detalleProducto",
    linkIcon:"/actualizarProducto",
    field1Crd:"Id Producto",
    field1:"Descripción",
    field2:"Valor unitario",
    field3:"Unidades disponibles",
    field4:"Talla",
    field5:"Estado",
}



    return (
     <>
  
      <Sidebar />
      <main>
        <Navbar/>
          <section className="container-cards">   
            <section className="contenido">
              <UpperBarSection field1Pge="Productos" nameButton="Nuevo Producto" selectorButton="/nuevoProducto"/>
              <Cards variableCards={variableCards} cardsInfo={cardsinfomation}/>
            </section>  
          </section>
      </main>
     </> 
      
    );
  }
  export default PaginaProductos;
