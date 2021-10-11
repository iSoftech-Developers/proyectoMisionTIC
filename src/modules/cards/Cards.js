import { Dialog,Tooltip } from '@material-ui/core';
import { Link} from 'react-router-dom';
import { ToastContainer} from "react-toastify";
import './Cards.css';
import { useBuscado } from '../../context/BuscadorContext';
import { useState,useEffect } from 'react';
import { useSeleccionado } from '../../context/Seleccionado';
import { obtenerDB } from '../../utils/GetDB';
import DeleteDB from '../../utils/DeleteDB';

const Cards=({variableCards})=>{
    const {seleccionado, setSeleccionado}=useSeleccionado()
    const {busqueda}=useBuscado()
    const[openDialog,setOpenDialog]=useState(false)
    const [consulta, setConsulta] = useState([]); 
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    useEffect(() => {
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
          obtenerDB(setConsulta, setEjecutarConsulta,variableCards.route);
        }
      }, [ejecutarConsulta ,variableCards.route]);

      

      // const Eliminar =  ({seleccionado,variableCards}) => {
      //   console.log(seleccionado);
      //   const options = {
      //     method: 'DELETE',
      //     url: `${variableCards.route}/${seleccionado._id}/`,
      //     headers: { 'Content-Type': 'application/json' },
      //   };
    
      //   axios
      //     .request(options)
      //     .then(function (response) {
      //       console.log(response.data);
      //       toast.success('Eliminado con éxito');
      //     })
      //     .catch(function (error) {
      //       console.error(error);
      //       toast.error('Error al eliminar');
      //     });
      //   setOpenDialog(false);
      //   setEjecutarConsulta(true)
      // };



    return(
      <>
      {consulta.map((i)=>{
          if (i._id.includes(busqueda)||i.ids.toLowerCase().includes(busqueda.toLowerCase())){
              return(    
                  <Link to={{
                      pathname: `${variableCards.cardTo}/${i._id}`, 
                    }} onClick={() => setSeleccionado(i)}> 
                      <div className="cards-container mb-6 shadow-sm bg-white transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                          <div className="mx-6 mb-5">
                              <div className="flex">
                                      <i className={`${variableCards.icon} text-white bg-gray-800 mr-4 pt-4 px-3 pb-2`}></i>
                                  <div className="card-info w-full align-center flex justify-between">
                                      <span className="font-semibold pt-3">ID {i.ids}</span>
                                      <div className="edit-card pt-4 space-x-5">
                                          <Link to={`${variableCards.linkIcon}/${i._id}`} onClick={() =>setSeleccionado(i)}>
                                              <Tooltip title="editar">
                                                  <i className="fas fa-pen hover:text-blue-900 text-blue-500 fa-lg"></i>
                                              </Tooltip>
                                          </Link>
                                          <Link to={variableCards.page} onClick={()=>{
                                              setSeleccionado(i)
                                              setOpenDialog(true)}}>
                                             <Tooltip title="Eliminar">
                                              <i className="fas fa-trash text-red-500 hover:text-red-900 shadow-md fa-lg"></i>
                                              </Tooltip>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                              <Dialog open={openDialog}>
                                <div className ='p-8 flex flex-col'>
                                  <h1 className= 'text gray-800 text-xl font-bold'> ¿Esta seguro de querer eliminarlo? </h1>
                                  <div className='flex w-full items-center justify-center'> 
                                    <Link to={variableCards.page} onClick={()=>{
                                      DeleteDB({variableCards,seleccionado})
                                      setOpenDialog(false)
                                      setEjecutarConsulta(true)}} className= 'mx-2 my-4 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'> Si </Link>
                                    <Link onClick={()=>setOpenDialog(false)} className= 'mx-2 my-4 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md' to={variableCards.page}> No </Link>
                                  </div>
                                </div>
                                </Dialog>
                              <table className="table-fixed text-sm w-full bg-white border-gray-400 border mt-4">
                                  <tr>
                                      <th >{variableCards.field1}</th>
                                      <th >{variableCards.field2}</th>
                                      <th >{variableCards.field3}</th>
                                      <th >{variableCards.field4}</th>
                                      <th >{variableCards.field5}</th>
                                  </tr>
                                  <tr>
                                      <td align="center">{i.field1}</td>
                                      <td align="center">{i.field2}</td>
                                      <td align="center">{i.field3}</td>
                                      <td align="center">{i.field4}</td>
                                      <td align="center">{i.field5}</td>
                                  </tr>
                              </table>
                          </div>
                      </div>
                      
                 </Link>
              );}
              })}   
          <ToastContainer position="top-right" autoClose={5000}/>
        </>
        

    );


}

export default Cards ;
