import { Link} from 'react-router-dom';
import { useEffect } from 'react';
import './Cards.css';


const Cards=({ variableCards,cardsInfo })=>{


/*
useEffect(()=>{
  console.log("este es el listado" ,cardsInfo)

},[cardsInfo]);

*/

    return(
      <>
          {cardsInfo.map((i)=>{
            return(
           <Link to={variableCards.cardTo}>
                <div className="cards-container mb-4 shadow bg-gray-100 ">
                    
                    <div className="mx-6 mb-5">
                        <div className="flex">
                            <i className={`${variableCards.icon} text-white bg-gray-800 mr-4 pt-4 px-3 pb-2`}></i>
                            <div className="card-info w-full align-center flex justify-between">
                                <span className="font-semibold self-center">ID {i.id}</span>
                                <Link to={variableCards.linkIcon} className="edit-card border-0"><i className="fas fa-pen text-gray-400"></i></Link>
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
            })}
  
        </>
        

    );


}

export default Cards;