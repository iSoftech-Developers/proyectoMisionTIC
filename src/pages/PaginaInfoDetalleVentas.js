import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import DetalleVentas from './PaginaInfoDetalleVentas';





const PaginaInfoDetalleVentas =()=>{

    return(
        <>
  
        <Sidebar />
        <main>
          <Navbar   />
        
            <section className="contenido">
                <DetalleVentas/>
            </section>
        </main>
       </> 

    );
}

export default PaginaInfoDetalleVentas;