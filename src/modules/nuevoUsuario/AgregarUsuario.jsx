import React from 'react'
import { useRef } from "react";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PostDB from '../../utils/PostDB';

const AgregarUsuario = ({formLabelTitle}) => {

    const urlPost = 'http://localhost:3001/usuarios/'
    const form = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();

    const fd = new FormData(form.current);

    const nuevoUsuario = {};
    fd.forEach((value,key) => {
    nuevoUsuario[key] = value;
    });
    
    console.log(nuevoUsuario)

    const cambios = {
    idusuario:nuevoUsuario.idusuario,
    celular: nuevoUsuario.celular,
    estado: nuevoUsuario.estado,
    fechaingreso: nuevoUsuario.fechaingreso,
    nombre: nuevoUsuario.nombre,
    email: nuevoUsuario.email,
    rol: nuevoUsuario.rol,
    }

    PostDB(cambios, urlPost)

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
                                        <label for="cargo" className="bg-black text-white text-sm px-2">Cargo</label>
                                    </div> 
                                    <div className="flex justify-between space-x-7">
                                        <div>
                                            <label for="idusuario" className="font-bold">{formLabelTitle.label1}</label>
                                            <input required className="text-lg w-full h-8 p-2 rounded-md input-border" type="String" name="idusuario"/>
                                        </div>
                                        <div className="w-1/3">
                                        <label for="rol" className="font-bold">{formLabelTitle.label2}</label>
                                            <select required className=" w-full h-8 pl-2 rounded-md input-border" name="rol" required>
                                                <option type="String" value="">Selecciona una opción</option>
                                                <option type="String">Vendedor</option>
                                                <option type="String">Administrador</option>
                                            </select>
                                        </div>
                                        <div className="w-1/3">
                                            <label for="estado" className="font-bold">{formLabelTitle.label3}</label>
                                            <select required className="w-full h-8 pl-2 rounded-md input-border" name="estado" placeholder="Selecciona una opción" required>
                                                <option type="String" value="">Selecciona una opción</option>
                                                <option required type="String">Pendiente</option>
                                                <option required type="String">Autorizado</option>
                                                <option required type="String">Rechazado</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="flex w-full justify-between mt-12 space-x-7">
                            <div className="flex flex-col w-1/3">
                                <label for="fechaingreso" className="font-bold">{formLabelTitle.label4}</label>
                                <input required className=" w-full h-8 p-2 rounded-md input-border" type="Date" name="fechaingreso" />
                            </div>
                            <div className="flex flex-col w-1/3">
                                <label for="nombre" className="font-bold">{formLabelTitle.label5}</label>
                                <input required className=" w-full h-8 p-2 rounded-md input-border" type="String" name="nombre" />
                            </div>
                            <div className="flex flex-col w-1/3">
                                <label for="email" className="font-bold">{formLabelTitle.label6}</label>
                                <input required className=" w-full h-8 p-2 rounded-md input-border" type="Email" name="email"/>
                            </div>
                            <div className="flex flex-col w-1/3">
                                <label for="celular" className="font-bold">{formLabelTitle.label7}</label>
                                <input required className=" w-full h-8 p-2 rounded-md input-border" type="String" name="celular"/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div className=" w-full text-center">
                            <input className="w-1/6 cursor-pointer bg-green-600 hover:bg-green-500 h-10 rounded text-white font-bold my-16" type="submit" value="Guardar"/>
                            <ToastContainer position="top-right" autoClose={5000}/>
                        </div>
                    </div>
                   
                    </form>

                </div>
     
        </>
        
       
         
    )
}

export default AgregarUsuario;
