const NuevaVenta=(props)=>{


    return(
    
        <div>
            <form className=" space-y-8 my-16">
                <div className="form-upper-section flex justify-between font-bold label-color">
                    <div className="w-1/6">
                        <label for="userid">Id Vendedor Responsable</label>
                        <input required class=" w-full h-8 p-2" type="text" name="userid" id="userid"/>
                    </div>
                    <div className="w-1/6">
                        <label for="username">NIT/C.C.</label>
                        <input required class=" w-full h-8 p-2" type="text" name="username" id="username"/>
                    </div>
                    <div className="w-1/6">
                        <label for="userole">Razon Social</label>
                        <input required class=" w-full h-8 p-2" type="text" name="userole" id="userole"/>
                    </div> 
                    <div className="w-1/6">
                        <label for="userole">Fecha de pago</label>
                        <input required class=" w-full h-8 p-2" type="text" name="userole" id="userole"/>
                    </div> 
                </div>
                <div className="form-lower-section flex justify-between font-bold label-color">
                    <div className="w-1/6">
                        <label for="usercel">Telefono</label>
                        <input required class=" w-full h-8 p-2" type="text" name="usercel" id="usercel"/>
                    </div>
                    <div className="w-1/6">
                        <label for="userspecial">Email</label>
                        <input required class=" w-full h-8 p-2" type="text" name="userspecial" id="userspecial"/>
                    </div>
                    <div className="w-1/6">
                        <label for="userole">Direccion</label>
                        <input required class=" w-full h-8 p-2" type="text" name="userspecial" id="userspecial"/>
                    </div>
                    <div className="w-1/6">
                        <label for="userole">Municipio</label>
                        <input required class=" w-full h-8 p-2" type="text" name="userspecial" id="userspecial"/>
                    </div>
                </div>
                <div className="w-1/6  font-semibold ">
                        <label for="userole">Departamento</label>
                        <input required class=" w-full h-8 p-2" type="text" name="userspecial" id="userspecial"/>
                    </div>
                <div className=" w-full flex justify-center">
                    <input className="w-1/6 cursor-pointe bg-green-400 h-7 text-white font-bold my-16" type="submit" value="Guardar"/>
                </div>
            </form> 
    </div>

    );
}

export default NuevaVenta;