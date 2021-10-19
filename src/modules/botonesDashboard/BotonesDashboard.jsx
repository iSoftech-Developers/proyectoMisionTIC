import React from 'react'
import { Link } from 'react-router-dom';
import PrivateComponent from '../PrivateComponent';


const BotonesDashboard = () => {
    return (

        <>
            <div className= "flex justify-between space-x-5 mt-6 h-28 mb-9">
                <div className="bg-green-600 hover:bg-green-500 w-full flex items-center rounded-2xl">
                    <Link className="active w-full py-2 flex flex-col items-center text-white font-normal" to="/nuevaVenta"><i className="fas fa-plus-circle fa-lg text-white text-3xl"></i>Nueva venta</Link>  
                </div>
                <div className="bg-green-900 hover:bg-green-800 w-full flex items-center rounded-2xl">
                    <Link className="active w-full py-2 flex flex-col items-center text-white" to="/moduloClientes"><i className="fas fa-users fa-lg text-white text-3xl"></i>Clientes</Link> 
                </div>
                <PrivateComponent roleList={['Administrador']}>
                    <div className=" bg-blue-900 hover:bg-blue-800 w-full flex items-center rounded-2xl">
                        <Link className="active w-full py-2 flex flex-col items-center text-white" to="/moduloVendedores"><i className="fas fa-user-tag fa-lg text-white text-3xl"></i>Vendedores</Link>
                    </div>
                </PrivateComponent>
                
                <div className="bg-purple-900 hover:bg-purple-800 w-full flex items-center rounded-2xl">
                    <Link className="active w-full py-2 flex flex-col items-center text-white" to="/moduloVentas"><i className="far fa-list-alt fa-lg text-white text-3xl"></i>Ventas</Link>
                </div>
                <div className="bg-pink-900 hover:bg-pink-800 w-full flex items-center rounded-2xl">
                    <Link className="active w-full py-2 flex flex-col items-center text-white" to="/productos"><i className="fas fa-tshirt far fa-lg text-white text-3xl"></i>Productos</Link> 
                </div>        
            </div>
        </>
        
  
    )
}

export default BotonesDashboard
