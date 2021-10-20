import React from 'react'
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection'
import EditarVenta from '../../modules/editarVenta/EditarVenta';

const PaginaEditarVenta = () => {
    return (
        <>
            <NoButtonUpperBarSection title="Editar Venta" edit={false}/>
            <EditarVenta/>
        </>
    )
}

export default PaginaEditarVenta
