import React from 'react';
import image from '../../media/image.jpeg';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSeleccionado } from '../../context/Seleccionado';
import { useBuscado } from '../../context/BuscadorContext';
import { obtenerDB } from '../../utils/GetDB';
import DeleteDB from '../../utils/DeleteDB';
import DropDown from '../dropDown/DropDown';


const TarjetasUsuarios = ({cardsUsuarios,userCardInfo}) => {
    const {seleccionado, setSeleccionado}=useSeleccionado()
    const {busqueda}=useBuscado()
    const[openDialog,setOpenDialog]=useState(false)
    const [consulta, setConsulta] = useState([]); 
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [changeTab, setChangeTab]= useState(true);
    /* const [sorting,setSorting] = useState(true); */


    useEffect(() => {
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
        obtenerDB(setConsulta, setEjecutarConsulta,cardsUsuarios.route);
        }
    }, [ejecutarConsulta ,cardsUsuarios.route]);

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
   /*  sorting = (e) => {
        const sorting = e.target.value;

        const sortRes = this.state.consulta.sort(()=>{
            if(sorting === 'Vendedor'){
                return cardsUsuarios
            }else (sorting === 'Admnistrador')
            }
        )
    } */


    return (

        <>
            
        <div className="mt-6 ">
            <div className="flex">
                <button onClick={()=>{setChangeTab(true)}}class="tablinks p-3 text-gray-400 hover:text-gray-800 text-2xl font-semibold">Administrador de Usuarios</button>
                <button onClick={()=>{setChangeTab(false)}} class="tablinks p-3 text-gray-400 hover:text-gray-800 hover:border-solid text-2xl font-semibold">Solicitudes Pendientes</button>
            </div>
        </div>
        <DropDown
            /* sorting = {this.sorting}
            sorts = {this.state.sort} */
        />
            {/* <div className="ml-2 w-1/4 mt-6">
            <label for="userole"></label>
                <select required className="pl-2 w-full h-8 input-border text-gray-500" name="roleoptions">
                    <option class="text-bold" value="Usuarios" name="vendedor">Vendedor</option>
                    <option class="text-bold" value="Usuarios" name="admin">Administrador</option>
                </select>
                sorting ={this.sorting}
                sort={this.state.sort}
            </div> */}
            
        {consulta.map((i)=>{
                    if (i._id.includes(busqueda)||i.ids.toLowerCase().includes(busqueda.toLowerCase())){
                        return(
                            <Link key={i._id}
                            to={{
                                pathname: `${cardsUsuarios.cardTo}/${i._id}`, 
                                }} onClick={() => setSeleccionado(i)}> 
                                
                                    {changeTab ? (
                                        <div className="display: inline-block mt-8 px-2">
                                            <div className="cards-container w-32 p-1 bg-white shadow-sm cursor-pointer transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                                <img src={image}/>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-center">ID {i.ids}</span>
                                                    <span className="text-sm text-center">{i.field1}</span>
                                                    <span className="text-sm text-center sticky bg-yellow-500 text-white" >{i.field4}</span>
                                                </div>
                                            </div>
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
                            </Link>
                        );}
                        })}
                        
        </>
            

            
        
   
        
    );
}

export default TarjetasUsuarios
