import { useSeleccionado } from "../../context/Seleccionado";


const DetalleVentas=()=>{
    const {seleccionado}=useSeleccionado()

    return(

        <>
        <div className="flex justify-between mb-32">
            
                <div className="">
                    <div>
                        <span className="block font-bold">ID Responsable</span>
                        <span>{seleccionado.vendedor.field2}</span>
                    </div>
                    <div className="my-8">
                        <span className="block font-bold">Nombre Cliente</span>
                        <span>{seleccionado.cliente.field1}</span>
                    </div>
                    <div >
                        <span className="block font-bold">Departamento</span>
                        <span className="">{seleccionado.cliente.field6}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span className="block font-bold">NIT/C.C</span>
                        <span>{seleccionado.cliente.field2}</span>
                    </div>
                    <div className="my-8">
                        <span className="block font-bold">Dirección</span>
                        <span>{seleccionado.cliente.field7}</span>
                    </div>
                    <div>
                        <span className="block font-bold">Municipio</span>
                        <span>{seleccionado.cliente.field4}</span>
                    </div>
                </div>
                <div className="">
                    <div>
                        <span className="block font-bold">Fecha de pago</span>
                        <span>{seleccionado.fechaPago}</span>
                    </div>
                    <div className="my-8">
                        <span className="block font-bold">Celular</span>
                        <span>{seleccionado.cliente.field5}</span>
                    </div>
                    <div className="my-8">
                        <span className="block font-bold">Valor total de la compra</span>
                        <span>$ {seleccionado.valorTotalVenta}</span>
                    </div>
                </div>
                <div className="">
                    <div>
                        <span className="block font-bold">Estado de venta</span>
                        <span>{seleccionado.estadoVenta}</span>
                    </div>
                    <div className="my-8">
                        <span className="block font-bold">Email</span>
                        <span>{seleccionado.cliente.field3}</span>
                    </div>
                </div>
            </div> 
            <TablaProductos productos={seleccionado.productos}/>
                 
        </>
    );
}

const TablaProductos =({productos})=>{


    return (
        <>
          <div className='flex w-full justify-between'>
          <h1 className="text-center w-full font-bold  text-xl">Productos comprados</h1>
          </div>
          <table className='table-fixed w-full bg-white border-solid border-gray-300 border my-5'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Genero</th>
                <th>Talla</th>
                <th>Color</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Valor total</th>
              </tr>
            </thead>
            <tbody>
                {productos.map(producto=>{
                   return <FilaProducto producto={producto}/>
                })}      
            
            </tbody>
          </table>
        </>
      );
    };



const FilaProducto =({producto})=>{
  
  
    return (
  
      <tr>
        <td align="center">{producto.ids}</td>
        <td align="center">{producto.field1}</td>
        <td align="center">{producto.field6}</td>
        <td align="center">{producto.field4}</td>
        <td align="center">{producto.field7}</td>
        <td align="center">{producto.cantidad}</td>
        <td align="center">$ {producto.field2}</td>
        <td align="center" >$ {producto.field8}</td>
    </tr>
  
    );
  }
export default DetalleVentas ;