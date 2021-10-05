import { useParams,useHistory } from "react-router";
import {useEffect,useState} from "react";
import axios from 'axios';


const DetalleCliente = (props) => {
    const [clienteInformation,setClinteInformation] =useState([]);
    useEffect(() => {
     
        const options = { method: 'GET', url: 'http://localhost:3001/clientes' };
        axios.request(options).then(function (response){
            console.log(response.data);
            setClinteInformation(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
        },[]);



    let history = useHistory();
    let { id } = useParams();
    console.log(id)
    let cliente = clienteInformation[parseInt(id, 10)];
    console.log(cliente)
  
    
  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
    return (
        
        <>
        <div className="" onClick={back}>
            <div className="flex justify-between">
                    <div className="">
                        <div>
                            <span className="block font-bold">Razon social</span>
                            <span>{cliente.field1}</span>
                        </div>
                        <div className="my-8">
                            <span className="block font-bold">Direccion</span>
                            <span>{cliente.field7}</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="block font-bold">NIT/C.C.</span>
                            <span>{cliente.field2}</span>
                        </div>
                        <div className="my-8">
                            <span className="block font-bold">Departamento</span>
                            <span>{cliente.field6}</span>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <span className="block font-bold">Telefono</span>
                            <span>{cliente.field5}</span>
                        </div>
                        <div className="my-8">
                            <span className="block font-bold">Municipio</span>
                            <span>{cliente.field4}</span>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <span className="block font-bold">Email</span>
                            <span>{cliente.field3}</span>
                        </div>
                    </div>
                </div> 
            </div>
        </>
      
      
    );
}

export default DetalleCliente;
