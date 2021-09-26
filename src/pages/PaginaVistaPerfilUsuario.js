import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import VistaPerfilUsuario from '../modules/vistaPerfilUsuario/VistaPerfilUsuario';

const PaginaVistaPerfilUsuario =()=> {

    return (
     <>
      <Sidebar />
      <main>
        <Navbar/>
          <section className="container-cards">
            <section className="contenido">
              <VistaPerfilUsuario/>
            </section>
          </section>  
      </main>
     </>    
    );
  }
  export default PaginaVistaPerfilUsuario;