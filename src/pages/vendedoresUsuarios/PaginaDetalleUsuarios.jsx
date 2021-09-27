import Sidebar from '../../modules/sidebar/Sidebar';
import Navbar from '../../modules/navbar/Navbar';
import DetalleUsuarios from '../../modules/detalleUsuarios/DetalleUsuarios';
import Form from '../../modules/Formularios/Form'

const PaginaDetalleUsuarios =()=>{

    const formLabelTitle = {
        label1:"ID",
        label2:"Nombres y apellidos",
        label3:"Fecha de Ingreso",
        label4:"Numero de celular",
        label5:"Especialidad",
        label6:"Rol",
    }

    return(
        <>
        <Sidebar />
        <main>
              <Navbar/>
                <section className="container-cards">
                    <section className="contenido">
                        <DetalleUsuarios/>
                        <Form formLabelTitle = {formLabelTitle} />
                    </section>
                </section>         
        </main>
       </> 
    );
}

export default PaginaDetalleUsuarios;