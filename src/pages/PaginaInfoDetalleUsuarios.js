import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import NoButtonUpperBarSection from '../modules/noButtonUpperBarSection/NoButtonUpperBarSection';
import DetalleUsuarios from '../modules/detalleUsuarios/DetalleUsuarios';


const PaginaInfoDetalleUsuarios =()=>{

    return(
        <>
        <Sidebar />
        <main>
          <Navbar/>
            <section className="contenido">
                <NoButtonUpperBarSection/>
                <DetalleUsuarios/>
                
            </section>
        </main>
       </> 
    );
}

export default PaginaInfoDetalleUsuarios;