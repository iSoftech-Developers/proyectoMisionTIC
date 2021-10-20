import Cards from "../../components/Cards";

const PaginaVendedores =()=> {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const variableCards = {
    icon:"fas fa-user-tag",
    cardTo:"/rolesUsuarios/detalleUsuarios",
    linkIcon:"/moduloVendedores/paginaEditarUsuarios",
    route:`${BASE_URL}/usuarios`,
    filtroVendedores:true,
    page:"/moduloVendedores",
    field1:"Nombre y Apellidos",
    field2:"Documento", 
    field3:"Correo electrónico",
    field4:"Rol",
    field5:"Fecha de ingreso",
}
    return (
     <>        
        <div className=" my-9 flex justify-between">
            <span className="text-2xl font-bold">Lista de Vendedores</span> 
        </div>
        <Cards variableCards={variableCards} edit={false}/>
     </> 
      
    );
  }
  export default PaginaVendedores;