import './NuevaVenta.css';



const NuevaVenta=()=>{


    return(
        <>
                <form className="flex justify-between">
                    <div className="flex flex-col">
                        
                        <div>
                            <label className="font-bold">ID Responsable</label>
                        </div>
                        <div className="mb-8">
                            <input required type="text" />
                        </div>
                        <div>
                            <label className="font-bold ">Razón Social</label>
                        </div>
                        <div className="mb-8">
                            <input required type="text" />
                        </div>
                        <div>
                            <label className="font-bold ">Departamento</label>
                        </div>
                        <div >
                            <input required type="text" className=""/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <label className="font-bold ">NIT/C.C</label>
                        </div>
                        <div className="mb-8">
                            <input required type="text" />
                        </div>
                        <div>
                            <label className="font-bold ">Dirección</label>
                        </div>
                        <div>
                            <input required type="text"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <label className="font-bold ">Fecha de pago</label>
                        </div>
                        <div className="mb-8">
                            <input required type="text"/>
                        </div>
                        <div>
                            <label className="font-bold ">Celular</label>
                        </div>
                        <div>
                            <input required type="text"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <label className="font-bold ">Estado de venta</label>
                        </div>
                        <div className="mb-8">
                            <input required type="text"/>
                        </div>
                        <div>
                            <label className="font-bold ">Email</label> 
                        </div>
                        <div>
                            <input required type="text"/>
                        </div>
                    </div>
                </form>  

        </>

    );
}

export default NuevaVenta;