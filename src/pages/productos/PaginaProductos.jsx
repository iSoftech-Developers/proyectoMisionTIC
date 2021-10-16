import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';




const PaginaProductos =()=> {


const variableCards = {
    icon:"fas fa-tshirt",
    cardTo:"/productos/detalleProducto",
    route:"http://localhost:3001/productos",
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
