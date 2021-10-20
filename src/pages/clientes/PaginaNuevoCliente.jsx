import NoButtonUpperBarSection from "../../modules/noButtonUpperBarSection/NoButtonUpperBarSection";
import NuevoCliente from "../../modules/nuevoCliente/NuevoCliente";


const PaginaNuevoCliente =()=>{
  
  const formLabelTitle = {
    label1:"Razón Social",
    label2:"NIT/C.C.",
    label3:"Correo electrónico",
    label4:"Ciudad",
    label5:"Teléfono",
    label6:"Departamento",
    label7:"Dirección",
    label8:"Persona de contacto",
}

    return(
      <>
        <NoButtonUpperBarSection title="Agregar Cliente" edit={false}/>
        <NuevoCliente formLabelTitle = {formLabelTitle}/>
      </>


    );

}


export default PaginaNuevoCliente;