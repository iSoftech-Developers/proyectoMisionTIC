
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
                    <li className="sidebar-li"><i className="fas fa-plus-circle fa-2x sidebar_icon"></i><Link className="active" to="/nuevaVenta">Nueva venta</Link></li>
                    <li className="sidebar-li"><i className="fas fa-users fa-2x sidebar_icon "></i><Link className="active" to="/moduloClientes">Clientes</Link></li>
                    <li className="sidebar-li"><i className="fas fa-user-tag fa-2x sidebar_icon"></i><Link className="active" to="/moduloVendedores">Vendedores</Link></li>
                    <li className="sidebar-li"><i className="far fa-list-alt fa-2x sidebar_icon "></i><Link className="active" to="/moduloVentas">Ventas</Link></li>
                </ul>
            </div>
            <div className="sidebar_lower_section">   
                <ul className="sidebar_lower_text">
                    <li className="sidebar-li" ><i className="fas fa-users-cog fa-2x sidebar_icon"></i><Link className="active" to="#users">Administrar Usuarios</Link></li>
                    <li className="sidebar-li"><i className="fas fa-sign-out-alt fa-2x sidebar_icon"></i><Link className="active" to="#new_sale">Cerrar Sesión</Link></li>
                </ul>
            </div>
        </div>
    </div>
    )
  }

  export default Siderbar;