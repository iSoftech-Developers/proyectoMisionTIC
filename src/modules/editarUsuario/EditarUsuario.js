import React from 'react'

const EditarUsuario = () => {
    return (
        <div className="flex mt-14">
                <div className="p-8 border-solid border-2 border-gray-400">
                    <i className="fas fa-user fa-10x text-gray-300"></i>
                </div>
                <div className="w-full ml-10 mt-8">
                    <div className="flex justify-between">
                        <div>
                            <div className="flex flex-col">
                                <div>
                                    <span className="bg-black text-white text-xs">Administrador</span>
                                </div>
                                <div>
                                    <span className="text-lg">ID 023466</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end space-x-36">
                            <div className="w-1/2">
                                <select required class=" w-full h-8 font-bold" name="userole">
                                    <option value="sales">Vendedor</option>
                                    <option value="admin">Administrador</option>
                                </select>
                            </div>
                            <div className="w-1/2">
                                <select required class="w-full h-8 font-bold" name="usestatus">
                                    <option value="sales">Pendiente</option>
                                    <option value="admin">Autorizado</option>
                                    <option value="admin">Rechazado</option>
                                </select>
                            </div>
                        </div>
                    </div>
                     

                    <div className="flex w-full justify-between mt-12">
                        <div className="flex flex-col ">
                            <div>
                                <span className="font-bold">Fecha de ingreso</span>
                            </div>
                            <div>
                                <span>11/04/2021</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <span className="font-bold">Nombres y apellidos</span>
                            </div>
                            <div>
                                <span>Juan Camilo Gómez</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <span className="font-bold">Especialidad</span>
                            </div>
                            <div>
                                <span>Sección Gym</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <span className="font-bold">Celular</span> 
                            </div>
                            <div>
                                <span>310234567</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
       
         
    )
}

export default EditarUsuario;
