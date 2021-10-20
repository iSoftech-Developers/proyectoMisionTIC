
import NuevaVenta from "../../modules/nuevaVenta/NuevaVenta";
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection'


const PaginaNuevaVenta =()=>{

    return(
        <>    
            <NoButtonUpperBarSection title="Nueva Venta"/>
            <NuevaVenta/>
        </>


    );

}


export default PaginaNuevaVenta;