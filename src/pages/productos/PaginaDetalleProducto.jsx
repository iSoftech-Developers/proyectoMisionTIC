import NoButtonUpperBarSection from '../../components/NoButtonUpperBarSection';
import { useSeleccionado } from "../../context/Seleccionado";



const PaginaDetalleProducto =()=>{
    const {seleccionado}=useSeleccionado()

    return(
        <>
            <NoButtonUpperBarSection title="Detalle Producto" cardTo="/productos/actualizarProducto" edit={true}/>
            <div className="flex justify-between">
                    <div className="">
                        <div>
                            <span className="block font-bold">Descripción</span>
                            <span>{seleccionado.field1}</span>
                        </div>
                        <div className="my-8">
                            <span className="block font-bold">Valor Unitario</span>
                            <span>{seleccionado.field2}</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="block font-bold">Unidades disponibles</span>
                            <span>{seleccionado.field3}</span>
                        </div>
                        <div className="my-8">
                            <span className="block font-bold">Talla</span>
                            <span>{seleccionado.field4}</span>
                        </div>
                    </div> 
                    <div className="">
                        <div>
                            <span className="block font-bold">Estado</span>
                            <span>{seleccionado.field5}</span>
                        </div>
                        <div className="my-8">
                            <span className="block font-bold">Género</span>
                            <span>{seleccionado.field6}</span>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <span className="block font-bold">Color</span>
                            <span>{seleccionado.field7}</span>
                        </div>
                    </div>
                </div> 
       </> 
    );
}

export default PaginaDetalleProducto;