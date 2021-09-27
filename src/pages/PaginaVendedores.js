import Sidebar from '../modules/sidebar/Sidebar';
import Navbar from '../modules/navbar/Navbar';
import Cards from '../modules/cards/Cards';
import NoButtonUpperBarSection from '../modules/noButtonUpperBarSection/NoButtonUpperBarSection'


const PaginaVendedores =()=> {


    return (
     <>
  
      <Sidebar />
      <main>
        <Navbar/>
        <section className="container-cards">
      
          <section className="contenido">
            <NoButtonUpperBarSection titlePage="Vendedores"/>
            <Cards titleCard="Vendedor Id:"field1="Documento" field2="Nombre y Apellidos" field3="Especialidad" field4="Numero de celular" field5="Fecha de ingreso"/>
            <Cards titleCard="Vendedor Id:"field1="Documento" field2="Nombre y Apellidos" field3="Especialidad" field4="Numero de celular" field5="Fecha de ingreso"/>
            <Cards titleCard="Vendedor Id:"field1="Documento" field2="Nombre y Apellidos" field3="Especialidad" field4="Numero de celular" field5="Fecha de ingreso"/>
            <Cards titleCard="Vendedor Id:"field1="Documento" field2="Nombre y Apellidos" field3="Especialidad" field4="Numero de celular" field5="Fecha de ingreso"/>
            <Cards titleCard="Vendedor Id:"field1="Documento" field2="Nombre y Apellidos" field3="Especialidad" field4="Numero de celular" field5="Fecha de ingreso"/>
            <Cards titleCard="Vendedor Id:"field1="Documento" field2="Nombre y Apellidos" field3="Especialidad" field4="Numero de celular" field5="Fecha de ingreso"/>
            <Cards titleCard="Vendedor Id:"field1="Documento" field2="Nombre y Apellidos" field3="Especialidad" field4="Numero de celular" field5="Fecha de ingreso"/>
            <Cards titleCard="Vendedor Id:"field1="Documento" field2="Nombre y Apellidos" field3="Especialidad" field4="Numero de celular" field5="Fecha de ingreso"/>
            <Cards titleCard="Vendedor Id:"field1="Documento" field2="Nombre y Apellidos" field3="Especialidad" field4="Numero de celular" field5="Fecha de ingreso"/>
            <Cards titleCard="Vendedor Id:"field1="Documento" field2="Nombre y Apellidos" field3="Especialidad" field4="Numero de celular" field5="Fecha de ingreso"/>
          </section>
        </section>
      </main>
     </> 
      
    );
  }
  export default PaginaVendedores;