import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import UpperBarSection from '../modules/upperBarSection/UpperBarSection';
import DetalleVentas from '../modules/detalleVentas/DetalleVentas';
import NoButtonUpperBarSection from '../modules/noButtonUpperBarSection/NoButtonUpperBarSection';
import Cards from '../modules/cards/Cards';

const PaginaInfoDetalleVentas =()=>{

    return(
        <>
        <Sidebar />
        <main>
          <Navbar   />
            <section className="contenido">
                <NoButtonUpperBarSection/>
                <DetalleVentas/>
                <Cards/>
            </section>
        </main>
       </> 
    );
}

export default PaginaInfoDetalleVentas;