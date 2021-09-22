import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import UpperBarSection from '../modules/upperBarSection/UpperBarSection';
import DetalleVentas from '../modules/detalleVentas/DetalleVentas';


const PaginaInfoDetalleVentas =()=>{

    return(
        <>
        <Sidebar />
        <main>
          <Navbar/>
            <section className="contenido">
                <UpperBarSection/>
                <DetalleVentas/>

            </section>
        </main>
       </> 
    );
}

export default PaginaInfoDetalleVentas;