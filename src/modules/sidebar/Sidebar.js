
import logoSporty from '../../media/logoSporty.png';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Siderbar =()=>{

    return(
    <div className=" flex h-full fixed w-72 flex-col bg-gray-900">
        <div className="justify-center flex ">
            <img className="w-4/5 mt-4" src={logoSporty} alt="logo Sporty"/>
        </div>
        <div className="h-full mt-24 text-base justify-between flex flex-col">
            <div>
                <ul className="flex flex-col">
                <Link className="active  hover:bg-gray-500 w-full py-2 text-gray-300" to="/productos"><i className="fas fa-home far fa-lg text-gray-300 ml-5 w-9 "></i>Dashboard</Link> 
                    <Link className="active  hover:bg-gray-500 w-full py-2 text-gray-300" to="/nuevaVenta"><i className="fas fa-plus-circle fa-lg text-gray-300 ml-5 w-9  "></i>Nueva venta</Link>  
                    <Link className="active  hover:bg-gray-500 w-full py-2 text-gray-300" to="/moduloClientes"><i className="fas fa-users fa-lg  text-gray-300 ml-5 w-9 "></i>Clientes</Link> 
                    <Link className="active  hover:bg-gray-500 w-full py-2 text-gray-300" to="/moduloVendedores"><i className="fas fa-user-tag  fa-lg text-gray-300 w-9  ml-5"></i>Vendedores</Link>
                    <Link className="active  hover:bg-gray-500 w-full py-2 text-gray-300" to="/moduloVentas"><i className="far fa-list-alt fa-lg text-gray-300 ml-5 w-9 "></i>Ventas</Link>
                    <Link className="active  hover:bg-gray-500 w-full py-2 text-gray-300" to="/productos"><i className="fas fa-tshirt far fa-lg text-gray-300 ml-5 w-9 "></i>Productos</Link> 
                </ul>
            </div>
            <div className=" mb-10">   
                <ul className="flex flex-col">
                    <Link className="active hover:bg-gray-500 w-full py-2 text-gray-300" to="/rolesUsuarios"><i className="fas fa-users-cog fa-lg text-gray-300 ml-5 w-9 "></i>Administrar Usuarios</Link>
                    <Link className="active hover:bg-gray-500 w-full py-2 text-gray-300" to="/"><i className="fas fa-sign-out-alt fa-lg text-gray-300 ml-5 w-9 "></i>Cerrar Sesión</Link>
                </ul>
            </div>
        </div>
    </div>
    )
  }

  export default Siderbar;