import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const NuevoProducto = ({formLabelTitle}) => {

    const form = useRef(null);

    const submitForm = async (e)  => {
        e.preventDefault();

          const fd = new FormData(form.current);

          const nuevoProducto = {};
          fd.forEach((value,key) => {
            nuevoProducto[key] = value;
          });
          
          
        const options = {
            
            method: 'POST',
            url: 'http://localhost:3001/productos/nuevo',
            headers: {'Content-Type': 'application/json'},
            data: {
              descripcion:nuevoProducto.descripcion,
              genero: nuevoProducto.genero,
              color: nuevoProducto.color,
              talla: nuevoProducto.talla,
              cantidad: nuevoProducto.cantidad,
              valorunitario: nuevoProducto.valorunitario,
              estado: nuevoProducto.estado,
            
             
            },
          };    
          await axios
          .request(options)
          .then(function (response) {
            console.log(response.data);
            toast.success('Cliente agregado con éxito');
          })
          .catch(function (error) {
            console.error(error);
            toast.error('Error creando un Cliente');
          });
          
      };
    
    return (

        <form ref={form} onSubmit={submitForm} className="space-y-8">
            <div>
                <div className="form-upper-section flex justify-between font-bold label-color space-x-4">
                        <div className="w-1/5">
                            <label for="descripcion">{formLabelTitle.label1}</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" type="String" name="descripcion" defaultValue={0}>
                                <option disabled type="String" value={0}>Selecciona una opción</option>
                                <option type="String">Camiseta</option>
                                <option type="String">Vestido de baño</option>
                                <option type="String">Medias</option>
                                <option type="String">Tops</option>
                                <option type="String">Zapato</option>
                            </select>
                        </div>
                        <div className="w-1/5">
                            <label for="genero">{formLabelTitle.label2}</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" type="String" name="genero" defaultValue={0}>
                                <option disabled type="String" value={0}>Selecciona una opción</option>
                                <option type="String">Masculino</option>
                                <option type="String">Femenino</option>
                            </select>
                        </div>
                        <div className="w-1/5">
                            <label for="color">{formLabelTitle.label3}</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" type="String" name="color" defaultValue={0}>
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
                            <label for="talla">{formLabelTitle.label4}</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" type="String" name="talla" defaultValue={0}>
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
                            <label for="cantidad">{formLabelTitle.label5}</label>
                            <input required class=" w-full h-8 p-2 input-border" type="Number" min={0} name="cantidad"/>
                        </div> 
                        <div className="w-1/5">
                            <label for="valorunitario">{formLabelTitle.label6}</label>
                            <input required class=" w-full h-8 p-2 input-border" type="Number" min={0} name="valorunitario"/>
                        </div>
                        <div className="w-1/5">
                            <label for="estado">{formLabelTitle.label7}</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" type="Boolean" name="estado">
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

export default NuevoProducto;
