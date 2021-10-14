import React from 'react'
import BotonesDashboard from '../modules/botonesDashboard/BotonesDashboard'
import Cards from '../modules/cards/Cards';
import { useEffect, useState } from 'react';
import PrivateRoute from '../modules/PrivateRoute';

const Dashboard = () => {
    const [cardsDashboard,setCardDashboard] =useState([]);
  useEffect(()=>{
    setCardDashboard(clientes);
  },[]); 

  const clientes = [
    { _id: "1", ids:"Anna Blanco", field2: "123456789",field3:"liliana@gmail.com",field4:"Bogota DC",field5:"bogota",field6:"cra 1 # 1-1",field7:"3135635569"},
    
 
  ];
  const VENTAS = [
    { _id:"1",field1: 1037645234, ids: "Juan Sebastian Cabrera Rojas", field3: "Online", field4: "313248789", field5: "29/09/2021" },
    
  ];

  
  const variableCardsCliente = {
    icon:" fas fa-users",
    cardTo:"/moduloClientes/detalleCliente",
    linkIcon:"/moduloClientes/paginaEditarCliente",
    titleCard:"Cliente ID",
    filtroVendedores:"",
    field1:"Razon Social*",
    field2:"NIT/CC*",
    field3:"Email",
    field4:"Ciudad",
    field5:"Teléfono",
}
const variableCardsVendedor = {
  icon:" fas fa-user-tag",
  cardTo:"rolesUsuarios/detalleUsuario",
  linkIcon:"/moduloVendedores/paginaEditarUsuarios",
  titleCard:"Cliente ID",
  field1:"Razon Social*",
  field2:"NIT/CC*",
  field3:"Email",
  field4:"Ciudad",
  field5:"Teléfono",
}




    return (
      <PrivateRoute>
       <>
            <BotonesDashboard/>
            <Cards variableCards={variableCardsCliente} cardsinformation={cardsDashboard}/>
            <Cards variableCards={variableCardsVendedor} cardsinformation={cardsDashboard}/>
       </>
        
       </PrivateRoute>
    );
}

export default Dashboard
