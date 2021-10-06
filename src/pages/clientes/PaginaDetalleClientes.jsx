import DetalleCliente from "../../modules/detalleCliente/DetalleCliente";
import NobuttonUpperBarSection from'../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';
import Tablas from '../../modules/tablas/tablas'
import UpperBarSection from "../../modules/upperBarSection/UpperBarSection";


const PaginaDetalleClientes = ({cardsClientes}) => {
    return (
        <>
<<<<<<< HEAD
            
            <NobuttonUpperBarSection title="Detalle Id cliente"/>             
            <DetalleCliente />
=======
            <NobuttonUpperBarSection title="Detalle Id cliente"/>           
            <DetalleCliente cardsinformation={cardsClientes} />
>>>>>>> 2d6c94f3471a5f438c5160a36217f01f5ccebd7b
            <Tablas field1="ID Producto" field2="Producto" field3="Precio" field4="Talla" field5="Cantidad" field6="Total" />
        </>
    )
}

export default PaginaDetalleClientes
