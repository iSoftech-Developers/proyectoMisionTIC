import { useState,useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NuevoProducto = ({formLabelTitle }) => {

    const form = useRef(null);

      const submitForm = (e) => {
          e.preventDefault();

          const fd = new FormData(form.current);

          const nuevoProducto = {};
          fd.forEach((value,key) => {
            nuevoProducto[key] = value;
          });

          console.log('Datos del form enviados', nuevoProducto);
          toast.success('Producto guardado');
      };
    
    return (
        <form ref={form} onSubmit={submitForm} className="space-y-8">
            <div>
                <div className="form-upper-section flex justify-between font-bold label-color space-x-4">
                        <div className="w-1/5">
                            <label for="productstatus">{formLabelTitle.label1}</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" type="String" name="productstatus">
                                <option type="String" value="available">Camiseta</option>
                                <option type="String" value="notavailable">Vestido de baño</option>
                                <option type="String" value="notavailable">Medias</option>
                                <option type="String" value="notavailable">Tops</option>
                                <option type="String" value="notavailable">Zapato</option>
                            </select>
                        </div>
                        <div className="w-1/5">
                            <label for="productstatus">{formLabelTitle.label2}</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" type="Number" name="productstatus">
                                <option type="String" value="available">Masculino</option>
                                <option type="String" value="notavailable">Femenino</option>
                            </select>
                        </div>
                        <div className="w-1/5">
                            <label for="productstatus">{formLabelTitle.label3}</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" type="Number" name="productstatus">
                                <option value="available">Amarillo</option>
                                <option value="notavailable">Azul</option>
                                <option value="notavailable">Blanco</option>
                                <option value="notavailable">Negro</option>
                                <option value="notavailable">Rojo</option>
                                <option value="notavailable">Verde</option>
                            </select>
                        </div>
                        <div className="w-1/5">
                            <label for="productstatus">{formLabelTitle.label4}</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" name="productstatus">
                                <option value="available">XS</option>
                                <option value="notavailable">S</option>
                                <option value="notavailable">M</option>
                                <option value="notavailable">L</option>
                                <option value="notavailable">XL</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between font-bold ">
                    <div className="w-1/5">
                            <label for="productvalue">{formLabelTitle.label5}</label>
                            <input required class=" w-full h-8 p-2 input-border" type="Boolean" name="productvalue" id="productvalue"/>
                        </div> 
                        <div className="w-1/5">
                            <label for="productvalue">{formLabelTitle.label6}</label>
                            <input required class=" w-full h-8 p-2 input-border" type="text" name="productvalue" id="productvalue"/>
                        </div>
                        <div className="w-1/5">
                            <label for="productstatus">{formLabelTitle.label7}</label>
                            <select required class=" w-full h-8 text-gray-500 input-border" name="productstatus">
                                <option value="available">Disponible</option>
                                <option value="notavailable">No disponible</option>
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
