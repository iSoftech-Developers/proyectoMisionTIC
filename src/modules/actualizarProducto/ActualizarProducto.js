

const ActualizarProducto = (props) => {
    
    return (
        <form className="space-y-8">
                <div className="form-upper-section flex justify-between font-bold label-color space-x-4">
                    <div className="w-1/5">
                        <label for="productid">{props.formLabelTitle.label1}</label>
                        <input required class=" w-full h-8 p-2" type="text" name="productid" id="productid"/>
                    </div>
                    <div className="w-1/5">
                        <label for="productdescription">{props.formLabelTitle.label2}</label>
                        <input required class=" w-full h-8 p-2" type="text" name="productdescription" id="productdescription"/>
                    </div>
                    <div className="w-1/5">
                        <label for="productvalue">{props.formLabelTitle.label3}</label>
                        <input required class=" w-full h-8 p-2" type="text" name="productvalue" id="productvalue"/>
                    </div> 
                    <div className="w-1/5">
                        <label for="productvalue">{props.formLabelTitle.label4}</label>
                        <input required class=" w-full h-8 p-2" type="text" name="productvalue" id="productvalue"/>
                    </div> 
                    <div className="w-1/5">
                        <label for="productstatus">{props.formLabelTitle.label5}</label>
                        <select required class=" w-full h-8 font-bold" name="productstatus">
                            <option value="available">Disponible</option>
                            <option value="notavailable">No disponible</option>
                        </select>
                    </div>
                </div>
                <div className=" w-full flex justify-center space-x-1">
                    <input className="w-1/5 cursor-pointer bg-green-400 h-10 text-white font-bold m-10 " type="submit" value="Guardar"/>
                    
                </div>
                
               
            </form>
    )
}

export default ActualizarProducto;
