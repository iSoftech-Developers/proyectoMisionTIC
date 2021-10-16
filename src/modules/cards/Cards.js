import { Dialog,Tooltip } from '@material-ui/core';
import { Link} from 'react-router-dom';
import { ToastContainer} from "react-toastify";
import { useBuscado } from '../../context/BuscadorContext';
import { useState,useEffect } from 'react';
import { useSeleccionado } from '../../context/Seleccionado';
import { obtenerDB } from '../../utils/GetDB';
import DeleteDB from '../../utils/DeleteDB';
import PrivateComponent from '../PrivateComponent';


const Cards=({variableCards, edit})=>{
    const {busqueda}=useBuscado()
    const [consulta, setConsulta] = useState([]); 
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    useEffect(() => {
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
          obtenerDB(setConsulta, setEjecutarConsulta,variableCards.route);
        }
      }, [ejecutarConsulta]);

    return(
      <>
      {consulta.map((i)=>{
        if (i._id.includes(busqueda)||i.ids.toLowerCase().includes(busqueda.toLowerCase())||i.field1.toLowerCase().includes(busqueda.toLowerCase())){
          if(variableCards.filtroVendedores && i.field4==="Vendedor"){
            return <Card i={i} variableCards={variableCards} edit={edit} setEjecutarConsulta={setEjecutarConsulta} />
          }
          if(!variableCards.filtroVendedores){
            return <Card i={i} variableCards={variableCards} edit={edit} setEjecutarConsulta={setEjecutarConsulta}/>
          }
          return null;
          }
          return null;
        }
      )}
    <ToastContainer position="top-right" autoClose={2000}/>

  </>
);
}

const Card = ({i,variableCards , setEjecutarConsulta, edit})=>{



  const [openDialog,setOpenDialog]=useState(false)
  const {setSeleccionado}=useSeleccionado()



  return(
        <Link key={i._id} to={{pathname: `${variableCards.cardTo}/${i._id}` }} onClick={() => setSeleccionado(i)}>
              <div className="cards-container mb-6 shadow-sm bg-white transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-100">
              <div className="mx-6 mb-5">
                  <div className="flex">
                          <i className={`${variableCards.icon} text-white bg-gray-800 mr-4 pt-4 px-3 pb-2`}></i>
                      <div className="card-info w-full align-center flex justify-between">
                          <span className="font-semibold pt-3">ID {i.ids}</span>
                          <div className="edit-card pt-4 space-x-5">
                            {edit ?(
                              <Link to={`${variableCards.linkIcon}/${i._id}`} onClick={() => setSeleccionado(i)}>
                                <Tooltip title="editar">
                                    <i className="fas fa-pen hover:text-blue-600 text-blue-800 fa-lg"></i>
                                </Tooltip>
                              </Link>

                            ):(
                              <PrivateComponent roleList={['Administrador']}>
                                <Link to={`${variableCards.linkIcon}/${i._id}`} onClick={() => setSeleccionado(i)}>
                                    <Tooltip title="editar">
                                        <i className="fas fa-pen hover:text-blue-600 text-blue-800 fa-lg"></i>
                                    </Tooltip>
                                </Link>
                              </PrivateComponent>
                            )}
                              <PrivateComponent roleList={['Administrador']}>
                                <Link to={variableCards.page} onClick={()=>{console.log(i)
                                    setOpenDialog(true)}}>
                                      <Tooltip title="Eliminar">
                                      <i className="fas fa-trash text-red-800 hover:text-red-600 shadow-md fa-lg"></i>
                                      </Tooltip>
                                </Link>
                              </PrivateComponent>
                          </div>
                      </div>
                  </div>
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


  );
}



export default Cards ;
