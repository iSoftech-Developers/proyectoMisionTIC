import './Cards.css';


const Cards=(props)=>{

    return(
        <>
            <div className="cards-container m-8 shadow bg-gray-50 border-solid ">
                <div className="mx-6 mb-5">
                    <div className="flex">
                        <i className="fas fa-user text-white bg-gray-800 mr-4 pt-4 px-3 pb-2"></i>
                        <div className="card-info w-full align-center flex justify-between">
                            <span className="font-semibold">{props.titleCard}</span>
                            <button className="edit-card bg-gray-50 border-0"><i className="fas fa-pen text-gray-400"></i></button>
                        </div>
                    </div>
                        <table className="text-sm w-full bg-white border-solid mt-4">
                            <tr>
                                <th >{props.field1}</th>
                                <th >{props.field2}</th>
                                <th >{props.field3}</th>
                                <th >{props.field4}</th>
                                <th >{props.field5}</th>
                                
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

        </>


    );


}

export default Cards;