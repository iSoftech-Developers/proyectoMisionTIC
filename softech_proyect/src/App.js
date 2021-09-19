import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div class="template">
     <div class="sidebar">
        <div class="logo-container">
            <img class="logo_sporty" src="./logoSporty.png" alt="logo Sporty"/>
        </div>
        <div class="sidebar_options">
            <div class="sidebar_upper_section" >
                <ul class="sidebar_upper_text">
                    <li><i class="fas fa-plus-circle fa-2x sidebar_icon"></i><a class="active" href="#new_sale">Nueva venta</a></li>
                    <li><i class="fas fa-users fa-2x sidebar_icon "></i><a class="active" href="#costumers">Clientes</a></li>
                    <li><i class="fas fa-user-tag fa-2x sidebar_icon"></i><a class="active" href="#sellers">Vendedores</a></li>
                    <li><i class="far fa-list-alt fa-2x sidebar_icon "></i><a class="active" href="#sales">Ventas</a></li>
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
    
    <main>
        <header class="navbar">
            <div class="textfield searchText">
                <i class="fas fa-search"></i>
                <input type="text" id="searchbar" placeholder="Buscar usuario por ID o nombre" title="Type in a category"/>
            </div>
            <div class="user_bar">
                <div class="infoUser">
                    <span class="idUser">ID 2345</span>
                    <span clase="nameUser">Juan Pérez Pérez</span>
                </div>
                <i class="fas fa-user-circle fa-3x"></i>
            </div>
            
        </header>
        <section class="contenido">
        <div className="App">
          <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
</div>

        </section>
    </main>
   </div> 
    
  );
}

export default App;


