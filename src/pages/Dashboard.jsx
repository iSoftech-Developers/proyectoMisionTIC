import React from 'react'
import BotonesDashboard from '../modules/botonesDashboard/BotonesDashboard'
import Cards from '../modules/cards/Cards';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [cardsinfomation,setCardsinfomation] =useState([]);
  useEffect(()=>{
    setCardsinfomation(clientes);
  },[]); 

  const clientes = [
    { id: "Ultimo cliente ingresado", field1:"Liliana Romero", field2: "123456789",field3:"liliana@gmail.com",field4:"Bogota DC",field5:"bogota",field6:"cra 1 # 1-1",field7:"3135635569"},
 
  ];
  const VENTAS = [
    { id:"Ultimo vendedor ingresado",field1: 1037645234, field2: "Juan Sebastian Cabrera Rojas", field3: "Online", field4: "313248789", field5: "29/09/2021" },
  

  ];
  const variableCardsCliente = {
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
       <>
            <BotonesDashboard/>
            <Cards variableCards={variableCardsCliente} cardsInfo={clientes}/>
            <Cards variableCards={variableCardsVendedor} cardsInfo={VENTAS}/>
       </>
        
       
    );
}

export default Dashboard
