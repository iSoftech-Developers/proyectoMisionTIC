import { useRef , useState,useEffect } from "react";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { obtenerDB } from "../../utils/GetDB";
import PostDB from '../../utils/PostDB';

const NuevaVenta=()=>{
  const BASE_URL = process.env.REACT_APP_BASE_URL;

    const form = useRef(null);
    const [vendedores, setVendedores] = useState([]);
    const [productos, setProductos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [productosTabla, setProductosTabla] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [CapturaInput,setCapturaInput]=useState();
    const [clienteSelect,setClienteSelect]=useState({})


   



    useEffect(() => {
      if (ejecutarConsulta){

      
        const fetchVendores =  () => {
            obtenerDB(setVendedores,setEjecutarConsulta,`${BASE_URL}/usuarios`);
        };
        const fetchProductos=()=>{
            obtenerDB(setProductos,setEjecutarConsulta,`${BASE_URL}/productos`)
        }
        const fetchClientes=()=>{
          obtenerDB(setClientes,setEjecutarConsulta,`${BASE_URL}/clientes`)
      }
      setEjecutarConsulta(false)

      fetchVendores();
      fetchProductos();
      fetchClientes();
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
        return productosTabla.filter((v) => v._id === nuevaVenta[k])[0]
      }
      return null;
    })
    .filter((v) => v);


    


    Object.keys(nuevaVenta).forEach((k) => {
      
        if (k.includes('cantidad')) {
          const indice = parseInt(k.split('_')[1]);
          listaProductos[indice]['cantidad'] = nuevaVenta[k];       
        }
        
      });


      let sumador = 0
      listaProductos.map(tp=>{
        tp.field8=tp.field2*tp.cantidad
        sumador=sumador+tp.field8
        return null;
      })
  
      console.log('lista despues de cantidad', listaProductos);
      

      const datosVenta = {
        fechaPago:nuevaVenta.payDate,
        estadoVenta:nuevaVenta.saleStatus,
        valorTotalVenta: sumador,
        vendedor: vendedores.filter((v) => v._id === nuevaVenta.vendedor)[0],
        productos: listaProductos,
        cliente:clientes.filter((i)=>i._id===clienteSelect._id)[0],
        
      };
  

      PostDB(datosVenta, `${BASE_URL}/venta`)


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
                            <select name='vendedor' className='p-2 input-border' defaultValue='' required >
                                <option disabled value=''> Seleccione un Vendedor </option>
                                {vendedores.map((el) => {
                                  if (el.field4==="Vendedor"){
                                    return (<option key={el._id} value={el._id}>{`${el.field1}`}</option>);
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
                        <input required disabled  className=" w-full h-8 p-2 rounded-md input-border" type="text" name="clienteName" id="clienteName" value={clienteSelect.field1}/>
                    </div>
                    <div className="w-1/6">
                        <label htmlFor="payDate">Fecha de pago</label>
                        <input required className=" w-full h-8 p-2 input-border" type="Date" name="payDate" id="payDate"/>
                    </div>
                </div>
                <div className="form-lower-section flex justify-between font-bold label-color">
                    <div className="w-1/6 ">
                            <label htmlFor="celNumber">Teléfono</label>
                            <input required disabled className=" w-full h-8 p-2 input-border" type="text" name="celNumber" id="celNumber" value={clienteSelect.field5}/>
                        </div>
                        <div className="w-1/6">
                            <label htmlFor="clienteCity">Ciudad</label>
                            <input required disabled className=" w-full h-8 p-2 input-border" type="text" name="clienteCity" id="clienteCity" value={clienteSelect.field4}/>
                        </div>
                        <div className="w-1/6">
                            <label htmlFor="clienteEmail">Email</label>
                            <input required disabled className=" w-full h-8 p-2 input-border" type="email" name="clienteEmail" id="clienteEmail" value={clienteSelect.field3}/>
                        </div> 
                    <div className="w-1/6 mb-12">
                    <label htmlFor="saleStatus">Estado de venta</label>
                            <select required className=" w-full h-8 input-border text-gray-500 " name="saleStatus">
                                <option value="En Proceso">En proceso</option>
                            </select>
                    </div>
                </div>
                <div className= "w-full">
                  <TablaProductos
                  productos={productos}
                  setProductos={setProductos}
                  setProductosTabla={setProductosTabla} />
                </div>
                <div className=" w-full flex justify-center">
                    <input className="w-1/6 cursor-pointer bg-green-600 hover:bg-green-500 h-10 rounded text-white font-bold my-8" type="submit" value="Guardar"/>
                    <ToastContainer position="top-right" autoClose={5000}/>
                </div>
            </form>
    </div>

    );
}

const TablaProductos = ({ productos, setProductos, setProductosTabla}) => {

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


  const modificarProducto = (producto, cantidad) => {
    console.log('filas tabla',filasTabla)
    
    setFilasTabla(
      filasTabla.map((ft) => {
        if (ft._id === producto.id) {
          ft.cantidad = cantidad;
          ft.total = producto.valor * cantidad;
        }
        return ft;
      })
    );
  };

  return (
    <>
      <div className='flex w-full justify-between'>
        <label className='flex flex-col' htmlFor='produto'>
          <select
            className='p-2 input-border font-bold'
            value={productoAAgregar._id ?? ''}
            onChange={(e) => 
            setProductoAAgregar(productos.filter((v) => v._id === e.target.value)[0])}>
            <option disabled value=''>
              Seleccione un Producto
            </option>
            {productos.map((el) => {
              return (
                <option 
                  key={el._id}
                  value={el._id}
                >{`${el.field1} ${el.field6} ${el.field4} ${el.field7}`}</option>
              );
            })}
          </select>
        </label>
        <button
          type='button'
          onClick={() => agregarNuevoProducto()}
          className= {`col-span-2 bg-gray-500 p-2 rounded shadow-md hover:bg-gray-400 text-white ${buttonActive}`}>
          Agregar Producto
        </button>
      </div>
      <table className=' w-full bg-white border-solid border-gray-300 border my-5'>
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
              key={el._id}
              pr={el}
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








const FilaProducto =({pr , index,eliminarProducto,modificarProducto})=>{


  const [prenda, setPrenda] = useState(pr);




  return (

    <tr>
      <td align="center">{prenda.ids}</td>
      <td align="center">{prenda.field1}</td>
      <td align="center">{prenda.field6}</td>
      <td align="center">{prenda.field4}</td>
      <td align="center">{prenda.field7}</td>
      <td align="center">
        <label htmlFor={`valor_${index}`}>
          <input className="w-20 text-center" 
          value={prenda.cantidad} 
          type='number'
          name={`cantidad_${index}`} 
          min={0}
          onChange={(e) => {
          modificarProducto(prenda, e.target.value === '' ? '0' : e.target.value);
          setPrenda({
              ...prenda,
              cantidad: e.target.value === '' ? '0' : e.target.value,
              field8:parseFloat(prenda.field2) *parseFloat(e.target.value === '' ? '0' : e.target.value),
                });
              }}
          />
        </label>  
      </td>
      <td align="center">{prenda.field2}</td>
      <td align="center">{parseFloat(prenda.field8 ?? 0)}</td>
      <td align="center">
        <i
          onClick={() => eliminarProducto(prenda)}
          className='fas fa-minus text-red-500 cursor-pointer'
        />
      </td>
      <td className='hidden'>
      <input hidden defaultValue={prenda._id} name={`producto_${index}`} />
      </td>
  </tr>

  );
}






export default NuevaVenta;