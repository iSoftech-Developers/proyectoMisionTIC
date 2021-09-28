import Sidebar from '../../modules/sidebar/Sidebar';
import Navbar from '../../modules/navbar/Navbar';
import DetalleUsuarios from '../../modules/detalleUsuarios/DetalleUsuarios';

const PaginaVistaPerfilUsuario =()=> {

    return (
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
  export default PaginaVistaPerfilUsuario;