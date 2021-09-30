import React from 'react'

const EstadoDeVenta = () => {
    return (
        <>
            <div className="block text-center mt-9">
                <h1 className="text-2xl font-semibold">Estado de venta</h1>
                <h5>Venta ID: ADB1233455</h5>
            </div>
            
            <form className="text-center mt-12">
                <div>
                    <input type="radio" id="sold" name="salestatus" value="sold"/>
                    <label className="ml-2" for="sold">Vendido</label>
                </div>
                <div>
                    <input type="radio" id="process" name="salestatus" value="process"/>
                    <label className="ml-2" for="process">En proceso</label>
                </div>
                <div>
                    <input type="radio" id="canceled" name="salestatus" value="canceled"/>
                    <label className="ml-2" for="canceled">Cancelada</label>
                </div>
                    
                <div className="flex justify-center">
                    <input type="submit" className="w-1/6 cursor-pointer bg-green-400 h-7 text-white font-bold my-14" value="Guardar"/>
                </div>    
            </form>
            
            
            
        
        </>
    )
}

export default EstadoDeVenta;
