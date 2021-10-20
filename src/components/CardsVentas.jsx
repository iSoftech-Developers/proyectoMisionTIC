import { Dialog,Tooltip } from '@material-ui/core';
import { Link} from 'react-router-dom';
import { ToastContainer} from "react-toastify";
import { useBuscado } from '../context/BuscadorContext';
import { useState,useEffect } from 'react';
import { useSeleccionado } from '../context/Seleccionado';
import { obtenerDB } from '../utils/GetDB';
import DeleteDB from '../utils/DeleteDB';
import PrivateComponent from './PrivateComponent';

const CardsVentas = ({variableCards}) => {

    const {busqueda}=useBuscado()
    const [ventas, setVentas] = useState([]); 
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    useEffect(() => {
        console.log('consulta', ejecutarConsulta);
        if (ejecutarConsulta) {
          obtenerDB(setVentas, setEjecutarConsulta,variableCards.route);
        }
      }, [ejecutarConsulta]);

      console.log(ventas)



    return (
        <>
        {ventas.map(i=>{
            if (i._id.includes(busqueda) || i.cliente.field2.includes(busqueda)  || i.vendedor.field2.includes(busqueda)){

            return <Card i={i}  variableCards={variableCards} setEjecutarConsulta={setEjecutarConsulta} />
            }
            return null;

        } )}

    <ToastContainer position="top-right" autoClose={2000}/>



            
        </>
    )
}


const Card = ({i,variableCards , setEjecutarConsulta})=>{



    const [openDialog,setOpenDialog]=useState(false)
    const {setSeleccionado}=useSeleccionado()
  
  
  
    return(
          <Link key={i._id} to={{pathname: `${variableCards.cardTo}/${i._id}` }} onClick={() => setSeleccionado(i)}>
                <div className="cards-container mb-6 shadow-sm bg-white transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                <div className="mx-6 mb-5">
                    <div className="flex">
                            <i className={`${variableCards.icon} text-white bg-gray-800 mr-4 pt-4 px-3 pb-2`}></i>
                        <div className="card-info w-full align-center flex justify-between">
                            <span className="font-semibold pt-3">ID {i._id}</span>
                            <div className="edit-card pt-4 space-x-5">
                                <Link to={`${variableCards.linkIcon}/${i._id}`} onClick={() => setSeleccionado(i)}>
                                    <Tooltip title="editar">
                                        <i className="fas fa-pen hover:text-blue-600 text-blue-800 fa-lg"></i>
                                    </Tooltip>
                                </Link>
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
                            <th >C.C vendedor</th>
                            <th >C.C./NIT cliente</th>
                            <th >Valor total venta</th>
                            <th >Fecha pago</th>
                            <th >Estado de venta</th>
                        </tr>
                        <tr>
                            <td align="center">{i.vendedor.field2}</td>
                            <td align="center">{i.cliente.field2}</td>
                            <td align="center">$ {i.valorTotalVenta}</td>
                            <td align="center">{i.fechaPago}</td>
                            <td align="center">{i.estadoVenta}</td>
                        </tr>
                    </table>
                </div>
            </div>
  
      </Link>
  
  
    );
  }

export default CardsVentas
