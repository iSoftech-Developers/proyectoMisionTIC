import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import Cards from '../modules/cards/Cards';
import UpperBarSection from '../modules/upperBarSection/UpperBarSection';


const PaginaVendedores =()=> {


    return (
     <>
  
      <Sidebar />
      <main>
        <Navbar/>
      
          <section className="contenido">
            <UpperBarSection hidden="true"/>
            <Cards field1="Documento" field2="Nombre y Apellidos" field3="Especialidad" field4="Numero de celular" field5="Fecha de ingreso"/>
          </section>
      </main>
     </> 
      
    );
  }
  export default PaginaVendedores;