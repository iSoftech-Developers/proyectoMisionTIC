
import NoButtonUpperBarSection from '../../components/NoButtonUpperBarSection';
import { useRef } from "react";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PostDB from '../../utils/PostDB';



const PaginaNuevoProducto =()=> {

  const BASE_URL = process.env.REACT_APP_BASE_URL;
    const urlPost = `${BASE_URL}/productos`
    const form = useRef(null);

    const submitForm = async (e)  => {
        e.preventDefault();

        const fd = new FormData(form.current);

        const nuevoProducto = {};
        fd.forEach((value,key) => {
        nuevoProducto[key] = value;
        });
        console.log(nuevoProducto)
        let ids = nuevoProducto.genero.slice(0,2).toUpperCase()+nuevoProducto.descripcion.slice(0,2).toUpperCase()+nuevoProducto.color.slice(0,3).toUpperCase()+nuevoProducto.talla.slice(0,2).toUpperCase()
        
    
        const cambios = {
            descripcion:nuevoProducto.descripcion,
            genero: nuevoProducto.genero,
            color: nuevoProducto.color,
            talla: nuevoProducto.talla,
            cantidad: nuevoProducto.cantidad,
            valorunitario: nuevoProducto.valorunitario,
            estado: nuevoProducto.estado,
            ids:ids,
            }

            PostDB(cambios,urlPost)
            
};


    return (
     <>
        <NoButtonUpperBarSection title="Nuevo Producto" edit={false}/>
        <form ref={form} onSubmit={submitForm} className="space-y-8">
            <div>
                <div className="form-upper-section flex justify-between font-bold label-color space-x-4">
                        <div className="w-1/5">
                            <label for="descripcion">Descripción</label>
                            <select class=" w-full h-8 text-gray-500 input-border" type="String" name="descripcion" defaultValue="" required>
                                <option disabled type="String" value="">Selecciona una opción</option>
                                <option type="String">Camiseta</option>
                                <option type="String">Vestido de baño</option>
                                <option type="String">Medias</option>
                                <option type="String">Tops</option>
                                <option type="String">Zapatos</option>
                            </select>
                        </div>
                        <div className="w-1/5">
                            <label for="genero">Género</label>
                            <select class=" w-full h-8 text-gray-500 input-border" type="String" name="genero" defaultValue="" required >
                                <option disabled type="String" value="">Selecciona una opción</option>
                                <option type="String">Hombre</option>
                                <option type="String">Mujer</option>
                            </select>
                        </div>
                        <div className="w-1/5">
                            <label for="color">Color</label>
                            <select class=" w-full h-8 text-gray-500 input-border" type="String" name="color" defaultValue="" required>
                                <option disabled type="String" value="">Selecciona una opción</option>
                                <option type="String">Amarillo</option>
                                <option type="String">Azul</option>
                                <option type="String">Blanco</option>
                                <option type="String">Negro</option>
                                <option type="String">Rojo</option>
                                <option type="String">Verde</option>
                            </select>
                        </div>
                        <div className="w-1/5">
                            <label for="talla">Talla</label>
                            <select class=" w-full h-8 text-gray-500 input-border" type="String" name="talla" defaultValue="" required>
                                <option disabled type="String" value="">Selecciona una opción</option>
                                <option type="String">XS</option>
                                <option type="String">S</option>
                                <option type="String">M</option>
                                <option type="String">L</option>
                                <option type="String">XL</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between font-bold ">
                    <div className="w-1/5">
                            <label for="cantidad">Unidades disponibles</label>
                            <input required class=" w-full h-8 p-2 input-border" type="Number" min={0} name="cantidad"/>
                        </div> 
                        <div className="w-1/5">
                            <label for="valorunitario">Valor unitario</label>
                            <input required class=" w-full h-8 p-2 input-border" type="Number" min={0} name="valorunitario"/>
                        </div>
                        <div className="w-1/5">
                            <label for="estado">Estado</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" type="Boolean" name="estado" defaultValue="">
                                <option disabled type="String" value="">Selecciona una opción</option>
                                <option type="Boolean">Disponible</option>
                                <option type="Boolean">No disponible</option>
                            </select>
                        </div>
                        <div className="w-1/5"></div>
                    </div>
                <div>
                    <div className=" w-full flex justify-center">
                        <ToastContainer position="top-right" autoClose={1000}/>
                        <input className="w-1/6 cursor-pointer greenButton h-10 rounded text-white my-8" type="submit" value="Guardar"/>
                        
                    </div>
                </div>
            </form>
     </> 
      
    );
  }
  export default PaginaNuevoProducto;