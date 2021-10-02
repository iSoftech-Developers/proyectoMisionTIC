import React from 'react';
import image from '../../media/image.jpeg';

const UpperBarTabs = () => {
    return (
        <div className=" my-9">
            <span className="text-2xl font-semibold"></span>
            <div>
                <div className="overflow-hidden flex">
                    <button class="tablinks px-3 text-gray-400 hover:text-gray-800 hover:bg-gray-200 text-2xl font-bold" onclick="openTab(event, 'Admin')">Administrador de Usuarios</button>
                    <button class="tablinks px-3 text-gray-400 hover:text-gray-800 hover:bg-gray-200 text-2xl font-bold" onclick="openTab(event, 'Solicitudes')">Solicitudes Pendientes</button>
                </div>
            </div>
            <div className="w-1/4 mt-6">
                <label for="userole"></label>
                <select required className="w-full h-8" name="roleoptions">
                    <option class="text-bold" value="Usuarios">Vendedor</option>
                    <option class="text-bold" value="Usuarios">Administrador</option>
                </select>
            </div>
            <div>
                <div className="mt-9 w-32 h-full my-auto p-1 bg-white shadow-sm cursor-pointer transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <img src={image}/>
                    <div className="flex flex-col">
                        <span className="font-bold text-center">ID 12345</span>
                        <span className="text-sm text-center">Juan Camilo Pérez</span>
                        <span className="text-sm text-center sticky bg-yellow-500 text-white">Administrador</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpperBarTabs
