import NoButtonUpperBarSection from '../../components/NoButtonUpperBarSection';
import React from 'react'
import { useRef } from "react";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSeleccionado } from '../../context/Seleccionado';
import PatchDB from "../../utils/PatchDB";


const PaginaEditarUsuarios =()=>{

    const BASE_URL = process.env.REACT_APP_BASE_URL;



    const urlEdit= `${BASE_URL}/usuarios`
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
            idusuario:editarUsuario.idusuario,
            celular:editarUsuario.celular,
            estado:editarUsuario.estado,
            email:editarUsuario.email,
            rol:editarUsuario.rol,
        }

        PatchDB(cambios,seleccionado,urlEdit)
    };


    return(
        <>
            <NoButtonUpperBarSection title="Editar Usuarios" edit={false}/>
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
                                        <label for="cargo" className="bg-black text-sm text-white px-2 font-medium">{seleccionado.field4}</label>
                                    </div> 
                                    <div className="flex justify-between space-x-7">
                                        <div>
                                            <label for="idusuario" className="font-bold">Documento</label>
                                            <input required class="text-lg w-full h-8 p-2 rounded-md input-border" type="String" name="idusuario" value={seleccionado.field2}/>
                                        </div>
                                        <div className="w-1/3">
                                        <label for="rol" className="font-bold">Rol</label>
                                            <select class=" w-full h-8 font-bold pl-2 rounded-md input-border" name="rol" defaultValue="" required>
                                                <option disabled type="String" value="">Selecciona una opción</option>
                                                <option type="String">Vendedor</option>
                                                <option type="String">Administrador</option>
                                                <option type="String">Sin Rol</option>
                                            </select>
                                        </div>
                                        <div className="w-1/3">
                                            <label for="estado" className="font-bold">Estado</label>
                                            <select class="w-full h-8 font-bold pl-2 rounded-md input-border" name="estado" defaultValue=""  required>
                                                <option disabled type="String" value="">Selecciona una opción</option>
                                                <option type="String">Pendiente</option>
                                                <option type="String">Autorizado</option>
                                                <option type="String">Rechazado</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="flex w-full justify-between mt-12">
                            <div className="flex flex-col ">
                                <label for="fechaingreso" className="font-bold">Fecha de ingreso</label>
                                <input required  class=" w-full h-8 p-2 rounded-md input-border" type="text" name="fechaingreso" value={seleccionado.field5}/>
                            </div>
                            <div className="flex flex-col ">
                                <label for="nombre" className="font-bold">Nombres y apellidos</label>
                                <input required class=" w-full h-8 p-2 rounded-md input-border" type="String" name="nombre" value={seleccionado.field1}/>
                            </div>
                            <div className="flex flex-col ">
                                <label for="email" className="font-bold">Correo electrónico</label>
                                <input required  value={seleccionado.field3}class=" w-full h-8 p-2 rounded-md input-border" type="Email" name="email"/>
                            </div>
                            <div className="flex flex-col ">
                                <label for="celular" className="font-bold">Celular</label>
                                <input required class=" w-full h-8 p-2 rounded-md input-border" type="String" name="celular"/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div className=" w-full text-center">
                                <input className="w-1/6 cursor-pointer bg-green-400 h-10 rounded text-white font-bold my-16" type="submit" value="Guardar"/>
                                <ToastContainer position="top-right" autoClose={1000}/>
                        </div>
                    </div>

                    </form>

                </div>
        </>
    );
}

export default PaginaEditarUsuarios;