import { useParams,useHistory } from "react-router";



const DetalleCliente = ({cardsinformation}) => {

    let history = useHistory();
    let { id } = useParams();
    
  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
    return (
        
        <>
        {cardsinformation.map((key)=>{
        if(key._id===id){
            return(
                <div className="" onClick={back}>
                <div className="flex justify-between">
                    <div className="">
                        <div>
                            <span className="block font-bold">Razon social</span>
                            <span>{key.field1}</span>
                        </div>
                        <div className="my-8">
                            <span className="block font-bold">Direccion</span>
                            <span>{key.field7}</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="block font-bold">NIT/C.C.</span>
                            <span>{key.field2}</span>
                        </div>
                        <div className="my-8">
                            <span className="block font-bold">Departamento</span>
                            <span>{key.field6}</span>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <span className="block font-bold">Telefono</span>
                            <span>{key.field5}</span>
                        </div>
                        <div className="my-8">
                            <span className="block font-bold">Municipio</span>
                            <span>{key.field4}</span>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <span className="block font-bold">Email</span>
                            <span>{key.field3}</span>
                        </div>
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
