import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';
import { useEffect, useState } from 'react';


const PaginaClientes =()=> {


  const [cardsinfomation,setCardsinfomation] =useState([]);
  useEffect(()=>{
    setCardsinfomation(clientes);
  },[]); 
  const clientes = [
    { id: 0, field1:"Liliana Romero", field2: "123456789",field3:"liliana@gmail.com",field4:"Bogota DC",field5:"bogota",field6:"cra 1 # 1-1",field7:"3135635569"},
    { id: 1, field1:"Anna Blanco", field2: "987654321",field3:"anna@gmail.com",field4:"Medellin",field5:"313333333",field6:"antioquia",field7:"cra 2 # 2-2" },
    { id: 2, field1:"Anna Blanco", field2: "987654321",field3:"anna@gmail.com",field4:"Medellin",field5:"313333333",field6:"antioquia",field7:"cra 2 # 2-2" },
    { id: 3, field1:"Anna Blanco", field2: "987654321",field3:"anna@gmail.com",field4:"Medellin",field5:"313333333",field6:"antioquia",field7:"cra 2 # 2-2" },
  ];
  const variableCards = {
    icon:" fas fa-users",
    cardTo:"/moduloClientes/detalleCliente",
    linkIcon:"/moduloClientes/paginaEditarCliente",
    titleCard:"Cliente ID",
    field1:"Razon Social*",
    field2:"NIT/CC*",
    field3:"Email",
    field4:"Ciudad",
    field5:"Teléfono",
}

    return (
     <>
  
        <UpperBarSection titlePage="Clientes" nameButton="Agregar cliente" selectorButton="/moduloClientes/nuevoCliente"/>
        <Cards variableCards={variableCards} cardsInfo={cardsinfomation}/>
       
     </> 
      
    );
  }
  export default PaginaClientes;