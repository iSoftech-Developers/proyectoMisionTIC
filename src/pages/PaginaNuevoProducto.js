import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import UpperBarSection from '../modules/upperBarSection/UpperBarSection';
import NuevoProducto from '../modules/nuevoProducto/NuevoProducto';
import Tablas from '../modules/tablas/tablas';


const PaginaNuevoProducto =()=> {

  const formLabelTitle = {
    label1:"Descripción",
    label2:"Talla",
    label3:"Cantidad",
    label4:"Valor unitario",
    label5:"Estado",
}


    return (
     <>
  
      <Sidebar />
      <main>
        <Navbar/>
        <section className="container-cards">
      
          <section className="contenido">
            <UpperBarSection titlePage="Registrar producto" nameButton="Agregar" />
            <NuevoProducto formLabelTitle = {formLabelTitle}/>
            <Tablas field1="ID Producto" field2="Descripción" field3="Talla" field4="Valor unitario" field6="Estado"/>
          </section>
          
        </section>
      </main>
     </> 
      
    );
  }
  export default PaginaNuevoProducto;