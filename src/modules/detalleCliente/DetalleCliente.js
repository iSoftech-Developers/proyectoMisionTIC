import { useParams } from "react-router";



const DetalleCliente = ({cardsinformation}) => {

    let { id } = useParams();
    
  

    return (
        
        <>
        {cardsinformation.map((cliente)=>{
        if(cliente._id===id){
            return(
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
            );
        }
    }
    )}
        
        </>
      
      
    );
}

export default DetalleCliente;
