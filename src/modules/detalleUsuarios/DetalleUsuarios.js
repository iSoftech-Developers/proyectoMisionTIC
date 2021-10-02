import { useParams,useHistory } from "react-router";
import {useEffect,useState} from "react";

const DetalleUsuarios=()=>{
    const vendedores = [
        { id:0,field1: 1037645234, field2: "Juan Sebastian Cabrera Rojas", field3: "Online", field4: "313248789", field5: "29/09/2021" },
    
      ];
    const [cardsinfomation,setCardsinfomation] =useState([]);
    useEffect(()=>{
      setCardsinfomation(vendedores);
    },[]); 

    
    let history = useHistory();
    let { id } = useParams();
    let user = cardsinfomation[parseInt(id, 10)];
    console.log(user);

    let back = e => {
        e.stopPropagation();
        history.goBack();
      };

    return(
        <>
            <div className="flex mt-14"onClick={back}>
                <div className="p-8 border-solid border-2 border-gray-400">
                    <i className="fas fa-user fa-10x text-gray-300"></i>
                </div>
                <div className="w-full ml-10 mt-8">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <div>
                                <span className="bg-black text-white text-xs">Administrador</span>
                            </div>
                            <div>
                                <span className="text-lg">ID {user.id}</span>
                            </div>  
                        </div>
                    </div>
                                

                    <div className="flex">
                        <div className="flex w-full justify-between mt-12">
                            <div className="flex flex-col ">
                                <div>
                                    <span className="font-bold">Fecha de ingreso</span>
                                </div>
                                <div>
                                    <span>{user.field5}</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <span className="font-bold">Nombres y apellidos</span>
                                </div>
                                <div>
                                    <span>{user.field2}</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <span className="font-bold">Especialidad</span>
                                </div>
                                <div>
                                    <span>{user.field3}</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <span className="font-bold">Celular</span> 
                                </div>
                                <div>
                                    <span>{user.field4}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      

            
        </>
    );
}

export default DetalleUsuarios ;

