import Sidebar from '../../modules/sidebar/Sidebar';
import Navbar from '../../modules/navbar/Navbar';
import DetalleUsuarios from '../../modules/detalleUsuarios/DetalleUsuarios';
import EditarUsuario from '../../modules/editarUsuario/EditarUsuario';


const PaginaAgregarUsuarios =()=>{

    return(
        <>
        <Sidebar />
        <main>
              <Navbar/>
                <section className="container-cards">
                    <section className="contenido">
                        <EditarUsuario/>
                    </section>
                </section>         
        </main>
       </> 
    );
}

export default PaginaAgregarUsuarios;