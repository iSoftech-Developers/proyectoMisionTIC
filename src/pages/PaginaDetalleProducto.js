import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import DetalleProducto from '../modules/detalleProducto/DetalleProducto';
import NoButtonUpperBarSection from '../modules/noButtonUpperBarSection/NoButtonUpperBarSection';
import Tablas from '../modules/tablas/tablas'



const PaginaDetalleProducto =()=>{

    return(
        <>
        <Sidebar />
        <main>
          <Navbar/>
            <section className="container-cards">
                <section className="contenido">
                    <NoButtonUpperBarSection/>
                    <DetalleProducto/>
                    <Tablas field1="ID Producto" field2="Producto" field3="Precio" field4="Talla" field5="Cantidad" field6="Total"/>
                </section>
            </section>
        </main>
       </> 
    );
}

export default PaginaDetalleProducto;