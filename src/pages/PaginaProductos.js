import Sidebar from "../modules/sidebar/Sidebar";
import Navbar from "../modules/navbar/Navbar";
import UpperBarSection from "../modules/upperBarSection/UpperBarSection";
import NuevaVenta from "../modules/nuevaVenta/NuevaVenta";
import Tablas from "../modules/tablas/tablas";


const PaginaProductos =()=>{


    return(
      <>

      <Sidebar />
      <main>
        <Navbar/>
      
          <section className="contenido">
          <UpperBarSection titlePage="Listado Productos" nameButton="GUARDAR"/>
          <NuevaVenta/>
          <Tablas field1="ID Producto" field2="Producto" field3="Precio" field4="Talla" field5="Cantidad" field6="Total"/>

           
          </section>
      </main>
        </>


    );

}


export default PaginaProductos;