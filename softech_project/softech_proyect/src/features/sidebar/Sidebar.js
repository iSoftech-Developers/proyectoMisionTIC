
import logoSporty from './logoSporty.png';
const Siderbar =(props)=>{

    
    const handleClick=()=>{
        props.updaterContador(props.contadorValue+1);
    }

    
    return(
      <div class="sidebar">
      <div class="logo-container">
          <img class="logo_sporty" src={logoSporty} alt="logo Sporty"/>
      </div>
      <div class="sidebar_options">
          <div class="sidebar_upper_section" >
              <ul class="sidebar_upper_text">
                  <li><i class="fas fa-plus-circle fa-2x sidebar_icon"></i><a class="active" href="#new_sale">Nueva venta</a></li>
                  <li><i class="fas fa-users fa-2x sidebar_icon "></i><a class="active" href="#costumers">Clientes</a></li>
                  <li><i class="fas fa-user-tag fa-2x sidebar_icon"></i><a class="active" href="#sellers">Vendedores</a></li>
                  <li><i class="far fa-list-alt fa-2x sidebar_icon "></i><a class="active" href="#sales">Ventas</a></li>
                  <button onClick={handleClick}>clicker</button>
              </ul>
          </div>
          <div class="sidebar_lower_section"> 
              <ul class="sidebar_lower_text">
                  <li><i class="fas fa-users-cog fa-2x sidebar_icon"></i><a class="active" href="#users">Administrar Usuarios</a></li>
                  <li><i class="fas fa-sign-out-alt fa-2x sidebar_icon"></i><a class="active" href="#new_sale">Cerrar Sesión</a></li>
              </ul>
          </div>
      </div>
  </div> 
    )
  }

  export default Siderbar;