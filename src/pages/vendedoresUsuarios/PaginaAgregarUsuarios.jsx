import DetalleUsuarios from '../../modules/detalleUsuarios/DetalleUsuarios';
import Form from '../../modules/Formularios/Form';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';


const PaginaAgregarUsuarios =()=>{

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
            <NoButtonUpperBarSection title="Agregar Usuario"/>
            <DetalleUsuarios/>
            <Form formLabelTitle = {formLabelTitle} />
        </> 
    );
}

export default PaginaAgregarUsuarios;