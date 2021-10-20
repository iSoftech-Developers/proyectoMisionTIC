import NoButtonUpperBarSection from '../../components/NoButtonUpperBarSection';
import Tablas from '../../components/tablas';
import { useSeleccionado } from "../../context/Seleccionado";


const PaginaDetalleClientes = () => {

    const {seleccionado}=useSeleccionado()
    return (
        <>
            <NoButtonUpperBarSection title="Detalle Id cliente" cardTo="/moduloClientes/paginaEditarCliente" edit={true}/>
            <div className="flex justify-between">
                <div className="">
                    <div>
                        <span className="block font-bold">Razon social</span>
                        <span>{seleccionado.field1}</span>
                    </div>
                    <div className="my-8">
                        <span className="block font-bold">Direccion</span>
                        <span>{seleccionado.field7}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span className="block font-bold">NIT/C.C.</span>
                        <span>{seleccionado.field2}</span>
                    </div>
                    <div className="my-8">
                        <span className="block font-bold">Departamento</span>
                        <span>{seleccionado.field6}</span>
                    </div>
                </div>
                <div className="">
                    <div>
                        <span className="block font-bold">Telefono</span>
                        <span>{seleccionado.field5}</span>
                    </div>
                    <div className="my-8">
                        <span className="block font-bold">Municipio</span>
                        <span>{seleccionado.field4}</span>
                    </div>
                </div>
                <div className="">
                    <div>
                        <span className="block font-bold">Email</span>
                        <span>{seleccionado.field3}</span>
                    </div>
                </div>
            </div> 
            <Tablas field1="ID Producto" field2="Producto" field3="Precio" field4="Talla" field5="Cantidad" field6="Total" />
        </>
    )
}

export default PaginaDetalleClientes
