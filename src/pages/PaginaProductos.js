import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import Cards from '../modules/cards/Cards';
import UpperBarSection from '../modules/upperBarSection/UpperBarSection';


const PaginaProductos =()=> {


    return (
     <>
  
      <Sidebar />
      <main>
        <Navbar/>
          <section className="container-cards">   
            <section className="contenido">
              <UpperBarSection titlePage="Productos" nameButton="Nuevo Producto" selectorButton="/nuevaVenta"/>
              <Cards titleCard="Id Producto" field1="Descripcion" field2="Valor Unitario" field3="Unidades disponibles" field4="Talla" field5="Estado"/>
            </section>  
          </section>
      </main>
     </> 
      
    );
  }
  export default PaginaProductos;
