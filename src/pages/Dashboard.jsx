import React from 'react'
import { Link } from 'react-router-dom';
import PrivateComponent from '../components/PrivateComponent';
  

const Dashboard = () => {

  
    return (
    <>
        <div className= "flex justify-between space-x-5 mt-6 h-28 mb-9">
                <div className="dashButtons dashBut1 w-full flex items-center">
                    <Link className="active w-full py-2 flex flex-col items-center text-white" to="/nuevaVenta"><i className="fas fa-plus-circle fa-lg text-white text-3xl"></i>Nueva venta</Link>  
                </div>
                <div className="dashButtons dashBut2 w-full flex items-center">
                    <Link className="active w-full py-2 flex flex-col items-center text-white" to="/moduloClientes"><i className="fas fa-users fa-lg text-white text-3xl"></i>Clientes</Link> 
                </div>
                <PrivateComponent roleList={['Administrador']}>
                    <div className="dashButtons dashBut3 w-full flex items-center">
                        <Link className="active w-full py-2 flex flex-col items-center text-white" to="/moduloVendedores"><i className="fas fa-user-tag fa-lg text-white text-3xl"></i>Vendedores</Link>
                    </div>
                </PrivateComponent>
                
                <div className="dashButtons dashBut4 w-full flex items-center">
                    <Link className="active w-full py-2 flex flex-col items-center text-white" to="/moduloVentas"><i className="far fa-list-alt fa-lg text-white text-3xl"></i>Ventas</Link>
                </div>
                <div className="dashButtons dashBut5 w-full flex items-center">
                    <Link className="active w-full py-2 flex flex-col items-center text-white" to="/productos"><i className="fas fa-tshirt far fa-lg text-white text-3xl"></i>Productos</Link> 
                </div>        
            </div>
    </>
        
    );
}

export default Dashboard
