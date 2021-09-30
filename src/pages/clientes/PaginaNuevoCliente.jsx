import NuevoCliente from "../../modules/nuevoCliente/NuevoCliente";


const PaginaNuevoCliente =()=>{
  
  const formLabelTitle = {
    label1:"Razon Social*",
    label2:"NIT/C.C.*",
    label3:"Persona Contacto*",
    label4:"Email*",
    label5:"Direccion*",
    label6:"Departamento*",
    label7:"Ciudad*",
    label8:"Telefono*",
}

    return(
      <>
        <NuevoCliente formLabelTitle = {formLabelTitle}/>
      </>


    );

}


export default PaginaNuevoCliente;