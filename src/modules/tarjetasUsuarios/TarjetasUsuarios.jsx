import React from 'react';
import { Dialog,Tooltip } from '@material-ui/core';
import {useState,useEffect} from 'react';
import image from '../../media/image.jpeg';
import { Link } from 'react-router-dom';
import { useSeleccionado } from '../../context/Seleccionado';
import { useBuscado } from '../../context/BuscadorContext';
import { obtenerDB } from '../../utils/GetDB';
import DeleteDB from '../../utils/DeleteDB';
import ReactLoading from 'react-loading';
import { ToastContainer} from "react-toastify";



const TarjetasUsuarios = ({variableCards}) => {



    const {setSeleccionado}=useSeleccionado()
    const {busqueda}=useBuscado()
    const [openDialog,setOpenDialog]=useState(false)
    const [consulta, setConsulta] = useState([]); 
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [changeTab, setChangeTab]= useState(true);
    const [selectorRender, setSelectorRender] = useState("");



    
    useEffect(() => {
        <ReactLoading type={"spin"} color={"#ffffff"} height={667} width={375} />
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
        obtenerDB(setConsulta, setEjecutarConsulta,variableCards.route);
        }
    }, [ejecutarConsulta ,variableCards.route]);



    const CardsUsers = ({i})=>{
        const [hiddenButtons,setHiddenButtons]=useState("hidden")
        return(
        <>
            <Link onMouseEnter={()=>{
                setHiddenButtons(null)}}
                onMouseLeave={()=>{
                setHiddenButtons("hidden")}} 
                key={i._id}
                to={{ pathname: `${variableCards.cardTo}/${i._id}`}} onClick={() => setSeleccionado(i)}>
                    <div className="display: inline-block">
                        <div className="pt-8 ">
                            <div className="cards-container w-32 p-1 bg-white shadow-sm cursor-pointer transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <Dialog open={openDialog}>
                                    <div className ='p-8 flex flex-col'>
                                        <h1 className= 'text gray-800 text-xl font-bold'> ¿Esta seguro de querer eliminarlo? </h1>
                                        <div className='flex w-full items-center justify-center'> 
                                            <Link to={variableCards.page} onClick={()=>{
                                                DeleteDB({i,variableCards})
                                                setOpenDialog(false)
                                                setEjecutarConsulta(true)}} className= 'mx-2 my-4 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'> Si </Link>
                                            <Link onClick={()=>setOpenDialog(false)} className= 'mx-2 my-4 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md' to={variableCards.page}> No </Link>
                                        </div>
                                    </div>
                                 </Dialog>
                                    <img src={i.field8} className=" flex justify-center w-full"/>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-center">ID {i.field2}</span>
                                        <span className="text-sm text-center">{i.field1}</span>
                                        <span className="text-sm text-center bg-black text-white" >{i.field4}</span>
                                        <div className="flex justify-around mt-1">
                                                <Link className="text-white bg-blue-700 hover:bg-blue-500 w-full text-center" to={`${variableCards.linkIcon}/${i._id}`} onClick={() =>setSeleccionado(i)}>
                                                    <Tooltip title="editar">
                                                    <i className={`fas fa-pen fa-xs ${hiddenButtons}`}></i>
                                                    </Tooltip>
                                                </Link>
                                                <Link className="text-white bg-red-800 hover:bg-red-600 w-full text-center" to={variableCards.page} onClick={()=>{
                                                    setSeleccionado(i)
                                                    setOpenDialog(true)}}>
                                                    <Tooltip title="Eliminar">
                                                    <i className={`fas fa-trash fa-xs ${hiddenButtons}`}></i>
                                                    </Tooltip>
                                                </Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
            </Link>

        </>
    );

}




return (
        <>
        <div className="mt-6 ">
            <div className="flex">
                <button onClick={()=>{setChangeTab(true)}}class="tablinks p-3 text-gray-400 hover:text-gray-800 text-2xl font-semibold">Administrador de Usuarios</button>
                <button onClick={()=>{setChangeTab(false)}} class="tablinks p-3 text-gray-400 hover:text-gray-800 hover:border-solid text-2xl font-semibold">Solicitudes Pendientes</button>
            </div>
        </div>
        {changeTab ? (
        <div className=" mt-6 space-x-3">
            <label for="userole"></label>
            <select
                onChange={(e)=>{
                if (e.target.value==="all"){
                    setSelectorRender("")
                }

                    if (e.target.value==="Vendedores"){
                    setSelectorRender("Vendedor")
                }

                if(e.target.value==="Administradores"){
                    setSelectorRender("Administrador")
                }

                }}
                required className="flex px-2 h-8 input-border text-gray-500" name="roleoptions">
                <option  class="text-bold" value ="all">Todos los usuarios</option>
                <option  class="text-bold" name="Vendedores">Vendedores</option>
                <option class="text-bold" name="Administradores">Administradores</option>
            </select>

            {consulta.map((i)=>{ 
            if(i.field4.includes(selectorRender)){
                if (i._id.includes(busqueda)||i.ids.toLowerCase().includes(busqueda.toLowerCase())){
                    return(
                        <CardsUsers i={i}/>
                        );}
                    }else{
                        return null;
                    }
                    return null
                }
                    
                    )}
           
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
                <ToastContainer position="top-right" autoClose={2000}/>
        </>

        
    );
}

export default TarjetasUsuarios




