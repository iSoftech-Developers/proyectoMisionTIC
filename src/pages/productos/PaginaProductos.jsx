import Sidebar from '../../modules/sidebar/Sidebar';
import Navbar from '../../modules/navbar/Navbar';
import Cards from '../../modules/cards/Cards';
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';


const PaginaProductos =()=> {

const variableCards = {
    cardTo:"/detalleProducto",
    linkIcon:"/actualizarProducto",
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
  
      <Sidebar />
      <main>
        <Navbar/>
          <section className="container-cards">   
            <section className="contenido">
              <UpperBarSection titlePage="Productos" nameButton="Nuevo Producto" selectorButton="/nuevoProducto"/>
              <Cards cardIcon={cardIcon} variableCards={variableCards}/>
            </section>  
          </section>
      </main>
     </> 
      
    );
  }
  export default PaginaProductos;