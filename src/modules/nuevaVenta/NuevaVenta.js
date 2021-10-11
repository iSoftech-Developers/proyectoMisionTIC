import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const NuevaVenta=()=>{
    const vendedores = [
        { id:0,field1: 1037645234, field2: "Juan Sebastian Cabrera Rojas", field3: "Online", field4: "313248789", field5: "29/09/2021" },
    
    ];

    const productos = [
        { id: 555555, field1:"Camiseta nike verde", field2: 20000 , field3: 1000, field4: "XS", field5: "DISPONIBLE"},
        { id: 111111, field1:"Lime Green", field2: 10000, field3: 300000, field4: "S", field5: "DISPONIBLE" },
        { id: 222222, field1:"Tomato", field2: 40000 , field3: 500000, field4: "M", field5: "DISPONIBLE"},
        { id: 333333, field1:"Seven Ate Nine", field2: 50000 , field3: 600000, field4: "L", field5: "DISPONIBLE"},
    ];

    const clientes = [
        { id: 1, field1:"Liliana Romero", field2: "123456789",field3:"liliana@gmail.com",field4:"Bogota DC",field5:"bogota",field6:"cra 1 # 1-1",field7:"3135635569"},
        { id: 2, field1:"Anna Blanco", field2: "987654321",field3:"anna@gmail.com",field4:"Medellin",field5:"313333333",field6:"antioquia",field7:"cra 2 # 2-2" },

    ];

    const form = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();

    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value,key) => {
        nuevaVenta[key] = value;
    });

    console.log('Datos del form enviados', nuevaVenta);
    toast.success('Venta guardada');
};

    return(
    
        <div>
            <form ref={form} onSubmit={submitForm} className=" space-y-8 my-16">
                <div className="form-upper-section flex justify-between font-bold label-color">
                    <div className="w-1/6 ">
                        <label htmlFor="userid">ID Responsable</label>
                        <input required class=" w-full h-8 p-2 input-border" type="text" name="userid" id="userid"/>
                    </div>
                    <div className="w-1/6">
                        <label htmlFor="usernit">NIT/C.C.</label>
                        <input required class=" w-full h-8 p-2 input-border" type="text" name="usernit" id="usernit"/>
                    </div>
                    <div className="w-1/6">
                        <label htmlFor="username">Nombre cliente</label>
                        <input required disabled class=" w-full h-8 p-2 rounded-md input-border" type="text" name="username" id="username" value="Crear fields en back"/>
                    </div>
                    <div className="w-1/6">
                        <label htmlFor="paydate">Fecha de pago</label>
                        <input required class=" w-full h-8 p-2 input-border" type="text" name="paydate" id="paydate"/>
                    </div>
                </div>
                <div className="form-lower-section flex justify-between font-bold label-color">
                    <div className="w-1/6 ">
                            <label htmlFor="celnumber">Teléfono</label>
                            <input required class=" w-full h-8 p-2 input-border" type="text" name="celnumber" id="celnumber"/>
                        </div>
                        <div className="w-1/6">
                            <label htmlFor="usercity">Ciudad</label>
                            <input required class=" w-full h-8 p-2 input-border" type="text" name="usercity" id="usercity"/>
                        </div>
                        <div className="w-1/6 ">
                            <label htmlFor="salestatus">Estado de venta</label>
                            <select required class=" w-full h-8 input-border text-gray-500 " name="salestatus">
                                <option value="Usuarios">En proceso</option>
                                <option value="Usuarios">Entregada</option>
                                <option value="Usuarios">Cancelada</option>
                            </select>
                        </div> 
                    <div className="w-1/6">
                        <input required class="cursor-pointer w-full mt-4 h-10 rounded text-white bg-gray-400" type="button" name="userspecial" id="userspecial" value="Productos"/>
                    </div>
                </div>
                <div className=" w-full flex justify-center">
                    <input className="w-1/6 cursor-pointer bg-green-400 h-10 rounded text-white font-bold my-16" type="submit" value="Guardar"/>
                    <ToastContainer position="top-right" autoClose={5000}/>
                </div>
            </form>
           
    </div>

    );
}

export default NuevaVenta;