const DetalleUsuarios=()=>{

    return(
        <>
        
            <div className="flex mt-14">
                <div className="p-8 border-solid border-2 border-gray-400">
                    <i className="fas fa-user fa-10x text-gray-300"></i>
                </div>
                <div className="w-full ml-10">
                    <div className="flex flex-col">
                        <div>
                            <span className="bg-black text-white text-xs">Administrador</span>
                        </div>
                        <div>
                            <span className="text-lg">023466</span>
                        </div>  
                    </div>

                    <div className="flex">
                        <div className="flex w-full justify-between mt-12">
                            <div className="flex flex-col ">
                                <div>
                                    <span className="font-bold">Nombre</span>
                                </div>
                                <div>
                                    <span>Juan Camilo Gomez</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <span className="font-bold">Fecha de ingreso</span>
                                </div>
                                <div>
                                    <span>10/04/2019</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <span className="font-bold">Celular</span>
                                </div>
                                <div>
                                    <span>302 1234567</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div>
                                    <span className="font-bold">Especialidad</span> 
                                </div>
                                <div>
                                    <span>Sección Gym</span>
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