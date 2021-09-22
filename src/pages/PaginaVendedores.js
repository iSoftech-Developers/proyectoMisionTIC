import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import Cards from '../modules/cards/Cards';
import NoButtonUpperBarSection from '../modules/noButtonUpperBarSection/NoButtonUpperBarSection';

const PaginaVendedores =()=> {


    return (
     <>
  
      <Sidebar />
      <main>
        <Navbar  />
      
          <section className="contenido">
            <NoButtonUpperBarSection/>
            <Cards/>
          </section>
      </main>
     </> 
      
    );
  }
  export default PaginaVendedores;