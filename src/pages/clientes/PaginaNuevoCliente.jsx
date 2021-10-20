import NoButtonUpperBarSection from '../../components/NoButtonUpperBarSection';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";
import PostDB from '../../utils/PostDB';


const PaginaNuevoCliente =()=>{


  const BASE_URL = process.env.REACT_APP_BASE_URL;

    const urlPost = `${BASE_URL}/clientes`
    const form = useRef(null);

    const submitForm =  async (e) => {
        e.preventDefault();

        const fd = new FormData(form.current);

        const nuevoCliente = {};
        fd.forEach((value,key) => {
        nuevoCliente[key] = value;
        });

        console.log('Datos del form enviados', nuevoCliente);

        const cambios = {
            nombrecliente:nuevoCliente.nombrecliente,
            idcliente: nuevoCliente.idcliente,
            email: nuevoCliente.email,
            ciudad: nuevoCliente.ciudad,
            telefono: nuevoCliente.telefono,
            departamento: nuevoCliente.departamento,
            direccion: nuevoCliente.direccion,
            personacontacto: nuevoCliente.personacontacto,
        }

        PostDB(cambios, urlPost)
    
    };
  

    return(
      <>
        <NoButtonUpperBarSection title="Agregar Cliente" edit={false}/>

        <form ref={form} onSubmit={submitForm} className=" space-y-8 my-16">
                <div className="form-upper-section flex justify-between font-bold label-color">
                    <div className="w-1/5">
                        <label for="nombrecliente">Razón Social</label>
                        <input required class=" w-full h-8 p-2 input-border" type="text" name="nombrecliente"/>
                    </div>
                    <div className="w-1/5">
                        <label for="idcliente">NIT/C.C.</label>
                        <input required class=" w-full h-8 p-2 input-border" type="Number" min={0} name="idcliente"/>
                    </div>
                    <div className="w-1/5">
                        <label for="email">Correo electrónico</label>
                        <input required class=" w-full h-8 p-2 input-border" type="email" name="email"/>
                    </div> 
                    <div className="w-1/5">
                        <label for="ciudad">Ciudad</label>
                        <input required class=" w-full h-8 p-2 input-border" type="text" name="ciudad"/>
                    </div> 
                </div>
                <div className="form-lower-section flex justify-between font-bold label-color">
                    <div className="w-1/5">
                        <label for="telefono">Teléfono</label>
                        <input required class=" w-full h-8 p-2 input-border" type="text" name="telefono"/>
                    </div>
                    <div className="w-1/5">
                        <label for="departamento">Departamento</label>
                        <input required class=" w-full h-8 p-2 input-border" type="text" name="departamento"/>
                    </div>
                    <div className="w-1/5">
                        <label for="direccion">Dirección</label>
                        <input required class=" w-full h-8 p-2 input-border" type="text" name="direccion"/>
                    </div>
                    <div className="w-1/5">
                        <label for="personacontacto">Persona de contacto</label>
                        <input required class=" w-full h-8 p-2 input-border" type="text" name="personacontacto"/>
                    </div>
                </div>
                <div className=" w-full flex justify-center">
                    <input className="w-1/6 cursor-pointer bg-green-600 hover:bg-green-500 h-10 rounded text-white font-bold my-16 " type="submit" value="Guardar" />
                    <ToastContainer position='bottom-center' autoClose={1000} />
                </div>
          </form> 
      </>


    );

}


export default PaginaNuevoCliente;