import { useParams } from "react-router";



const DetalleProducto = ({cardsinformation}) => {
    let { id } = useParams();
    


    return (
        
        <>
        {cardsinformation.map((key)=>{
        if(key._id===id){
            return(
                <div className="">
                <div className="flex justify-between">
                    <div className="">
                        <div>
                            <span className="block font-bold">Descripción</span>
                            <span>{key.field1}</span>
                        </div>
                        <div className="my-8">
                            <span className="block font-bold">Valor Unitario</span>
                            <span>{key.field2}</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="block font-bold">Unidades disponibles</span>
                            <span>{key.field3}</span>
                        </div>
                        <div className="my-8">
                            <span className="block font-bold">Talla</span>
                            <span>{key.field4}</span>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <span className="block font-bold">Estado</span>
                            <span>{key.field5}</span>
                        </div>
                        <div className="my-8">
                            <span className="block font-bold">Género</span>
                            <span>{key.field6}</span>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <span className="block font-bold">Color</span>
                            <span>{key.field7}</span>
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

};
export default DetalleProducto
