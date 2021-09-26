
import logoSporty from '../../media/logoSporty.png';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Siderbar =()=>{

    return(
    <div className="sidebar fixed">
        <div className="logo-container">
            <img className="logo_sporty" src={logoSporty} alt="logo Sporty"/>
        </div>
        <div className="sidebar-options">
            <div className="sidebar-upper-section" >
                <ul className="sidebar-upper-text">
                    <Link className="active sidebar-li sidebar-link" to="/nuevaVenta"><i className="fas fa-plus-circle fa-lg  sidebar-icon"></i>Nueva venta</Link>  
                    <Link className="active sidebar-li sidebar-link" to="/moduloClientes"><i className="fas fa-users fa-lg  sidebar-icon"></i>Clientes</Link> 
                    <Link className="active sidebar-li sidebar-link" to="/moduloVendedores"><i className="fas fa-user-tag  fa-lg sidebar-icon"></i>Vendedores</Link>
                    <Link className="active sidebar-li sidebar-link" to="/moduloVentas"><i className="far fa-list-alt fa-lg sidebar-icon"></i>Ventas</Link> 
                </ul>
            </div>
            <div className="sidebar-lower-section">   
                <ul className="sidebar-lower-text">
                    <Link className="active sidebar-li sidebar-link" to="/moduloVentas"><i className="fas fa-users-cog fa-lg sidebar-icon"></i>Administrar Usuarios</Link>
                    <Link className="active sidebar-li sidebar-link" to="/"><i className="fas fa-sign-out-alt fa-lg sidebar-icon"></i>Cerrar Sesión</Link>
                </ul>
            </div>
        </div>
    </div>
    )
  }

  export default Siderbar;