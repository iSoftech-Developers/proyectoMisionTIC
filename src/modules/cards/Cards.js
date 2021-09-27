import { Link } from 'react-router-dom';
import './Cards.css';


const Cards=(props)=>{

    return(
        <>
           <Link to={props.variableCards.cardTo}>
                <div className="cards-container mb-4 shadow bg-gray-100 ">
                    
                    <div className="mx-6 mb-5">
                        <div className="flex">
                            <i className={props.cardIcon.iconProperties}></i>
                            <div className="card-info w-full align-center flex justify-between">
                                <span className="font-semibold self-center">{props.variableCards.titleCard}</span>
                                <Link to={props.variableCards.linkIcon} className="edit-card border-0"><i className="fas fa-pen text-gray-400"></i></Link>
                            </div>
                        </div>
                            <table className="text-sm w-full bg-white border-gray-400 border mt-4">
                                <tr>
                                    <th >{props.variableCards.field1}</th>
                                    <th >{props.variableCards.field2}</th>
                                    <th >{props.variableCards.field3}</th>
                                    <th >{props.variableCards.field4}</th>
                                    <th >{props.variableCards.field5}</th>
                                </tr>
                                <tr>
                                    <td align="center">1098467382</td>
                                    <td align="center">Juan Camilo Pérez</td>
                                    <td align="center">Gimnasio</td>
                                    <td align="center">310 27864567</td>
                                    <td align="center">11-04-2021</td>
                                </tr>
                            </table>
                    </div>
                </div>
           
           </Link>
            

        </>


    );


}

export default Cards;