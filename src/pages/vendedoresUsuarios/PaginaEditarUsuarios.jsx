import EditarUsuario from '../../modules/editarUsuario/EditarUsuario';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';


const PaginaEditarUsuarios =()=>{

    const formLabelTitle = {
        label1:"Documento",
        label2:"Rol",
        label3:"Estado",
        label4:"Fecha de ingreso",
        label5:"Nombres y apellidos",
        label6:"Correo electrónico",
        label7:"Celular",
    }

    return(
        <>
            <NoButtonUpperBarSection title="Editar Usuarios"/>
            <EditarUsuario formLabelTitle={formLabelTitle}/>
        </>
    );
}

export default PaginaEditarUsuarios;