import NoButtonUpperBarSection from '../../components/NoButtonUpperBarSection';
import { useRef , useState,useEffect } from "react";
import { useSeleccionado } from "../../context/Seleccionado";
import { obtenerDB } from "../../utils/GetDB";
import PatchDB from '../../utils/PatchDB'
import { ToastContainer} from "react-toastify";


const PaginaEditarVenta = () => {

    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const {seleccionado}=useSeleccionado()
    const form = useRef(null);
    const [vendedores, setVendedores] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [productos, setProductos] = useState([]);
    const [productosTabla, setProductosTabla] = useState([]);
    const [clientes, setClientes] = useState([]);


    useEffect(() => {
        if (ejecutarConsulta){
  
        
          const fetchVendores =  () => {
              obtenerDB(setVendedores,setEjecutarConsulta,`${BASE_URL}/usuarios`);
          }
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
        
    }}
    ,[])



    const submitForm = (e) => {
        e.preventDefault();

    const fd = new FormData(form.current);

    const editVenta = {};
    fd.forEach((value,key) => { 
        editVenta[key] = value;
    });

    
    const listaProductos = Object.keys(editVenta)
    .map((k) => {

      if (k.includes('producto')) {
        return productosTabla.filter((v) => v._id === editVenta[k])[0]
      }
      return null;
    })
    .filter((v) => v);


    


    Object.keys(editVenta).forEach((k) => {
      
        if (k.includes('cantidad')) {
          const indice = parseInt(k.split('_')[1]);
          listaProductos[indice]['cantidad'] = editVenta[k];       
        }
        
      });


      let sumador= 0
      listaProductos.map(tp=>{
        tp.field8=tp.field2*tp.cantidad
        sumador=sumador+tp.field8
        return null;
      })
  
      console.log('lista despues de cantidad', listaProductos);
      

      const datosVenta = {
        fechaPago:editVenta.payDate,
        estadoVenta:editVenta.saleStatus,
        valorTotalVenta: sumador,
        vendedor: vendedores.filter((v) => v._id === editVenta.vendedor)[0],
        productos: listaProductos,
        cliente:clientes.filter((i)=>i._id===seleccionado.cliente._id)[0],
        
      };
  

      PatchDB(datosVenta,seleccionado, `${BASE_URL}/venta`)
}


    return (
        <>
            <NoButtonUpperBarSection title="Editar Venta" edit={false}/>
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
                        <input required className=" w-full h-8 p-2 input-border" type="text" name="clienteNit" id="clienteNit" value={seleccionado.cliente.field2}/>
                    </div>
                    <div className="w-1/6">
                        <label htmlFor="clienteName">Nombre cliente</label>
                        <input required disabled  className=" w-full h-8 p-2 rounded-md input-border" type="text" name="clienteName" id="clienteName" value={seleccionado.cliente.field1}/>
                    </div>
                    <div className="w-1/6">
                        <label htmlFor="payDate">Fecha de pago</label>
                        <input required className=" w-full h-8 p-2 input-border" type="Date" name="payDate" id="payDate"/>
                    </div>
                </div>
                <div className="form-lower-section flex justify-between font-bold label-color">
                    <div className="w-1/6 ">
                            <label htmlFor="celNumber">Teléfono</label>
                            <input required disabled className=" w-full h-8 p-2 input-border" type="text" name="celNumber" id="celNumber" value={seleccionado.cliente.field5}/>
                        </div>
                        <div className="w-1/6">
                            <label htmlFor="clienteCity">Ciudad</label>
                            <input required disabled className=" w-full h-8 p-2 input-border" type="text" name="clienteCity" id="clienteCity" value={seleccionado.cliente.field4}/>
                        </div>
                        <div className="w-1/6">
                            <label htmlFor="clienteEmail">Email</label>
                            <input required disabled className=" w-full h-8 p-2 input-border" type="email" name="clienteEmail" id="clienteEmail" value={seleccionado.cliente.field3}/>
                        </div> 
                    <div className="w-1/6 mb-12">
                    <label htmlFor="saleStatus">Estado de venta</label>
                            <select required className=" w-full h-8 input-border text-gray-500 " defaultValue="" name="saleStatus">
                                <option disabled type="String" value="">Selecciona una opción</option>
                                <option value="En Proceso">En proceso</option>
                                <option value="Cancelado">Cancelado</option>
                                <option value="Entregado">Entregado</option>
                            </select>
                    </div>
                </div>
                <div className= "w-full">
                  <TablaProductos
                  productos={productos}
                  setProductos={setProductos}
                  setProductosTabla={setProductosTabla}
                  productosComprados={seleccionado.productos} />
                </div>
                <div className=" w-full flex justify-center">
                    <input className="w-1/6 cursor-pointer bg-green-600 hover:bg-green-500 h-10 rounded text-white font-bold my-8" type="submit" value="Guardar"/>
                    <ToastContainer position="top-right" autoClose={1000}/>
            </div>
            </form>
        </>
    )
}


const TablaProductos = ({ productos, setProductos, setProductosTabla,productosComprados}) => {

    const [productoAAgregar, setProductoAAgregar] = useState({});
    const [filasTabla, setFilasTabla] = useState([]);
    const [buttonActive, setButtonActive] = useState('hidden');


    useEffect(() =>{
        setFilasTabla(productosComprados)
    },[])
  
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
            <input 
            value={prenda.cantidad} 
            type='number'
            name={`cantidad_${index}`} 
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
        <td align="center" >{parseFloat(prenda.field8 ?? 0)}</td>
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



export default PaginaEditarVenta
