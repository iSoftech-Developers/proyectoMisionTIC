import Sidebar from "../../modules/sidebar/Sidebar";
import Navbar from "../../modules/navbar/Navbar";
import NuevaVenta from "../../modules/nuevaVenta/NuevaVenta";
import Tablas from "../../modules/tablas/tablas";
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection'


const PaginaNuevaVenta =()=>{




 

    return(
        <>
      <Sidebar />
      <main>
        <Navbar/>
          <section className="container-cards">
        
            <section className="contenido">
              
              <NoButtonUpperBarSection title="Nueva Venta"/>
              <NuevaVenta/>
              <Tablas field1="ID Producto" field2="Producto" field3="Precio" field4="Talla" field5="Cantidad" field6="Total"/>

            
            </section>
          </section>
      </main>
        </>


    );

}


export default PaginaNuevaVenta;