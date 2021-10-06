import Cards from '../../modules/cards/Cards';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection'
import { useEffect, useState } from 'react';


const PaginaVendedores =()=> {
 
 

  const [cardsVendedores,setCardsVendedores] =useState([]);
  useEffect(()=>{
    setCardsVendedores(vendedores);
  },[]); 

  const vendedores = [
    { _id:"1",field1: 1037645234, ids: "Juan Sebastian Cabrera Rojas", field3: "Online", field4: "313248789", field5: "29/09/2021" },

  ];

  const variableCards = {
    icon:"fas fa-user-tag",
    cardTo:"/rolesUsuarios/detalleUsuarios",
    linkIcon:"/moduloVendedores/paginaEditarUsuarios",
    field1:"Documento",
    field2:"Nombre y Apellidos",
    field3:"Especialidad",
    field4:"Numero de celular",
    field5:"Fecha de ingreso",
}
    return (
     <>
            <div className=" my-9 flex justify-between">
              <span className="font-bold text-2xl">Lista vendedores</span>
            </div>
              <Cards variableCards={variableCards} cardsinformation={cardsVendedores} />
     </> 
      
    );
  }
  export default PaginaVendedores;