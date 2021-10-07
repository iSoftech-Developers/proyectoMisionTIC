import DetalleCliente from "../../modules/detalleCliente/DetalleCliente";
import NobuttonUpperBarSection from'../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';
import Tablas from '../../modules/tablas/tablas'
import UpperBarSection from "../../modules/upperBarSection/UpperBarSection";


const PaginaDetalleClientes = ({cardsClientes}) => {
    return (
        <>
            <NobuttonUpperBarSection title="Detalle Id cliente"/>           
            <DetalleCliente cardsinformation={cardsClientes} />
            <Tablas field1="ID Producto" field2="Producto" field3="Precio" field4="Talla" field5="Cantidad" field6="Total" />
        </>
    )
}

export default PaginaDetalleClientes
