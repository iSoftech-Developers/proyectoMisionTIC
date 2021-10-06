import React from 'react'
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection'
import EditarCliente from '../../modules/editarCliente/EditarCliente'

const PaginaEditarCliente = ({cardsClientes}) => {

    const formLabelTitle = {
        label1:"Razon Social*",
        label2:"NIT/C.C.*",
        label3:"Persona Contacto*",
        label4:"Email*",
        label5:"Direccion*",
        label6:"Departamento*",
        label7:"Ciudad*",
        label8:"Telefono*",
    }

    return (

           <>
             <NoButtonUpperBarSection title="Editar Cliente"/>
             <EditarCliente formLabelTitle={formLabelTitle} cardsClientes={cardsClientes}/>
           </>
    )
}

export default PaginaEditarCliente
