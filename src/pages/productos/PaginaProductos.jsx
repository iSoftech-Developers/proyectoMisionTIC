import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';


const PaginaProductos =({cardsProductosInformation})=> {

const variableCards = {
    icon:"fas fa-tshirt",
    cardTo:"/productos/detalleProducto",
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
        <Cards variableCards={variableCards} cardsinformation={cardsProductosInformation}/>
       
     </> 
      
    );
  }
  export default PaginaProductos;
