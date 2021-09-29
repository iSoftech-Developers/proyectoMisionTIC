import Sidebar from '../../modules/sidebar/Sidebar';
import Navbar from '../../modules/navbar/Navbar';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';
import EditarVenta from '../../modules/editarVenta/EditarVenta';


const PaginaEditarVenta =()=>{

    return(
        <>
        <Sidebar />
        <main>
          <Navbar/>
            <section className="container-cards">
                <section className="contenido">
                    <NoButtonUpperBarSection title="Editar Información de Venta"/>
                    <EditarVenta formlabel1="ID Venta" formlabel2="Fecha Incial de Pago*" formlabel3="Producto*" formlabel4="Fecha Final de Pago*" formlabel5="Cantidad*" formlabel6="Estado de la Venta*" formlabel7="Valor Total Venta*" formlabel8="Responsable" nameButton="GUARDAR" selectorButton="/modules/ok/Ok"/>
                    
                </section>

            </section>
        </main>
       </> 
    );
}

export default PaginaEditarVenta;