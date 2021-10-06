
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ActualizarProducto = ({formLabelTitle}) => {

    const form = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();

          const fd = new FormData(form.current);

          const editarProducto = {};
          fd.forEach((value,key) => {
            editarProducto[key] = value;
          });

          console.log('Datos del form enviados', editarProducto);
          toast.success('Producto actualizado');
      };
    
    return (
        <form ref={form} onSubmit={submitForm} className="space-y-8">
            <div>
                <div className="form-upper-section flex justify-between font-bold label-color space-x-4">
                        <div className="w-1/5">
                            <label for="Descripción">{formLabelTitle.label1}</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" type="String" name="Descripción" defaultValue={0}>
                                <option disabled type="String" value={0}>Selecciona una opción</option>
                                <option type="String">Camiseta</option>
                                <option type="String">Vestido de baño</option>
                                <option type="String">Medias</option>
                                <option type="String">Tops</option>
                                <option type="String">Zapato</option>
                            </select>
                        </div>
                        <div className="w-1/5">
                            <label for="Género">{formLabelTitle.label2}</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" type="String" name="Género" defaultValue={0}>
                                <option disabled type="String" value={0}>Selecciona una opción</option>
                                <option type="String">Masculino</option>
                                <option type="String">Femenino</option>
                            </select>
                        </div>
                        <div className="w-1/5">
                            <label for="Color">{formLabelTitle.label3}</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" type="String" name="Color" defaultValue={0}>
                                <option disabled type="String" value={0}>Selecciona una opción</option>
                                <option type="String">Amarillo</option>
                                <option type="String">Azul</option>
                                <option type="String">Blanco</option>
                                <option type="String">Negro</option>
                                <option type="String">Rojo</option>
                                <option type="String">Verde</option>
                            </select>
                        </div>
                        <div className="w-1/5">
                            <label for="Talla">{formLabelTitle.label4}</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" type="String" name="Talla" defaultValue={0}>
                            <option disabled type="String" value={0}>Selecciona una opción</option>
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
                            <label for="Cantidad">{formLabelTitle.label5}</label>
                            <input required class=" w-full h-8 p-2 input-border" type="Number" min={0} name="Cantidad"/>
                        </div> 
                        <div className="w-1/5">
                            <label for="Valor unitario">{formLabelTitle.label6}</label>
                            <input required class=" w-full h-8 p-2 input-border" type="Number" min={0} name="Valor unitario"/>
                        </div>
                        <div className="w-1/5">
                            <label for="Estado">{formLabelTitle.label7}</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" type="Boolean" name="Estado">
                                <option type="Boolean">Disponible</option>
                                <option type="Boolean">No disponible</option>
                            </select>
                        </div>
                        <div className="w-1/5"></div>
                    </div>
                <div>
                    <div className=" w-full flex justify-center">
                        <input className="w-1/6 cursor-pointer bg-green-400 h-10 rounded text-white font-bold my-16" type="submit" value="Guardar"/>
                        <ToastContainer position="top-right" autoClose={5000}/>
                    </div>
                </div>
            </form>
    )
}

export default ActualizarProducto;
