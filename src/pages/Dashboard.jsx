import React from 'react'
import BotonesDashboard from '../modules/botonesDashboard/BotonesDashboard'
  

const Dashboard = () => {

  
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
       <>
            <BotonesDashboard/>
       </>
        
    );
}

export default Dashboard
