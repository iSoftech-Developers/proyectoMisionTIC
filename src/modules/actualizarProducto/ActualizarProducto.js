
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSeleccionado } from '../../context/Seleccionado';
import axios from 'axios'

const ActualizarProducto = ({formLabelTitle}) => {

    const {seleccionado}=useSeleccionado()

    const form = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();

    const fd = new FormData(form.current);

        const editarProducto = {};
        fd.forEach((value,key) => {
        editarProducto[key] = value;
        });

        const options = {
            method: 'PATCH',
            url:`http://localhost:3001/productos/${seleccionado._id}`,
            headers: { 'Content-Type': 'application/json' },
            data: { 
            valorunitario:editarProducto.valorunitario,
            cantidad:editarProducto.cantidad,
            estado:editarProducto.estado,
              },
  
          };
          
          await axios
            .request(options)
            .then(function (response) {
              console.log(response.data);
              toast.success('Producto actualizado');
            })
            .catch(function (error) {
              console.error(error);
              toast.error('Error al actualizar');
            });
    };
    
    return (

        <>
            <form ref={form} onSubmit={submitForm} className="space-y-8">
            <div>
                <div className="form-upper-section flex justify-between font-bold label-color space-x-4">
                        <div className="w-1/5">
                            <label for="descripcion">{formLabelTitle.label1}</label>
                            <input class=" w-full h-8 p-2 text-gray-500 input-border" type="String" name="descripcion" value={seleccionado.field1}></input>
                        </div>
                        <div className="w-1/5">
                            <label for="genero">{formLabelTitle.label2}</label>
                            <input class=" w-full h-8 p-2 text-gray-500 input-border" type="String" name="genero" value={seleccionado.field6}></input>
                        </div>
                        <div className="w-1/5">
                            <label for="color">{formLabelTitle.label3}</label>
                            <input class=" w-full h-8 p-2 text-gray-500 input-border" type="String" name="color" value={seleccionado.field7}></input>
                        </div>
                        <div className="w-1/5">
                            <label for="talla">{formLabelTitle.label4}</label>
                            <input class=" w-full h-8 p-2 text-gray-500 input-border" type="String" name="talla" value={seleccionado.field4}></input>
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
                        <input className="w-1/6 cursor-pointer bg-green-400 h-10 rounded text-white font-bold my-16" type="submit" value="Guardar"/>
                        <ToastContainer position="top-right" autoClose={5000}/>
                    </div>
                </div>
            </form>
    </>   
    )
}

export default ActualizarProducto;
