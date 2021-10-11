import React from 'react'
import { useRef } from "react";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSeleccionado } from '../../context/Seleccionado';
import PatchDB from "../../utils/PatchDB";

const EditarUsuario = ({formLabelTitle}) => {



    const urlEdit= 'http://localhost:3001/usuarios'
    const {seleccionado}=useSeleccionado()
    const form = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();

    const fd = new FormData(form.current);

        const editarUsuario = {};
        fd.forEach((value,key) => {
        editarUsuario[key] = value;
        });

        const cambios={ 
            rol:editarUsuario.rol,
            estado:editarUsuario.estado,
            especialidad:editarUsuario.especialidad,
            celular:editarUsuario.celular,
        }

        PatchDB(cambios,seleccionado,urlEdit)
    };


    
    return (
        <>
            <div className="flex mt-14">
                <form ref={form} onSubmit={submitForm} className=" w-full mt-8">
                    <div className="flex">
                        <div>
                            <div className="flex p-8 border-solid border-2 border-gray-400">
                                <i className="fas fa-user fa-10x text-gray-300"></i>
                            </div>
                        </div>
                        <div className="w-full ml-5 flex flex-col">
                            <div className="justify-between mt-6">
                                <div className="flex flex-col">
                                    <div className="w-1/6">
                                        <label for="cargo" className="bg-black text-white text-xs">Cargo</label>
                                    </div> 
                                    <div className="flex justify-between space-x-7">
                                        <div>
                                            <label for="idusuario" className="font-bold">{formLabelTitle.label1}</label>
                                            <input required class="text-lg w-full h-8 p-2 rounded-md input-border" type="String" name="idusuario" value={seleccionado.field2}/>
                                        </div>
                                        <div className="w-1/3">
                                        <label for="rol" className="font-bold">{formLabelTitle.label2}</label>
                                            <select required class=" w-full h-8 font-bold pl-2 rounded-md input-border" name="rol" defaultValue={0}>
                                                <option disabled type="String" value={0}>Selecciona una opción</option>
                                                <option type="String">Vendedor</option>
                                                <option type="String">Administrador</option>
                                            </select>
                                        </div>
                                        <div className="w-1/3">
                                            <label for="estado" className="font-bold">{formLabelTitle.label3}</label>
                                            <select required class="w-full h-8 font-bold pl-2 rounded-md input-border" name="estado" defaultValue={0} placeholder="Selecciona una opción" >
                                                <option disabled type="String" value={0}>Selecciona una opción</option>
                                                <option required type="String">Pendiente</option>
                                                <option required type="String">Autorizado</option>
                                                <option required type="String">Rechazado</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="flex w-full justify-between mt-12">
                            <div className="flex flex-col ">
                                <label for="fechaingreso" className="font-bold">{formLabelTitle.label4}</label>
                                <input required  class=" w-full h-8 p-2 rounded-md input-border" type="text" name="fechaingreso" value={seleccionado.field5}/>
                            </div>
                            <div className="flex flex-col ">
                                <label for="nombre" className="font-bold">{formLabelTitle.label5}</label>
                                <input required class=" w-full h-8 p-2 rounded-md input-border" type="String" name="nombre" value={seleccionado.field1}/>
                            </div>
                            <div className="flex flex-col ">
                                <label for="especialidad" className="font-bold">{formLabelTitle.label6}</label>
                                <input required class=" w-full h-8 p-2 rounded-md input-border" type="String" name="especialidad"/>
                            </div>
                            <div className="flex flex-col ">
                                <label for="celular" className="font-bold">{formLabelTitle.label7}</label>
                                <input required class=" w-full h-8 p-2 rounded-md input-border" type="String" name="celular"/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div className=" w-full text-center">
                                <input className="w-1/6 cursor-pointer bg-green-400 h-10 rounded text-white font-bold my-16" type="submit" value="Guardar"/>
                                <ToastContainer position="top-right" autoClose={5000}/>
                        </div>
                    </div>

                    </form>

                </div>

        </>
        

    )
}

export default EditarUsuario;