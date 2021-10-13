import { useSeleccionado } from "../../context/Seleccionado";

const DetalleUsuarios=()=>{

    const {seleccionado}=useSeleccionado()


    return(
        <>
            <div className="flex mt-14">
                <div className="p-8 border-solid border-2 border-gray-400">
                    <i className="fas fa-user fa-10x text-gray-300"></i>
                </div>
                <div className="w-full ml-10 mt-8">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <div>
                                <span className="bg-black text-white text-xs">{seleccionado.field4}</span>
                            </div>
                            <div>
                                <span className="text-lg">{seleccionado._id}</span>
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
                                    <span>{seleccionado.field5}</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <span className="font-bold">Nombres y apellidos</span>
                                </div>
                                <div>
                                    <span>{seleccionado.field1}</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <span className="font-bold">Documento</span>
                                </div>
                                <div>
                                    <span>{seleccionado.field2}</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <span className="font-bold">Correo electrónico</span>
                                </div>
                                <div>
                                    <span>{seleccionado.field3}</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <span className="font-bold">Celular</span> 
                                </div>
                                <div>
                                    <span>{seleccionado.field6}</span>
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

