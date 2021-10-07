
import Form from '../../modules/Formularios/Form';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';
import AgregarUsuario from '../../modules/nuevoUsuario/AgregarUsuario';




const PaginaAgregarUsuarios =()=>{

    const formLabelTitle = {
        label1:"Documento",
        label2:"Rol",
        label3:"Estado",
        label4:"Fecha de ingreso",
        label5:"Nombres y apellidos",
        label6:"Especialidad",
        label7:"Celular",
    }

    return(
        <>
            <NoButtonUpperBarSection title="Agregar Cliente"/>
            <AgregarUsuario formLabelTitle = {formLabelTitle}/>
           
        </> 
    );
}

export default PaginaAgregarUsuarios;