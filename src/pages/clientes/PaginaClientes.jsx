import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';
import { useEffect, useState } from 'react';
import axios from 'axios';


const PaginaClientes =()=> {
  const [cardsinfomation,setCardsinfomation] =useState([]);

  useEffect(() => {
     
      const options = { method: 'GET', url: 'http://localhost:3001/clientes' };
      axios.request(options).then(function (response){
          console.log(response.data);
          setCardsinfomation(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
      },[]);


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
        
        <UpperBarSection titlePage="Clientes" nameButton="Agregar Cliente" selectorButton="/moduloClientes/nuevoCliente"/>
        <Cards variableCards={variableCards} cardsInfo={cardsinfomation}/>
       
     </> 
      
    );
  }
  export default PaginaClientes;