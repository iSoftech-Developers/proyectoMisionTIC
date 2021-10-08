import EditarUsuario from '../../modules/editarUsuario/EditarUsuario';


const PaginaEditarUsuarios =({})=>{

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
           <EditarUsuario formLabelTitle={formLabelTitle}/>
        </>
    );
}

export default PaginaEditarUsuarios;