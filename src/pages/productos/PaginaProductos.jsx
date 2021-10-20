import Cards from '../../components/Cards';
import UpperBarSection from '../../components/UpperBarSection';




const PaginaProductos =()=> {
    const BASE_URL = process.env.REACT_APP_BASE_URL;


const variableCards = {
    
    icon:"fas fa-tshirt",
    cardTo:"/productos/detalleProducto",
    route:`${BASE_URL}/productos`,
    page:"/productos",
    linkIcon:"/productos/actualizarProducto",
    filtroVendedores:false,
    titleCard:"Id Producto",
    field1:"Descripción",
    field2:"Valor unitario",
    field3:"Unidades disponibles",
    field4:"Talla",
    field5:"Estado",
}



    return (
     <>
        <UpperBarSection titlePage="Productos" nameButton="Nuevo Producto" selectorButton="/productos/nuevoProducto" vendedores= {true}/>
        <Cards variableCards={variableCards} edit={false}/>   
     </> 
      
    );
  }
  export default PaginaProductos;
