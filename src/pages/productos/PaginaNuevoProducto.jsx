
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';
import NuevoProducto from '../../modules/nuevoProducto/NuevoProducto';
import Tablas from '../../modules/tablas/tablas';


const PaginaNuevoProducto =()=> {

  const formLabelTitle = {
    label1:"Descripción",
    label2:"Género",
    label3:"Color",
    label4:"Talla",
    label5:"Cantidad",
    label6:"Valor unitario",
    label7:"Estado",
    label8:"ID automatico"
}


    return (
     <>
        <NoButtonUpperBarSection title="Nuevo Producto"/>
        <NuevoProducto formLabelTitle = {formLabelTitle}/>
        <Tablas field1="ID Producto" field2="Descripción" field3="Talla" field4="Valor unitario" field6="Estado"/>
     </> 
      
    );
  }
  export default PaginaNuevoProducto;