import { nanoid } from 'nanoid';
import { useRef , useState,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { obtenerDB } from "../../utils/GetDB";

const NuevaVenta=()=>{

    const form = useRef(null);
    const [vendedores, setVendedores] = useState([]);
    const [productos, setProductos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [productosTabla, setProductosTabla] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);


    useEffect(() => {
      if (ejecutarConsulta){

      
        const fetchVendores =  () => {
            obtenerDB(setVendedores,setEjecutarConsulta,"http://localhost:3001/usuarios");
        };
        const fetchProductos=()=>{
            obtenerDB(setProductos,setEjecutarConsulta,"http://localhost:3001/productos")
        }
        const fetchClientes=()=>{
          obtenerDB(setClientes,setEjecutarConsulta,"http://localhost:3001/clientes")
      }
      setEjecutarConsulta(false)

      fetchVendores();
      fetchProductos();
      fetchClientes();
      console.log(vendedores)
      }
   
    },[]);
   

    const submitForm = (e) => {
        e.preventDefault();

    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value,key) => {
        nuevaVenta[key] = value;
    });


    const listaProductos = Object.keys(nuevaVenta)
    .map((k) => {
      if (k.includes('producto')) {
        return productosTabla.filter((v) => v._id === nuevaVenta[k])[0];
      }
      return null;
    })
    .filter((v) => v);
    console.log('lista antes de cantidad', listaProductos);


    Object.keys(nuevaVenta).forEach((k) => {
        if (k.includes('cantidad')) {
          const indice = parseInt(k.split('_')[1]);
          listaProductos[indice]['cantidad'] = nuevaVenta[k];
        }
      });
  
      console.log('lista despues de cantidad', listaProductos);


      const datosVenta = {
        vendedor: vendedores.filter((v) => v._id === nuevaVenta.vendedor)[0],
        productos: listaProductos,
      };
  
      console.log('lista productos', datosVenta);

    
    toast.success('Venta guardada');
};

    return(
    
        <div>
            <form ref={form} onSubmit={submitForm} className=" space-y-8 my-16">
                <div className="form-upper-section flex justify-between font-bold label-color">
                    <div className="w-1/6 ">
                        <label htmlFor="vendedor">Vendedor
                            <select name='vendedor' className='p-2 input-border' defaultValue='' required >
                                <option disabled value=''> Seleccione un Vendedor </option>
                                {vendedores.map((el) => {
                                  if (el.field4==="Vendedor"){
                                    return (<option key={nanoid()} value={el._id}>{`${el.field1}`}</option>);
                                  }
                                  return null;
                                })}
                            </select>
                        </label>
                    </div>
                    <div className="w-1/6">
                        <label htmlFor="usernit">NIT/C.C.</label>
                        <input required className=" w-full h-8 p-2 input-border" type="text" name="usernit" id="usernit"/>
                    </div>
                    <div className="w-1/6">
                        <label htmlFor="username">Nombre cliente</label>
                        <input required disabled className=" w-full h-8 p-2 rounded-md input-border" type="text" name="username" id="username" value="Crear fields en back"/>
                    </div>
                    <div className="w-1/6">
                        <label htmlFor="paydate">Fecha de pago</label>
                        <input required className=" w-full h-8 p-2 input-border" type="text" name="paydate" id="paydate"/>
                    </div>
                </div>
                <div className="form-lower-section flex justify-between font-bold label-color">
                    <div className="w-1/6 ">
                            <label htmlFor="celnumber">Teléfono</label>
                            <input required className=" w-full h-8 p-2 input-border" type="text" name="celnumber" id="celnumber"/>
                        </div>
                        <div className="w-1/6">
                            <label htmlFor="usercity">Ciudad</label>
                            <input required className=" w-full h-8 p-2 input-border" type="text" name="usercity" id="usercity"/>
                        </div>
                        <div className="w-1/6 ">
                            <label htmlFor="salestatus">Estado de venta</label>
                            <select required className=" w-full h-8 input-border text-gray-500 " name="salestatus">
                                <option value="Usuarios">En proceso</option>
                                <option value="Usuarios">Entregada</option>
                                <option value="Usuarios">Cancelada</option>
                            </select>
                        </div> 
                    <div className="w-1/6">
                    </div>
                </div>
                <div className= "w-full">
                  <TablaProductos
                  productos={productos}
                  setProductos={setProductos}
                  setProductosTabla={setProductosTabla}/>
                </div>
                <div className=" w-full flex justify-center">
                    <input className="w-1/6 cursor-pointer bg-green-600 hover:bg-green-500 h-10 rounded text-white font-bold my-8" type="submit" value="Guardar"/>
                    <ToastContainer position="top-right" autoClose={5000}/>
                </div>
            </form>
    </div>

    );
}
const TablaProductos = ({ productos, setProductos, setProductosTabla }) => {
    const [productoAAgregar, setProductoAAgregar] = useState({});
    const [filasTabla, setFilasTabla] = useState([]);
    const [buttonActive, setButtonActive] = useState('hidden');
  
    useEffect(() => {
      if(Object.keys(productoAAgregar).length !== 0){
        console.log(productoAAgregar);
        setButtonActive("")  
      }
     
    }, [productoAAgregar]);
  
    useEffect(() => {
      console.log('filasTabla', filasTabla);
      setProductosTabla(filasTabla);
    }, [filasTabla, setProductosTabla]);

   
  
    const agregarNuevoProducto = () => {
      setFilasTabla([...filasTabla, productoAAgregar]);
      setProductos(productos.filter((v) => v._id !== productoAAgregar._id));
      setProductoAAgregar({});
      setButtonActive("hidden")  
    };
  
    const eliminarProducto = (prodcutoAEliminar) => {
      setFilasTabla(filasTabla.filter((v) => v._id !== prodcutoAEliminar._id));
      setProductos([...productos, prodcutoAEliminar]);
    };
  
    return (
      <div>
        <div className='flex w-full justify-between'>
          <label className='flex flex-col' htmlFor='produto'>
            <select
              className='p-2 input-border mt-8'
              value={productoAAgregar._id ?? ''}
              onChange={(e) =>{
                setProductoAAgregar(productos.filter((v) => v._id === e.target.value)[0])
                if(e.target.value==="Seleccione un Producto"){
                  
                }
               }
              }
            >
              <option name="Seleccione un Producto" disabled value=''>
                Seleccione un Producto
              </option>
              {productos.map((el) => {
                return (
                  <option
                    key={nanoid()}
                    value={el._id}
                  >{`${el.field1} ${el.field6} ${el.field4} ${el.field7}`}</option>
                );
              })}
            </select>
          </label>
          <button
            type='button'
            onClick={() => agregarNuevoProducto()}
            className= {`col-span-2  p-2 rounded-full shadow-md bg-green-400 hover:bg-green-600 text-white ${buttonActive}`}>
            Agregar Producto
          </button>
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
              <th>Eliminar</th>
              <th className='hidden'>Input</th>
            </tr>
          </thead>
          <tbody>
            {filasTabla.map((el, index) => {
              return (
                <tr key={nanoid()}>
                  <td align="center" >{el.ids}</td>
                  <td align="center">{el.field1}</td>
                  <td align="center">{el.field6}</td>
                  <td align="center">{el.field4}</td>
                  <td align="center">{el.field7}</td>
                  <td align="center">
                    <label htmlFor={`valor_${index}`}>
                      <input type='number' name={`cantidad_${index}`} />
                    </label>
                  </td>
                  <td align="center" >
                    <i
                      onClick={() => eliminarProducto(el)}
                      className='fas fa-minus text-red-500 cursor-pointer'
                    />
                  </td>
                  <input hidden defaultValue={el._id} name={`producto_${index}`} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

export default NuevaVenta;