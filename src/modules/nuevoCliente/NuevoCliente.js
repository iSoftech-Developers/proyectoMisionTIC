


    
const NuevoCliente = (props) => {
    return (
    
        <div>
            
            <form className=" space-y-8 my-16">
                <div className="form-upper-section flex justify-between font-bold label-color">
                    <div className="w-1/5">
                        <label for="userid">{props.formLabelTitle.label1}</label>
                        <input required class=" w-full h-8 p-2" type="text" name="userid" id="userid"/>
                    </div>
                    <div className="w-1/5">
                        <label for="username">{props.formLabelTitle.label2}</label>
                        <input required class=" w-full h-8 p-2" type="text" name="username" id="username"/>
                    </div>
                    <div className="w-1/5">
                        <label for="userole">{props.formLabelTitle.label3}</label>
                        <input required class=" w-full h-8 p-2" type="text" name="userole" id="userole"/>
                    </div> 
                    <div className="w-1/5">
                        <label for="userole">{props.formLabelTitle.label4}</label>
                        <input required class=" w-full h-8 p-2" type="text" name="userole" id="userole"/>
                    </div> 
                </div>
                <div className="form-lower-section flex justify-between font-bold label-color">
                    <div className="w-1/5">
                        <label for="usercel">{props.formLabelTitle.label5}</label>
                        <input required class=" w-full h-8 p-2" type="text" name="usercel" id="usercel"/>
                    </div>
                    <div className="w-1/5">
                        <label for="userspecial">{props.formLabelTitle.label6}</label>
                        <input required class=" w-full h-8 p-2" type="text" name="userspecial" id="userspecial"/>
                    </div>
                    <div className="w-1/5">
                        <label for="userole">{props.formLabelTitle.label7}</label>
                        <input required class=" w-full h-8 p-2" type="text" name="userspecial" id="userspecial"/>
                    </div>
                    <div className="w-1/5">
                        <label for="userole">{props.formLabelTitle.label8}</label>
                        <input required class=" w-full h-8 p-2" type="text" name="userspecial" id="userspecial"/>
                    </div>
                </div>
                <div className=" w-full flex justify-center">
                    <input className="w-1/5 cursor-pointe bg-green-400 h-7 text-white font-bold my-16" type="submit" value="Guardar"/>
                   
                </div>
            </form> 
        </div>
    )
}

export default NuevoCliente
