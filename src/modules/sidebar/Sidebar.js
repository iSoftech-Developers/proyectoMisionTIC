
import logoSporty from '../../media/logoSporty.png';
import './Sidebar.css';
import { Link } from 'react-router-dom';

import UseActiveRoute from '../../hooks/UseActiveRoute';

const Siderbar =()=>{

  
    



    return(
    <div className=" flex h-full fixed w-72 flex-col bg-gray-900">
        <div className="justify-center flex ">
            <img className="w-4/5 mt-4" src={logoSporty} alt="logo Sporty"/>
        </div>
        <div className="h-full mt-24 text-base justify-between flex flex-col">
            <div>
                <ul className="flex flex-col">
                    <Ruta  ruta="/dashboard" icono="fas fa-home far"title="Dashboard" /> 
                    <Ruta  ruta="/nuevaVenta" icono="fas fa-plus-circle "title="Nueva venta"/>  
                    <Ruta  ruta="/moduloClientes" icono="fas fa-users"title="Clientes" /> 
                    <Ruta  ruta="/moduloVendedores" icono="fas fa-user-tag  "title="Vendedores"/>
                    <Ruta  ruta="/moduloVentas" icono="far fa-list-alt"title="Ventas"/>
                    <Ruta  ruta="/productos" icono="fas fa-tshirt far"title="Productos"/> 
                </ul>
            </div>
            <div className=" mb-10">   
                <ul className="flex flex-col">
                    <Ruta ruta="/rolesUsuarios"icono="fas fa-users-cog"title="Administrar Usuarios"/>
                    <Ruta ruta="/login" icono="fas fa-sign-out-alt"title="Cerrar Sesión"/>
                </ul>
            </div>
        </div>
    </div>
    )
  }


 const Ruta = ({ruta,icono,title})=>{
  const isActive = UseActiveRoute(ruta);

     return(
     <>
      <Link to={ruta} className={`hover:bg-gray-500 w-full font-bold py-2 text-gray-${isActive?'900':'300'} bg-gray-${isActive?'600':'900'}`}><i className={`${icono} fa-lg text-${isActive?'900':'300'} ml-5 w-9`}></i>{title}</Link>
      </>
     );

 }

  export default Siderbar;