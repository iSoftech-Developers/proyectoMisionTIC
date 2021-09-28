import Sidebar from '../../modules/sidebar/Sidebar';
import Navbar from '../../modules/navbar/Navbar';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';
import Tablas from '../../modules/tablas/tablas';
import ActualizarProducto from '../../modules/actualizarProducto/ActualizarProducto';


const PaginaActualizarProducto =()=> {

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
            <UpperBarSection titlePage="Actualizar producto" nameButton="Guardar" />
            <ActualizarProducto formLabelTitle = {formLabelTitle} />
            <Tablas field1="ID Producto" field2="Descripción" field3="Talla" field4="Valor unitario" field6="Estado"/>
          </section>
          
        </section>
      </main>
     </> 
      
    );
  }
  export default PaginaActualizarProducto;