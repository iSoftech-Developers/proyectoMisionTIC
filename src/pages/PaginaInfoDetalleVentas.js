import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import UpperBarSection from '../modules/upperBarSection/UpperBarSection';
import DetalleVentas from '../modules/detalleVentas/DetalleVentas';
import NoButtonUpperBarSection from '../modules/noButtonUpperBarSection/NoButtonUpperBarSection';
import Cards from '../modules/cards/Cards';
import Tablas from '../modules/tablas/tablas'


const PaginaInfoDetalleVentas =()=>{

    return(
        <>
        <Sidebar />
        <main>
          <Navbar/>
            <section className="contenido">
                <NoButtonUpperBarSection/>
                <DetalleVentas/>
                <Tablas field1="ID Producto" field2="Producto" field3="Precio" field4="Talla" field5="Cantidad" field6="Total"/>
            </section>
        </main>
       </> 
    );
}

export default PaginaInfoDetalleVentas;