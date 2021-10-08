import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NuevoCliente = ({formLabelTitle}) => {
    let history = useHistory();

    const form = useRef(null);
 
    const submitForm =  async (e) => {
        e.preventDefault();

        const fd = new FormData(form.current);

        const nuevoCliente = {};
        fd.forEach((value,key) => {
          nuevoCliente[key] = value;
        });

        console.log('Datos del form enviados', nuevoCliente);


        const options = {
            
            method: 'POST',
            url: 'http://localhost:3001/clientes/',
            headers: {'Content-Type': 'application/json'},
            data: {
              nombrecliente:nuevoCliente.nombrecliente,
              idcliente: nuevoCliente.idcliente,
              email: nuevoCliente.email,
              ciudad: nuevoCliente.ciudad,
              telefono: nuevoCliente.telefono,
              departamento: nuevoCliente.departamento,
              direccion: nuevoCliente.direccion,
              personacontacto: nuevoCliente.personacontacto,
             
            },
          };    
          await axios
          .request(options)
          .then(function (response) {
            console.log(response.data);
            toast.success('Cliente agregado con éxito');
          })
          .catch(function (error) {
            console.error(error);
            toast.error('Error creando un Cliente');
          });
          
    };



   

    return (
    
        <div>
            
            <form ref={form} onSubmit={submitForm} className=" space-y-8 my-16">
                <div className="form-upper-section flex justify-between font-bold label-color">
                    <div className="w-1/5">
                        <label for="nombrecliente">{formLabelTitle.label1}</label>
                        <input required class=" w-full h-8 p-2 input-border" type="text" name="nombrecliente"/>
                    </div>
                    <div className="w-1/5">
                        <label for="idcliente">{formLabelTitle.label2}</label>
                        <input required class=" w-full h-8 p-2 input-border" type="Number" min={0} name="idcliente"/>
                    </div>
                    <div className="w-1/5">
                        <label for="email">{formLabelTitle.label3}</label>
                        <input required class=" w-full h-8 p-2 input-border" type="email" name="email"/>
                    </div> 
                    <div className="w-1/5">
                        <label for="ciudad">{formLabelTitle.label4}</label>
                        <input required class=" w-full h-8 p-2 input-border" type="text" name="ciudad"/>
                    </div> 
                </div>
                <div className="form-lower-section flex justify-between font-bold label-color">
                    <div className="w-1/5">
                        <label for="telefono">{formLabelTitle.label5}</label>
                        <input required class=" w-full h-8 p-2 input-border" type="text" name="telefono"/>
                    </div>
                    <div className="w-1/5">
                        <label for="departamento">{formLabelTitle.label6}</label>
                        <input required class=" w-full h-8 p-2 input-border" type="text" name="departamento"/>
                    </div>
                    <div className="w-1/5">
                        <label for="direccion">{formLabelTitle.label7}</label>
                        <input required class=" w-full h-8 p-2 input-border" type="text" name="direccion"/>
                    </div>
                    <div className="w-1/5">
                        <label for="personacontacto">{formLabelTitle.label8}</label>
                        <input required class=" w-full h-8 p-2 input-border" type="text" name="personacontacto"/>
                    </div>
                </div>
                <div className=" w-full flex justify-center">
                    <input className="w-1/6 cursor-pointer bg-green-400 h-10 rounded text-white font-bold my-16 " type="submit" value="Guardar" />
                    <ToastContainer position='bottom-center' autoClose={5000} />
                </div>
            </form> 
        </div>
    )
}





export default NuevoCliente
