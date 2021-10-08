import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams,useHistory} from "react-router";
import { useRef } from "react";


    
const EditarCliente = ({cardsClientes,formLabelTitle}) => {

    const form = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();

        const fd = new FormData(form.current);

        const editarCliente = {};
        fd.forEach((value,key) => {
          editarCliente[key] = value;
        });

        console.log('Datos del form enviados', editarCliente);
        toast.success('Cliente actualizado');
    };


    let { id } = useParams();


    return (
        <>
        {cardsClientes.map(cliente=>{

        if(cliente._id===id){
            return(
                <div>
            
                <form ref={form} onSubmit={submitForm} className=" space-y-8 my-16">
                    <div className="form-upper-section flex justify-between font-bold label-color">
                        <div className="w-1/5">
                            <label for="nombrecliente">{formLabelTitle.label1}</label>
                            <input  value={cliente.field1} required class=" w-full h-8 p-2 input-border" type="String" name="nombrecliente"/>
                        </div>
                        <div className="w-1/5">
                            <label for="idcliente">{formLabelTitle.label2}</label>
                            <input   value={cliente.field2} required class=" w-full h-8 p-2 input-border" type="Number" min={0} name="idcliente"/>
                        </div>
                        <div className="w-1/5">
                            <label for="email">{formLabelTitle.label3}</label>
                            <input required placeholder={cliente.field3} class=" w-full h-8 p-2 input-border" type="email" name="email"/>
                        </div> 
                        <div className="w-1/5">
                            <label for="ciudad">{formLabelTitle.label4}</label>
                            <input required placeholder={cliente.field4} class=" w-full h-8 p-2 input-border" type="String" name="ciudad"/>
                        </div> 
                    </div>
                    <div className="form-lower-section flex justify-between font-bold label-color">
                        <div className="w-1/5">
                            <label for="telefono">{formLabelTitle.label5}</label>
                            <input required placeholder={cliente.field5} class=" w-full h-8 p-2 input-border" type="String" name="telefono"/>
                        </div>
                        <div className="w-1/5">
                            <label for="departamento">{formLabelTitle.label6}</label>
                            <input required placeholder={cliente.field6} class=" w-full h-8 p-2 input-border" type="String" name="departamento"/>
                        </div>
                        <div className="w-1/5">
                            <label for="direccion">{formLabelTitle.label7}</label>
                            <input required placeholder={cliente.field7}  class=" w-full h-8 p-2 input-border" type="String" name="direccion"/>
                        </div>
                        <div className="w-1/5">
                            <label for="personacontacto">{formLabelTitle.label8}</label>
                            <input required placeholder={cliente.field8} class=" w-full h-8 p-2 input-border" type="String" name="personacontacto"/>
                        </div>
                    </div>
                    <div className=" w-full flex justify-center">
                        <input className="w-1/6 cursor-pointer bg-green-400 h-10 rounded String-white font-bold my-16 text-white" type="submit" value="Guardar"/>
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
