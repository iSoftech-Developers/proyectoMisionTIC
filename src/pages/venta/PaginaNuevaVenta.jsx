
import NuevaVenta from "../../modules/nuevaVenta/NuevaVenta";
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection'


const PaginaNuevaVenta =()=>{

    return(
        <>    
            <NoButtonUpperBarSection title="Nueva Venta" edit={false}/>
            <NuevaVenta/>
        </>


    );

}


export default PaginaNuevaVenta;