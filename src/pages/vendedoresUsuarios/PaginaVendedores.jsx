import Cards from '../../modules/cards/Cards';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection'
import { useEffect, useState } from 'react';


const PaginaVendedores =()=> {


  const [cardsinfomation,setCardsinfomation] =useState([]);
  useEffect(()=>{
    setCardsinfomation(vendedores);
  },[]); 
  const vendedores = [
    { id:0,field1: 1037645234, field2: "Juan Sebastian Cabrera Rojas", field3: "Online", field4: "313248789", field5: "29/09/2021" },

  ];

  const variableCards = {
    icon:"fas fa-user-tag",
    cardTo:"/rolesUsuarios/perfilUsuario",
    linkIcon:"/moduloVendedores/paginaEditarUsuarios",
    field1:"Documento",
    field2:"Nombre y Apellidos",
    field3:"Especialidad",
    field4:"Numero de celular",
    field5:"Fecha de ingreso",
}



    return (
     <>
            <NoButtonUpperBarSection title="Vendedores"/>
            <Cards variableCards={variableCards} cardsInfo={cardsinfomation}/>
     </> 
      
    );
  }
  export default PaginaVendedores;