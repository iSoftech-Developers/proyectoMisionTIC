import { useParams,useHistory } from "react-router";
import {useEffect,useState} from "react";



const DetalleCliente = (props) => {



    const clientes = [
        { id: 0, field1:"Liliana Romero", field2: "123456789",field3:"liliana@gmail.com",field4:"Bogota DC",field5:"3135635569",field6:"Bogota",field7:"cra 1 # 1-1"},
        { id: 1, field1:"Anna Blanco", field2: "987654321",field3:"anna@gmail.com",field4:"Medellin",field5:"313333333",field6:"antioquia",field7:"cra 2 # 2-2" },
        { id: 2, field1:"Anna Blanco", field2: "987654321",field3:"anna@gmail.com",field4:"Medellin",field5:"313333333",field6:"antioquia",field7:"cra 2 # 2-2" },
        { id: 3, field1:"Anna Blanco", field2: "987654321",field3:"anna@gmail.com",field4:"Medellin",field5:"313333333",field6:"antioquia",field7:"cra 2 # 2-2" },
      ];
      const [cardsinfomation,setCardsinfomation] =useState([]);
      useEffect(()=>{
        setCardsinfomation(clientes);
      },[clientes]); 
    
    let history = useHistory();
    let { id } = useParams();
    let cliente = clientes[parseInt(id, 10)];
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
