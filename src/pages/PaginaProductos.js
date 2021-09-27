import Sidebar from "../modules/sidebar/Sidebar";
import Navbar from "../modules/navbar/Navbar";
import NoButtonUpperBarSection from "../modules/noButtonUpperBarSection/NoButtonUpperBarSection";
import Tablas from "../modules/tablas/tablas";


const PaginaProductos =()=>{


    return(
      <>

      <Sidebar />
      <main>
        <Navbar/>
      
          <section className="contenido">
          <NoButtonUpperBarSection titlePageProduct="Listado de Productos"/>
          <Tablas titleListProduct="" field1="ID Producto" field2="Producto" field3="Precio" field4="Talla" field5="Cantidad" field6="Total"/>
           
          </section>
      </main>
      </>

    );

}


export default PaginaProductos;