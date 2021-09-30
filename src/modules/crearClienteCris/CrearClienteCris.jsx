import React from 'react'

const CrearClienteCris = () => {
    return (
        <>
            <div className="mt-9 flex flex-col">
                <div className="text-center font-bold text-xl text-gray-600">
                    <h1>Crear Nuevo Cliente</h1>
                </div>
                <form>
                    <div className="flex justify-between mt-24 ">
                        <div>
                            <label className="block" for="razonsocial">Razón social</label>
                            <input required className="text-black pl-2" type="text" id="razonsocial" name="razonsocial"/>
                        </div>
                        <div>
                            <label className="block" for="lname">NIT/C.C</label>
                            <input required className="text-black pl-2" type="text" id="lname" name=""/>
                        </div>
                        <div>
                            <label className="block" for="lname">Persona contacto</label>
                            <input required className="text-black pl-2" type="text" id="lname" name="lname"/>
                        </div> 
                        <div>
                            <label className="block" for="lname">Email</label>
                            <input required className="text-black pl-2" type="text" id="lname" name="lname"/>
                        </div> 
                    </div>

                    <div className="flex justify-between mt-12 ">
                        <div>
                            <label className="block" for="">Dirección</label>
                            <input required className="text-black pl-2" type="text" id="" name=""/>
                        </div>
                        <div>
                            <label className="block" for="lname">Departamento</label>
                            <input required className="text-black pl-2" type="text" id="lname" name="lname"/>
                        </div>
                        <div>
                            <label className="block" for="lname">Ciudad</label>
                            <input required className="text-black pl-2 border-gray-600" type="text" id="lname" name="lname"/>
                        </div> 
                        <div className="border-gray-300">
                            <label className="block" for="lname">Teléfono</label>
                            <input className="text-black pl-2"  type="text" id="lname" name="lname"/>
                        </div> 
                    </div>
                    <div className="flex justify-center mt-24 ">
                        <input required className="bg-green-600 font-bold text-white w-1/5" type="submit" value="Submit"/>
                    </div>
                </form>
               
                
            
            </div>
        </>
       
    )
}

export default CrearClienteCris
