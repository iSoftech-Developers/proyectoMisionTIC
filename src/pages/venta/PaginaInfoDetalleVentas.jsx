import DetalleVentas from '../../modules/detalleVentas/DetalleVentas';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';
import Tablas from '../../modules/tablas/tablas'



const PaginaInfoDetalleVentas =()=>{

    return(
        <>
            <NoButtonUpperBarSection title="Detalle de venta"/>
            <DetalleVentas/>
       </>
    );
}

export default PaginaInfoDetalleVentas;