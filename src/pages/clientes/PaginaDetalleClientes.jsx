import Sidebar from "../../modules/sidebar/Sidebar";
import Navbar from "../../modules/navbar/Navbar";
import DetalleCliente from "../../modules/detalleCliente/DetalleCliente";
import NobuttonUpperBarSection from'../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';
import Tablas from '../../modules/tablas/tablas'


const PaginaDetalleClientes = () => {
    return (
        <>
      <Sidebar />
      <main>
        <Navbar/>
          <section className="container-cards">
        
            <section className="contenido"> 
              <NobuttonUpperBarSection title="Detalle Id cliente"/>           
              <DetalleCliente />
              <Tablas field1="ID Producto" field2="Producto" field3="Precio" field4="Talla" field5="Cantidad" field6="Total" />        
            </section>
          </section>
      </main>
      </>
    )
}

export default PaginaDetalleClientes
