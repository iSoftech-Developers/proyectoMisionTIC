import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';


const PaginaProductos =()=> {

const variableCards = {
    cardTo:"/productos/detalleProducto",
    linkIcon:"/productos/actualizarProducto",
    titleCard:"Id Producto",
    field1:"Descripción",
    field2:"Valor unitario",
    field3:"Unidades disponibles",
    field4:"Talla",
    field5:"Estado",
}

const cardIcon = {
    iconProperties:"fas fa-tshirt text-white bg-gray-800 mr-4 pt-4 px-3 pb-2"
}

    return (
     <>
          <UpperBarSection titlePage="Productos" nameButton="Nuevo Producto" selectorButton="/productos/nuevoProducto"/>
          <Cards cardIcon={cardIcon} variableCards={variableCards}/>
     </> 
      
    );
  }
  export default PaginaProductos;
