import './tablas.css';

const Tablas=(props)=>{

    return(

        <>
            <div className="table-container">
                <div className="table-header">
                    <span className="bolder table-title">Descripción de la venta</span>
                    <div className="textfield searchText"> 
                    <i className="fas fa-search"></i>
                    <input type="text" id="searchbar" placeholder="Buscar usuario por ID o nombre" title="Type in a category"/>
                </div>

                </div>
                
                <table>
                    <tr>
                        <th>{props.field1}</th>
                        <th>{props.field2}</th>
                        <th>{props.field3}</th>
                        <th>{props.field4}</th>
                        <th>{props.field5}</th>
                        <th>{props.field6}</th>               
                    </tr>
                    <tr>
                        <td align="center">1098467382</td>
                        <td align="center">Camiseta Nike</td>
                        <td align="center">$200.000</td>
                        <td align="center">XL</td>
                        <td align="center">2</td>
                        <td align="center">$400.000</td>
                    </tr>
                </table>
            </div> 
        </>
    );
}

export default Tablas;