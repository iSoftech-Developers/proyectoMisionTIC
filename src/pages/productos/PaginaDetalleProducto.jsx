import Sidebar from '../../modules/sidebar/Sidebar';
import Navbar from '../../modules/navbar/Navbar';
import DetalleProducto from '../../modules/detalleProducto/DetalleProducto';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';



const PaginaDetalleProducto =()=>{

    return(
        <>
        <Sidebar />
        <main>
          <Navbar/>
            <section className="container-cards">
                <section className="contenido">
                    <NoButtonUpperBarSection title="Detalle Producto"/>
                    <DetalleProducto/>
                </section>
            </section>
        </main>
       </> 
    );
}

export default PaginaDetalleProducto;