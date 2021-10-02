import { useState,useEffect } from "react";


const NuevaVenta=(props)=>{
    const [detect,setDetect]=useState("");

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


    return(
    
        <div>
            <form className=" space-y-8 my-16">
                <div className="form-upper-section flex justify-between font-bold label-color">
                    <div className="w-1/6 ">
                        <label htmlFor="userid">ID Responsable</label>
                        <input required class=" w-full h-8 p-2" type="text" name="userid" id="userid"/>
                    </div>
                    <div className="w-1/6">
                        <label htmlFor="username">NIT/C.C.</label>
                        <input required class=" w-full h-8 p-2" type="text" name="username" id="username"
                            value={detect} 
                            onChange={(e)=>{
                                setDetect(e.target.value);
                        }}/>
                    </div>
                    <div className="w-1/6">
                        <label htmlFor="userole">Razon Social</label>
                        <input required  disabled class=" w-full h-8 p-2" type="text" name="userole" id="userole" value="hola"/>
                    </div> 
                    <div className="w-1/6">
                        <label htmlFor="userole">Fecha de pago</label>
                        <input required class=" w-full h-8 p-2" type="text" name="userole" id="userole"/>
                    </div> 
                </div>
                <div className="form-lower-section flex justify-between font-bold label-color">
                    <div className="w-1/6">
                        <label htmlFor="usercel">Telefono</label>
                        <input required disabled class=" w-full h-8 p-2" type="tel" name="usercel" id="usercel"/>
                    </div>
                    <div className="w-1/6">
                        <label htmlFor="userspecial">Precio unitario</label>
                        <input required disabled class=" w-full h-8 p-2" type="email" name="userspecial" id="userspecial"/>
                    </div>
                    <div className="w-1/6">
                        <label htmlFor="userole"></label>
                        <input required disabled class=" w-full h-8 p-2" type="text" name="userspecial" id="userspecial"/>
                    </div>
                    <div className="w-1/6">
                        <input required class="cursor-pointer w-full rounded text-gray-600 bg-gray-300" type="button" name="userspecial" id="userspecial" value="Productos"/>
                    </div>
                </div>
                <div className=" w-full flex justify-center">
                    <input className="w-1/6 cursor-pointer bg-green-400 h-8 rounded text-white font-bold my-16" type="submit" value="Guardar"/>
                </div>
            </form> 
    </div>

    );
}

export default NuevaVenta;