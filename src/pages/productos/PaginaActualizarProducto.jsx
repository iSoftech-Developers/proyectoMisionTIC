
import Tablas from '../../components/tablas';
import NoButtonUpperBarSection from '../../components/NoButtonUpperBarSection';
import { useRef } from "react";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSeleccionado } from '../../context/Seleccionado'
import PatchDB from '../../utils/PatchDB';

const PaginaActualizarProducto =()=> {

 

const BASE_URL = process.env.REACT_APP_BASE_URL;


    const urlEdit= `${BASE_URL}/productos`
    const {seleccionado}=useSeleccionado()

    const form = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();

    const fd = new FormData(form.current);

        const editarProducto = {};
        fd.forEach((value,key) => {
        editarProducto[key] = value;
        });
        const cambios={valorunitario:editarProducto.valorunitario,
            cantidad:editarProducto.cantidad,
            estado:editarProducto.estado}

        PatchDB(cambios,seleccionado,urlEdit)
    };






    return (
     <>
        <NoButtonUpperBarSection title="Actualizar producto" edit={false}/>
        <form ref={form} onSubmit={submitForm} className="space-y-8">
            <div>
                <div className="form-upper-section flex justify-between font-bold label-color space-x-4">
                        <div className="w-1/5">
                            <label for="descripcion">Descripción</label>
                            <input class=" w-full h-8 p-2 text-gray-500 input-border" type="String" name="descripcion" value={seleccionado.field1}></input>
                        </div>
                        <div className="w-1/5">
                            <label for="genero">Género</label>
                            <input class=" w-full h-8 p-2 text-gray-500 input-border" type="String" name="genero" value={seleccionado.field6}></input>
                        </div>
                        <div className="w-1/5">
                            <label for="color">Color</label>
                            <input class=" w-full h-8 p-2 text-gray-500 input-border" type="String" name="color" value={seleccionado.field7}></input>
                        </div>
                        <div className="w-1/5">
                            <label for="talla">Talla</label>
                            <input class=" w-full h-8 p-2 text-gray-500 input-border" type="String" name="talla" value={seleccionado.field4}></input>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between font-bold ">
                    <div className="w-1/5">
                            <label for="cantidad">Cantidad</label>
                            <input required class=" w-full h-8 p-2 input-border" type="Number" min={0} name="cantidad"/>
                        </div> 
                        <div className="w-1/5">
                            <label for="valorunitario">Valor unitario</label>
                            <input required class=" w-full h-8 p-2 input-border" type="Number" min={0} name="valorunitario"/>
                        </div>
                        <div className="w-1/5">
                            <label for="estado">Estado</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" type="Boolean" name="estado" defaultValue={0}>
                                <option disabled type="String" value={0}>Selecciona una opción</option>
                                <option type="Boolean">Disponible</option>
                                <option type="Boolean">No disponible</option>
                            </select>
                        </div>
                        <div className="w-1/5"></div>
                    </div>
                <div>
                    <div className=" w-full flex justify-center">
                        <input className="w-1/6 cursor-pointer greenButton h-10 rounded text-white font-bold my-16" type="submit" value="Guardar"/>
                        <ToastContainer position="top-right" autoClose={1000}/>
                    </div>
                </div>
            </form>       
        <Tablas field1="ID Producto" field2="Descripción" field3="Talla" field4="Valor unitario" field5= "Cantidad" field6="Estado"/>
     </> 
      
    );
  }
  export default PaginaActualizarProducto;