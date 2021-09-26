import './NuevaVenta.css';



const NuevaVenta=()=>{


    return(
        <>
                <form className="container-text-over-text">
                    <div className="text-over-text">
                        
                        <div>
                            <label class="bolder independent-child">ID Responsable</label>
                        </div>
                        <div>
                            <input required type="text" />
                        </div>
                        <div>
                            <label className="bolder independent-child">Razón Social</label>
                        </div>
                        <div>
                            <input required type="text" />
                        </div>
                        <div>
                            <label className="bolder independent-child">Departamento</label>
                        </div>
                        <div>
                            <input required type="text" className=""/>
                        </div>
                    </div>
                    <div className="text-over-text">
                        <div>
                            <label class="bolder independent-child">NIT/C.C</label>
                        </div>
                        <div>
                            <input required type="text" />
                        </div>
                        <div>
                            <label class="bolder independent-child">Dirección</label>
                        </div>
                        <div>
                            <input required type="text"/>
                        </div>
                    </div>
                    <div className="text-over-text">
                        <div>
                            <label class="bolder independent-child">Fecha de pago</label>
                        </div>
                        <div>
                            <input required type="text"/>
                        </div>
                        <div>
                            <label class="bolder independent-child">Celular</label>
                        </div>
                        <div>
                            <input required type="text"/>
                        </div>
                    </div>
                    <div className="text-over-text">
                        <div>
                            <label class="bolder independent-child">Estado de venta</label>
                        </div>
                        <div>
                            <input required type="text"/>
                        </div>
                        <div>
                            <label class="bolder independent-child">Email</label> 
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