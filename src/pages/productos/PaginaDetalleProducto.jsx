import DetalleProducto from '../../modules/detalleProducto/DetalleProducto';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';



const PaginaDetalleProducto =()=>{

    return(
        <>
            <NoButtonUpperBarSection title="Detalle Producto"/>
            <DetalleProducto/>
       </> 
    );
}

export default PaginaDetalleProducto;