import DetalleVentas from '../../modules/detalleVentas/DetalleVentas';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';



const PaginaInfoDetalleVentas =()=>{

    return(
        <>
            <NoButtonUpperBarSection title="Detalle de venta" cardTo="/moduloVentas/editarVenta" edit={true}/>
            <DetalleVentas/>
       </>
    );
}

export default PaginaInfoDetalleVentas;