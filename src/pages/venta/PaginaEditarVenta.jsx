import React from 'react'
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection'
import NuevaVenta from '../../modules/nuevaVenta/NuevaVenta'
import Tablas from '../../modules/tablas/tablas';

const PaginaEditarVenta = () => {
    return (
        <>
            <NoButtonUpperBarSection title="Editar Venta"/>
            <NuevaVenta/>
            <Tablas field1="ID Producto" field2="Producto" field3="Precio" field4="Talla" field5="Cantidad" field6="Total"/>
        </>
    )
}

export default PaginaEditarVenta
