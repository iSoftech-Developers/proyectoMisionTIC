import './NuevaVenta.css';



const NuevaVenta=()=>{


    return(
        <>
                <div className="container-text-over-text">
                    <div className="text-over-text">
                        
                        <div>
                            <span class="bolder independent-child">ID Responsable</span>
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                        <div>
                            <span className="bolder independent-child">Razón Social</span>
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                        <div>
                            <span className="bolder independent-child">Departamento</span>
                        </div>
                        <div>
                            <input type="text" className=""/>
                        </div>
                    </div>
                    <div className="text-over-text">
                        <div>
                            <span class="bolder independent-child">NIT/C.C</span>
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                        <div>
                            <span class="bolder independent-child">Dirección</span>
                        </div>
                        <div>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="text-over-text">
                        <div>
                            <span class="bolder independent-child">Fecha de pago</span>
                        </div>
                        <div>
                            <input type="text"/>
                        </div>
                        <div>
                            <span class="bolder independent-child">Celular</span>
                        </div>
                        <div>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="text-over-text">
                        <div>
                            <span class="bolder independent-child">Estado de venta</span>
                        </div>
                        <div>
                            <input type="text"/>
                        </div>
                        <div>
                            <span class="bolder independent-child">Email</span> 
                        </div>
                        <div>
                            <input type="text"/>
                        </div>
                    </div>
                </div>  

        </>

    );
}

export default NuevaVenta;