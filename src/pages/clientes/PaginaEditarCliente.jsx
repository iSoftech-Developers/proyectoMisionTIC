import React from 'react'
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection'
import NuevoCliente from '../../modules/nuevoCliente/NuevoCliente'

const PaginaEditarCliente = () => {

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
             <NuevoCliente formLabelTitle={formLabelTitle}/>
           </>
    )
}

export default PaginaEditarCliente
