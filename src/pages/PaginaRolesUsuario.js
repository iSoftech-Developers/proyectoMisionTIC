import Navbar from "../modules/navbar/Navbar";
import Sidebar from "../modules/sidebar/Sidebar";
import UpperBarSection from "../modules/upperBarSection/UpperBarSection";


const PaginaRolesUsuario =()=>{



    return(
        <>
      <Sidebar />
      
        <Navbar/>
          <section className="container-cards">
      
            <section className="contenido">
              <UpperBarSection titlePage="Administrar Usuarios" nameButton="NUEVO USUARIO"/>

              
            </section>
          </section>
        </>


    );

}


export default PaginaRolesUsuario;