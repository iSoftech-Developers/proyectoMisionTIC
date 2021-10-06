
import Tablas from '../../modules/tablas/tablas';
import ActualizarProducto from '../../modules/actualizarProducto/ActualizarProducto';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';


const PaginaActualizarProducto =()=> {

  const formLabelTitle = {
    label1:"Descripción",
    label2:"Talla",
    label3:"Cantidad",
    label4:"Valor unitario",
    label5:"Estado",
}


    return (
     <>
        <NoButtonUpperBarSection title="Actualizar producto"/>
        <ActualizarProducto formLabelTitle = {formLabelTitle} />
        <Tablas field1="ID Producto" field2="Descripción" field3="Talla" field4="Valor unitario" field6="Estado"/>
     </> 
      
    );
  }
  export default PaginaActualizarProducto;