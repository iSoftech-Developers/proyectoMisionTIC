import NoButtonUpperBarSection from "../../modules/noButtonUpperBarSection/NoButtonUpperBarSection";
import NuevoCliente from "../../modules/nuevoCliente/NuevoCliente";
import UpperBarSection from "../../modules/upperBarSection/UpperBarSection";


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
        <NoButtonUpperBarSection title="Agregar Cliente"/>
        <NuevoCliente formLabelTitle = {formLabelTitle}/>
      </>


    );

}


export default PaginaNuevoCliente;