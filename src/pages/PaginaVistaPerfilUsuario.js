import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import VistaPerfilUsuario from '../modules/vistaPerfilUsuario/VistaPerfilUsuario';

const PaginaVistaPerfilUsuario =()=> {

    return (
     <>
      <Sidebar />
      <main>
        <Navbar/>
          <section className="contenido">
            <VistaPerfilUsuario/>
          </section>  
      </main>
     </>    
    );
  }
  export default PaginaVistaPerfilUsuario;