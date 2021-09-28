import Sidebar from "../../modules/sidebar/Sidebar";
import Navbar from "../../modules/navbar/Navbar";
import CrearClienteCris from "../../modules/crearClienteCris/CrearClienteCris";


const PaginaDetalleClientes = () => {
    return (
        <>
      <Sidebar />
      <main>
        <Navbar/>
          <section className="container-cards">
            <section className="contenido"> 
                 <CrearClienteCris/>
            </section>
          </section>
      </main>
      </>
    )
}

export default PaginaDetalleClientes
