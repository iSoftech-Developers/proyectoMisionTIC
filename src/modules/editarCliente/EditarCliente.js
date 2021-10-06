import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams,useHistory } from "react-router";


    
const EditarCliente = ({cardsClientes,formLabelTitle}) => {

    let { id } = useParams();


    return (
        <>
        {cardsClientes.map(cliente=>{

        if(cliente._id===id){
            return(
                <div>
            
                <form className=" space-y-8 my-16">
                    <div className="form-upper-section flex justify-between font-bold label-color">
                        <div className="w-1/5">
                            <label for="userid">{formLabelTitle.label1}</label>
                            <input  disabled value={cliente.field1} required class=" w-full h-8 p-2 input-border" type="text" name="userid" id="userid"/>
                        </div>
                        <div className="w-1/5">
                            <label for="username">{formLabelTitle.label2}</label>
                            <input  disabled  value={cliente.field2} required class=" w-full h-8 p-2 input-border" type="text" name="username" id="username"/>
                        </div>
                        <div className="w-1/5">
                            <label for="userole">{formLabelTitle.label3}</label>
                            <input required class=" w-full h-8 p-2 input-border" type="text" name="userole" id="userole"/>
                        </div> 
                        <div className="w-1/5">
                            <label for="userole">{formLabelTitle.label4}</label>
                            <input required class=" w-full h-8 p-2 input-border" type="text" name="userole" id="userole"/>
                        </div> 
                    </div>
                    <div className="form-lower-section flex justify-between font-bold label-color">
                        <div className="w-1/5">
                            <label for="usercel">{formLabelTitle.label5}</label>
                            <input required class=" w-full h-8 p-2 input-border" type="text" name="usercel" id="usercel"/>
                        </div>
                        <div className="w-1/5">
                            <label for="userspecial">{formLabelTitle.label6}</label>
                            <input required class=" w-full h-8 p-2 input-border" type="text" name="userspecial" id="userspecial"/>
                        </div>
                        <div className="w-1/5">
                            <label for="userole">{formLabelTitle.label7}</label>
                            <input required class=" w-full h-8 p-2 input-border" type="text" name="userspecial" id="userspecial"/>
                        </div>
                        <div className="w-1/5">
                            <label for="userole">{formLabelTitle.label8}</label>
                            <input required class=" w-full h-8 p-2 input-border" type="text" name="userspecial" id="userspecial"/>
                        </div>
                    </div>
                    <div className=" w-full flex justify-center">
                        <input className="w-1/6 cursor-pointer bg-green-400 h-10 rounded text-white font-bold my-16" type="submit" value="Guardar"/>
                        <ToastContainer position='bottom-center' autoClose={5000} />
                    </div>
                </form> 
            </div>
                
            );
            }
        })}
    
     
    </>
    );
}

export default EditarCliente
