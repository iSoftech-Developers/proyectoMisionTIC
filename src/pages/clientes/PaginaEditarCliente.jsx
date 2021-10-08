import React from 'react'
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection'
import EditarCliente from '../../modules/editarCliente/EditarCliente'

const PaginaEditarCliente = ({cardsClientes}) => {

    const formLabelTitle = {
      label1:"Razón Social",
      label2:"NIT/C.C.",
      label3:"Correo electrónico",
      label4:"Ciudad",
      label5:"Teléfono",
      label6:"Departamento",
      label7:"Dirección",
      label8:"Persona de contacto",
  }

    return (
        <>
          <NoButtonUpperBarSection title="Editar Cliente"/>
          <EditarCliente formLabelTitle={formLabelTitle} cardsClientes={cardsClientes}/>
        </>
    )
}

export default PaginaEditarCliente
