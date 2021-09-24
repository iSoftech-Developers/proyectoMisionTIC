
import logoSporty from '../../media/logoSporty.png';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Siderbar =()=>{

    return(
    <div className="sidebar">
        <div className="logo-container">
            <img className="logo_sporty" src={logoSporty} alt="logo Sporty"/>
        </div>
        <div className="sidebar_options">
            <div className="sidebar_upper_section" >
                <ul className="sidebar_upper_text">
                    <Link className="active sidebar-li sidebar-link" to="/nuevaVenta"><i className="fas fa-plus-circle fa-2x sidebar_icon"></i>Nueva venta</Link>  
                    <Link className="active sidebar-li sidebar-link" to="/moduloClientes"><i className="fas fa-users fa-2x sidebar_icon"></i>Clientes</Link> 
                    <Link className="active sidebar-li sidebar-link" to="/moduloVendedores"><i className="fas fa-user-tag fa-2x sidebar_icon"></i>Vendedores</Link>
                    <Link className="active sidebar-li sidebar-link" to="/moduloVentas"><i className="far fa-list-alt fa-2x sidebar_icon"></i>Ventas</Link> 
                </ul>
            </div>
            <div className="sidebar_lower_section">   
                <ul className="sidebar_lower_text">
                    <Link className="active sidebar-li sidebar-link" to="/moduloVentas"><i className="fas fa-users-cog fa-2x sidebar_icon"></i>Administrar Usuarios</Link>
                    <Link className="active sidebar-li sidebar-link" to="/"><i className="fas fa-sign-out-alt fa-2x sidebar_icon"></i>Cerrar Sesión</Link>
                </ul>
            </div>
        </div>
    </div>
    )
  }

  export default Siderbar;