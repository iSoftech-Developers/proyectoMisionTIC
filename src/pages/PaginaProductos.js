<<<<<<< HEAD
import Sidebar from "../modules/sidebar/Sidebar";
import Navbar from "../modules/navbar/Navbar";
import NoButtonUpperBarSection from "../modules/noButtonUpperBarSection/NoButtonUpperBarSection";
import Tablas from "../modules/tablas/tablas";


const PaginaProductos =()=>{


    return(
      <>

      <Sidebar />
      <main>
        <Navbar/>
      
          <section className="contenido">
          <NoButtonUpperBarSection titlePageProduct="Listado de Productos"/>
          <Tablas titleListProduct="" field1="ID Producto" field2="Producto" field3="Precio" field4="Talla" field5="Cantidad" field6="Total"/>
           
          </section>
      </main>
      </>

    );

}


export default PaginaProductos;
=======
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
>>>>>>> edbb6b30ec31bc4ee6715a183efc10dd34f32c2b
