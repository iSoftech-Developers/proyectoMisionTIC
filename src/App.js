
import './App.css';
import './index.css';
import { BrowserRouter as Router,Route ,Switch } from 'react-router-dom';
import PaginaVendedores from './pages/vendedoresUsuarios/PaginaVendedores';
import PaginaInfoDetalleVentas from './pages/venta/PaginaInfoDetalleVentas';
import Login from './modules/login/Login';
import PaginaClientes from './pages/clientes/PaginaClientes';
import PaginaVentas from './pages/venta/PaginaVentas';
import PaginaNuevaVenta from './pages/venta/PaginaNuevaVenta';
import PaginaEditarUsuarios from './pages/vendedoresUsuarios/PaginaEditarUsuarios';
import PaginaDetalleUsuarios from './pages/vendedoresUsuarios/PaginaDetalleUsuarios';
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
import PaginaEditarCliente from './pages/clientes/PaginaEditarCliente';


/*linea 37 va a la pagina de modificar venta*/
/*linea 5 */
const App =()=> {
  return (
    <div className="template">
    <Router>
      <Switch>
        <Route path ={['/dashboard','/nuevaVenta','/moduloVentas','/moduloVentas/detalleVenta', '/moduloVentas/detalleVentas/','/moduloClientes', 'moduloClientes/nuevoCliente','/moduloClientes/detalleCliente',' /moduloClientes/paginaEditarCliente', '/productos', '/productos/detalleProducto', '/productos/nuevoProducto','/productos/actualizarProducto']}>
          <Private>
            <Switch>
              <Route path='/productos/actualizarProducto'>
                <PaginaActualizarProducto/>
              </Route>
              <Route path='/productos/nuevoProducto'>
                <PaginaNuevoProducto/>
              </Route>
              <Route path='/productos/detalleProducto'>
                <PaginaDetalleProducto/>
              </Route>
              <Route path='/productos'>
                <PaginaProductos/>
              </Route>
              <Route path='/moduloVentas/detalleVentas/'>
                <PaginaNuevaVenta/>
              </Route>
              <Route path='/moduloVentas/detalleVenta'>
                <PaginaInfoDetalleVentas/>
              </Route>
              <Route path='/moduloVentas'>
                <PaginaVentas/>
              </Route>
              <Route path='/moduloClientes/detalleCliente'>
                <PaginaDetalleClientes/>
              </Route>
              <Route path='/moduloClientes/paginaEditarCliente'>
                <PaginaEditarCliente/>
              </Route>
              <Route path='/moduloClientes/nuevoCliente'>
                <PaginaNuevoCliente/>
              </Route>
              <Route path='/moduloClientes'>
                <PaginaClientes/>
              </Route>
              <Route path='/nuevaVenta'>
                <PaginaNuevaVenta/>
              </Route>
              <Route path='/dashboard'>
                <Dashboard/>
              </Route>
            </Switch>
          </Private>
        </Route>
        <Route path={['/']}>
          <Login/>
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


