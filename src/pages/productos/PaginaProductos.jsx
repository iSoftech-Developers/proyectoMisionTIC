import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';




const PaginaProductos =()=> {


const variableCards = {
    icon:"fas fa-tshirt",
    cardTo:"/productos/detalleProducto",
    route:"http://localhost:3001/productos",
    page:"/productos",
    linkIcon:"/productos/actualizarProducto",
    titleCard:"Id Producto",
    field1:"Descripción",
    field2:"Valor unitario",
    field3:"Unidades disponibles",
    field4:"Talla",
    field5:"Estado",
}



    return (
     <>
  
  
        <UpperBarSection titlePage="Productos" nameButton="Nuevo Producto" selectorButton="/productos/nuevoProducto"/>
        <Cards variableCards={variableCards} />
       
     </> 
      
    );
  }
  export default PaginaProductos;
