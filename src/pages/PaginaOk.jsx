import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import Ok from '../modules/ok/Ok';


const PaginaOk =()=> {


    return (
     <>
  
      <Sidebar />
      <main>
        <Navbar/>
          <section className="container-cards">   
            <section className="contenido">
              <Ok/>
            </section>  
          </section>
      </main>
     </> 
      
    );
  }
  export default PaginaOk;