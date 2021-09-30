import UpperBarSection from "../../modules/upperBarSection/UpperBarSection";
import NuevaVenta from "../../modules/nuevaVenta/NuevaVenta";
import Tablas from "../../modules/tablas/tablas";


const PaginaNuevaVenta =()=>{



    return(
        <>
            <UpperBarSection titlePage="Nueva Venta" nameButton="GUARDAR"/>
            <NuevaVenta/>
            <Tablas field1="ID Producto" field2="Producto" field3="Precio" field4="Talla" field5="Cantidad" field6="Total"/>
        </>


    );

}


export default PaginaNuevaVenta;