import React from 'react';
import image from '../../media/image.jpeg';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';



const TarjetasUsuarios = ({userCardInfo}) => {

    const [changeTab, setChangeTab]= useState(true)

/*
    useEffect(() => {
        if (changeTab) {
          setTextoBoton('Crear Nuevo Vehículo');
          setColorBoton('indigo');
        } else {
          setTextoBoton('Mostrar Todos los vehículos');
          setColorBoton('green');
        }
      }, [changeTab]);
      */





    return (
        <>
            <div className="flex flex-col">
                <div className="mt-6 ">
                    <div className="flex">
                        <button  onClick={()=>{setChangeTab(true)}}class="tablinks px-3 text-gray-400 hover:text-gray-800 hover:bg-gray-200 text-2xl font-bold">Administrador de Usuarios</button>
                        <button onClick={()=>{setChangeTab(false)}} class="tablinks px-3 text-gray-400 hover:text-gray-800 hover:bg-gray-200 text-2xl font-bold">Solicitudes Pendientes</button>
                    </div>
                </div>
                <div className="w-1/4 mt-6">
                    <label for="userole"></label>
                    <select required className="w-full h-8" name="roleoptions">
                        <option class="text-bold" value="Usuarios">Vendedor</option>
                        <option class="text-bold" value="Usuarios">Administrador</option>
                    </select>
                </div>
                {changeTab ? (
                        <div className="flex flex-wrap mt-9 gap-4 h-10">
                                    {userCardInfo.map((i)=>{
                                        return(
                                            <Link to="/rolesUsuarios/detalleUsuarios">
                                                <div className="w-32 h-full my-auto p-1 bg-white shadow-sm cursor-pointer transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                                    <img src={image}/>
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-center">{i.field1}</span>
                                                        <span className="text-sm text-center">{i.field2}</span>
                                                        <span className="text-sm text-center sticky bg-yellow-500 text-white">{i.field3}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                            </div>

                ):(
                                    <div className="flex mt-8 cards-container mb-6 shadow-sm bg-gray-100">
                    <div className="bg-black h-24 w-24 my-4 ml-4"></div>
                        <div className="w-full">
                            <div className= "mx-4 flex flex-col h-full justify-center">
                                <span className="text-black font-bold">ID 123456</span>
                                <table className="w-full text-sm bg-white border-gray-400 border">
                                    <tr>
                                        <th >Campo1</th>
                                        <th >Campo2</th>
                                        <th >Campo3</th>
                                        <th >Campo4</th>
                                        <th >Campo5</th>
                                    </tr>
                                    <tr>
                                        <td align="center">item1</td>
                                        <td align="center">item2</td>
                                        <td align="center">item3</td>
                                        <td align="center">item4</td>
                                        <td align="center">item5</td>
                                    </tr>
                                </table>

                            </div>
                                
                        </div>
                    

                    
                </div> 

                )}
                
              </div>       
    
        </>
    )
}

export default TarjetasUsuarios
