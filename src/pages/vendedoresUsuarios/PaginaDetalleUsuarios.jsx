import DetalleUsuarios from '../../modules/detalleUsuarios/DetalleUsuarios';

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
            <DetalleUsuarios/>
       </>
    );
}

export default PaginaDetalleUsuarios;