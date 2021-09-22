import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import Cards from '../modules/cards/Cards';
import UpperBarSection from '../modules/upperBarSection/UpperBarSection';


const PaginaVentas =()=> {


    return (
     <>
  
      <Sidebar />
      <main>
        <Navbar/>
      
          <section className="contenido">
            <UpperBarSection selectorButton="/detalleVenta"/>
            <Cards field1="Documento" field2="Nombres y apellidos" field3="Valor total" field4="Fecha de pago" field5="Estado"/>
          </section>  
      </main>
     </> 
      
    );
  }
  export default PaginaVentas;