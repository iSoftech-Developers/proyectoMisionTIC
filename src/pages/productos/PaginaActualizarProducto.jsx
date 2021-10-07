
import Tablas from '../../modules/tablas/tablas';
import ActualizarProducto from '../../modules/actualizarProducto/ActualizarProducto';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';


const PaginaActualizarProducto =()=> {

  const formLabelTitle = {
    label1:"Descripción",
    label2:"Género",
    label3:"Color",
    label4:"Talla",
    label5:"Cantidad",
    label6:"Valor unitario",
    label7:"Estado"
}


    return (
     <>
        <NoButtonUpperBarSection title="Actualizar producto"/>
        <ActualizarProducto formLabelTitle = {formLabelTitle} />
        <Tablas field1="ID Producto" field2="Descripción" field3="Talla" field4="Valor unitario" field5= "Cantidad" field6="Estado"/>
     </> 
      
    );
  }
  export default PaginaActualizarProducto;