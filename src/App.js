
import './App.css';
import './index.css';
import { BrowserRouter as Router,Route ,Switch } from 'react-router-dom';
import PaginaVendedores from './pages/vendedoresUsuarios/PaginaVendedores';
import PaginaInfoDetalleVentas from './pages/venta/PaginaInfoDetalleVentas';
import Login from './modules/login/Login';
import PaginaClientes from './pages/clientes/PaginaClientes';
import PaginaVentas from './pages/venta/PaginaVentas';
import PaginaNuevaVenta from './pages/venta/PaginaNuevaVenta';
import PaginaAgregarUsuarios from './pages/vendedoresUsuarios/PaginaDetalleUsuarios';
import PaginaVistaPerfilUsuario from './pages/vendedoresUsuarios/PaginaVistaPerfilUsuario';
import PaginaEditarUsuarios from './pages/vendedoresUsuarios/PaginaEditarUsuarios';
import PaginaProductos from './pages/productos/PaginaProductos';
import PaginaDetalleProducto from './pages/productos/PaginaDetalleProducto';
import PaginaNuevoCliente from './pages/clientes/PaginaNuevoCliente';
import PaginaNuevoProducto from './pages/productos/PaginaNuevoProducto'
import PaginaActualizarProducto from'./pages/productos/PaginaActualizarProducto'
import PaginaOk from './pages/PaginaOk';
import PaginaDetalleClientes from  './pages/clientes/PaginaDetalleClientes';
import PaginaRolesUsuario from './pages/vendedoresUsuarios/PaginaRolesUsuario';
import PaginaEstadoVenta from './pages/venta/PaginaEstadoVenta';
import PaginaClientesCris from './pages/clientes/PaginaClientesCris';
import Private from './layouts/Private';
import Dashboard from './pages/Dashboard';


const App =()=> {
  return (
    <div className="template">
    <Router>
      <Switch>
        <Route path ={['/dashboard']}>
          <Private>
            <Switch>
              <Route path='/dashboard'>
                <Dashboard/>
              </Route>
            </Switch>
          </Private>
        </Route>
      </Switch>
    </Router>
    </div> 
  );
}

export default App;


          /*  <Route path="/moduloVendedores" component={PaginaVendedores}/>
              <Route path="/moduloVentas" component={PaginaVentas}/>
              <Route path="/nuevaVenta" component={PaginaNuevaVenta}/>
              <Route path="/estadoVenta" component={PaginaEstadoVenta}/>
              <Route path="/detalleVenta" component={PaginaInfoDetalleVentas}/>
              <Route path="/agregarUsuarios" component={PaginaAgregarUsuarios}/> 
              <Route path="/perfilUsuario" component={PaginaVistaPerfilUsuario}/>
              <Route path="/editarUsuario" component={PaginaEditarUsuarios}/>
              <Route path="/nuevoCliente" component={PaginaNuevoCliente}/>
              <Route path="/moduloClientes" component={PaginaClientes}/> 
              <Route path="/detalleCliente" component={PaginaDetalleClientes}/>
              <Route path="/productos" component={PaginaProductos}/>
              <Route path="/detalleProducto" component={PaginaDetalleProducto}/>
              <Route path="/nuevoProducto" component={PaginaNuevoProducto}/>
              <Route path="/actualizarProducto" component={PaginaActualizarProducto}/>
              <Route path="/rolesUsuarios" component={PaginaRolesUsuario}/>
              <Route path="/crearClienteCris" component={PaginaClientesCris}/>   
              <Route path="/ok" component={PaginaOk}/>
              <Route path="/" component={Login} />
          </Switch>*/


