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
    const [CapturaInput,setCapturaInput]=useState();
    const [clienteSelect,setClienteSelect]=useState({})
    const [capturaNumber,setCapturaNumber]=useState();





   
  
  



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
        cliente:clientes.filter((i)=>i._id===clienteSelect._id)[0],
        
      };
  
      console.log('lista productos', datosVenta);

    
    toast.success('Venta guardada');
};

    
    useEffect(()=>{
      clientes.map((cliente)=>{
        if(cliente.field2===CapturaInput){
          setClienteSelect(cliente)
        }
        return null;
      })
      
    },[CapturaInput])







    return(
    
        <div>
            <form ref={form} onSubmit={submitForm} className=" space-y-8 my-16">
                <div className="form-upper-section flex justify-between font-bold label-color">
                    <div className="w-1/6 ">
                        <label htmlFor="vendedor">Vendedor
                            <select name='vendedor' className='p-2' defaultValue='' required >
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
                        <label htmlFor="clienteNit">NIT/C.C. Cliente</label>
                        <input required className=" w-full h-8 p-2 input-border" type="text" name="clienteNit" id="clienteNit" onChange={(e) => {setCapturaInput(e.target.value)}}/>
                    </div>
                    <div className="w-1/6">
                        <label htmlFor="clienteName">Nombre cliente</label>
                        <input required  className=" w-full h-8 p-2 rounded-md input-border" type="text" name="clienteName" id="clienteName" value={clienteSelect.field1}/>
                    </div>
                    <div className="w-1/6">
                        <label htmlFor="payDate">Fecha de pago</label>
                        <input required className=" w-full h-8 p-2 input-border" type="Date" name="payDate" id="payDate"/>
                    </div>
                </div>
                <div className="form-lower-section flex justify-between font-bold label-color">
                    <div className="w-1/6 ">
                            <label htmlFor="celNumber">Teléfono</label>
                            <input required className=" w-full h-8 p-2 input-border" type="text" name="celNumber" id="celNumber" value={clienteSelect.field5}/>
                        </div>
                        <div className="w-1/6">
                            <label htmlFor="clienteCity">Ciudad</label>
                            <input required className=" w-full h-8 p-2 input-border" type="text" name="clienteCity" id="clienteCity" value={clienteSelect.field4}/>
                        </div>
                        <div className="w-1/6 ">
                            <label htmlFor="clienteEmail">Email</label>
                            <input required className=" w-full h-8 p-2 input-border" type="email" name="clienteEmail" id="clienteEmail" value={clienteSelect.field3}/>
                        </div> 
                    <div className="w-1/6">
                    <label htmlFor="saleStatus">Estado de venta</label>
                            <select required className=" w-full h-8 input-border text-gray-500 " name="saleStatus">
                                <option value="Usuarios">En proceso</option>
                            </select>
                    </div>
                </div>
                <div className= "w-full">
                  <TablaProductos
                  productos={productos}
                  setProductos={setProductos}
                  setProductosTabla={setProductosTabla}
                  capturaNumber={capturaNumber}
                  setCapturaNumber={setCapturaNumber} />
                </div>
                <div className=" w-full flex justify-center">
                    <input className="w-1/6 cursor-pointer bg-green-400 h-10 rounded text-white font-bold my-16" type="submit" value="Guardar"/>
                    <ToastContainer position="top-right" autoClose={5000}/>
                </div>

            </form>
           
    </div>

    );
}

const TablaProductos = ({ productos, setProductos, setProductosTabla,capturaNumber,setCapturaNumber }) => {

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


  useEffect(() => {
    console.log(capturaNumber);
    
  },);


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


  const modificarProducto = (producto, cantidad) => {
    const productoModificado = filasTabla.filter((v) => v._id === producto._id)[0];
    productoModificado.cantidad = cantidad;
    let ft = [...filasTabla];
    ft = ft.filter((v) => v._id !== producto._id);
    ft = [...ft, productoModificado];
    setFilasTabla(ft);
  };

  return (
    <>
      <div className='flex w-full justify-between'>
        <label className='flex flex-col' htmlFor='produto'>
          <select
            className='p-2'
            value={productoAAgregar._id ?? ''}
            onChange={(e) => setProductoAAgregar(productos.filter((v) => v._id === e.target.value)[0])}>
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
          className= {`col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white ${buttonActive}`}>
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
            <th>Precio Unitario</th>
            <th>Valor total</th>
            <th>Eliminar</th>
            <th className='hidden'>Input</th>
          </tr>
        </thead>
        <tbody>
          {filasTabla.map((el, index) => {
            return (


              <FilaProducto
              key={nanoid()}
              producto={el}
              index={index}
              eliminarProducto={eliminarProducto}
              modificarProducto={modificarProducto}
            />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const FilaProducto =({producto , index,eliminarProducto,modificarProducto})=>{
  return (

    <tr key={nanoid()}>
      <td align="center" >{producto.ids}</td>
      <td align="center">{producto.field1}</td>
      <td align="center">{producto.field6}</td>
      <td align="center">{producto.field4}</td>
      <td align="center">{producto.field7}</td>
      <td align="center">
        <label htmlFor={`cantidad_${index}`}>
          <input value={producto.cantidad}  type='text' name={`cantidad_${index}`}  id={`cantidad_${index}` } 
          onBlur={(e) => modificarProducto(producto, e.target.value)}/>
        </label>  
      </td>
      <td align="center">$ {producto.field2}</td>
      <td align="center">$ {producto.field2 *producto.cantidad}</td>
      <td align="center">
        <i
          onClick={() => eliminarProducto(producto)}
          className='fas fa-minus text-red-500 cursor-pointer'
        />
      </td>
      <input hidden defaultValue={producto._id} name={`producto_${index}`} />
  </tr>

  );
}






export default NuevaVenta;