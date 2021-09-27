
import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import UpperBarSection from '../modules/upperBarSection/UpperBarSection';
import Gestorderoles from '../modules/gestorderoles/Gestorderoles';


const PaginaGestorRoles = () => {
    return(
        <>
        <Sidebar />
        <main>
          <Navbar/>
            <section className="contenido">
                <UpperBarSection titlePage="USUARIOS" nameButton="NUEVO USUARIO"/>
                <Gestorderoles />
            </section>
        </main>     
       </> 
    );
}

export default PaginaGestorRoles

