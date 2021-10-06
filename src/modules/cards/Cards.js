import { Tooltip } from '@material-ui/core';
import { Link} from 'react-router-dom';
import './Cards.css';
import { useBuscado } from '../../context/BuscadorContext';

const Cards=({variableCards,cardsinformation})=>{
    const {busqueda}=useBuscado()

    return(
      <>
      {cardsinformation.map((i)=>{
          if (i._id.includes(busqueda)||i.ids.toLowerCase().includes(busqueda.toLowerCase())){
              return(
                  <Link to={{
                      pathname: `${variableCards.cardTo}/${i._id}`, 
                    }}>
                      
                      <div className="cards-container mb-6 shadow-sm bg-white transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                          
                          <div className="mx-6 mb-5">
                              <div className="flex">
                                      <i className={`${variableCards.icon} text-white bg-gray-800 mr-4 pt-4 px-3 pb-2`}></i>
                                  <div className="card-info w-full align-center flex justify-between">
                                      <span className="font-semibold pt-3">ID {i.ids}</span>
                                      <div className="edit-card pt-4 space-x-5">
                                          <Link to={`${variableCards.linkIcon}/${i._id}`}>
                                              <Tooltip title="editar">
                                                  <i className="fas fa-pen text-blue-500"></i>
                                              </Tooltip>
                                          </Link>
                                          <Link to={variableCards.linkIcon}>
                                              <Tooltip title="Eliminar">
                                                  <i className="fas fa-trash text-red-500"></i>
                                              </Tooltip>
                                          </Link>
                                      </div>
                                  </div>
                              </div>
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

{/* 
          {cardsinformation.map((i)=>{
              
            return(
                <Link to={{
                    pathname: `${variableCards.cardTo}/${i._id}`, 
                  }}>
                    
                    <div className="cards-container mb-6 shadow-sm bg-white transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                        
                        <div className="mx-6 mb-5">
                            <div className="flex">
                                    <i className={`${variableCards.icon} text-white bg-gray-800 mr-4 pt-4 px-3 pb-2`}></i>
                                <div className="card-info w-full align-center flex justify-between">
                                    <span className="font-semibold pt-3">ID {i.ids}</span>
                                    <div className="edit-card pt-4 space-x-5">
                                        <Link to={`${variableCards.linkIcon}/${i._id}`}>
                                            <Tooltip title="editar">
                                                <i className="fas fa-pen text-blue-500"></i>
                                            </Tooltip>
                                        </Link>
                                        <Link to={variableCards.linkIcon}>
                                            <Tooltip title="Eliminar">
                                                <i className="fas fa-trash text-red-500"></i>
                                            </Tooltip>
                                        </Link>
                                    </div>
                                </div>
                            </div>
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
            })} */}
       
        
       
        </>
        

    );


}

export default Cards ;
