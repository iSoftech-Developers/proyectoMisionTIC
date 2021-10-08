import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection'
import { useEffect, useState } from 'react';


const PaginaVendedores =({cardsUsuarios})=> {

  const variableCards = {
    icon:"fas fa-user-tag",
    cardTo:"/rolesUsuarios/detalleUsuarios",
    linkIcon:"/moduloVendedores/paginaEditarUsuarios",
    deleteRoute:"http://localhost:3001/vendedor/borrar/",
    page:"/moduloVendedores",
    field1:"Nombre y Apellidos",
    field2:"Documento",
    field3:"Especialidad",
    field4:"Numero de celular",
    field5:"Fecha de ingreso",
}
    return (
     <>
          
              <UpperBarSection titlePage="Lista de vendedores" selectorButton="/rolesUsuarios/nuevoUsuario" nameButton="Agregar Vendedor"/>
              <Cards variableCards={variableCards} cardsinformation={cardsUsuarios} />
     </> 
      
    );
  }
  export default PaginaVendedores;