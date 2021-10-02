const Tablas=(props)=>{

    return(

        <>
            <div className="mt-2">
                <div className="">
                    <div className="flex align-center justify-between">
                        <span className="bolder align-center">Descripción de la venta</span>
                        <div className="bg-white border border-gray-500 rounded-xl ml-8"> 
                            <i className="fas fa-search text-gray-500 pl-4 mr-3"></i>
                            <input  className="outline-none w-96 h-9 rounded-xl"type="text"  placeholder="Buscar usuario por ID o nombre" title="Type in a category"/>
                        </div>
                    </div>
                </div>                      
                <table className="table-fixed w-full bg-white border-solid border-gray-400 border my-5">
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