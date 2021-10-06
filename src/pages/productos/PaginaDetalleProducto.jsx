import DetalleProducto from '../../modules/detalleProducto/DetalleProducto';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';



const PaginaDetalleProducto =( {cardsProductosInformation})=>{

    return(
        <>
            <NoButtonUpperBarSection title="Detalle Producto"/>
            <DetalleProducto cardsinformation={cardsProductosInformation}/>
       </> 
    );
}

export default PaginaDetalleProducto;