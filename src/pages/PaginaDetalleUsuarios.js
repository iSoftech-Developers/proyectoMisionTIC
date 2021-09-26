import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import DetalleVentas from '../modules/detalleVentas/DetalleVentas';
import DetalleUsuarios from '../modules/detalleUsuarios/DetalleUsuarios';

const PaginaDetalleUsuarios =()=>{

    return(
        <>
        <Sidebar />
        <main>
              <Navbar/>
                <section className="container-cards">
                    <section className="contenido">
                        <DetalleUsuarios/>
                    </section>
                </section>
        </main>
       </> 
    );
}

export default PaginaDetalleUsuarios;