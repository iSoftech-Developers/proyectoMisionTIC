import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import Cards from '../modules/cards/Cards';
import UpperBarSection from '../modules/upperBarSection/UpperBarSection';


const PaginaClientes =()=> {


    return (
     <>
  
      <Sidebar />
      <main>
        <Navbar/>
      
          <section className="contenido">
            <UpperBarSection />
            <Cards field1="Razon Social*" field2="NIT/CC*" field3="Email" field4="Dirección" field5="Teléfono"/>
          </section>
      </main>
     </> 
      
    );
  }
  export default PaginaClientes;