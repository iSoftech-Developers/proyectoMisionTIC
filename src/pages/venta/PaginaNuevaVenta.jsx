
import NuevaVenta from "../../modules/nuevaVenta/NuevaVenta";
import Tablas from "../../modules/tablas/tablas";
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection'


const PaginaNuevaVenta =()=>{




 

    return(
        <>    
            <NoButtonUpperBarSection title="Nueva Venta"/>
            <NuevaVenta/>
            <Tablas field1="ID Producto" field2="Producto" field3="Precio" field4="Talla" field5="Cantidad" field6="Total"/>
        </>


    );

}


export default PaginaNuevaVenta;