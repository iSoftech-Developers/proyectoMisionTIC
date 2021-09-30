import DetalleVentas from '../../modules/detalleVentas/DetalleVentas';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';
import Tablas from '../../modules/tablas/tablas'



const PaginaInfoDetalleVentas =()=>{

    return(
        <>
            <NoButtonUpperBarSection title="Detalle de venta"/>
            <DetalleVentas/>
            <Tablas field1="ID Producto" field2="Producto" field3="Precio" field4="Talla" field5="Cantidad" field6="Total"/>
       </>
    );
}

export default PaginaInfoDetalleVentas;