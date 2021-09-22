import './Cards.css';


const Cards=(props)=>{

    return(
        <>
            <div className="cards-container">
                <div className="cards-sp">
                    <div className="card-upper">
                        <i className="fas fa-user"></i>
                        <div className="card-info">
                            <span className="bolder">Vendedor ID : </span>
                            <button className="edit-card"><i className="fas fa-pen"></i></button>
                        </div>
                    </div>
                    <div className="card-detail">
                        <table>
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
            </div>

        </>


    );


}

export default Cards;