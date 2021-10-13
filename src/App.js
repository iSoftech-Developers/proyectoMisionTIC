
import './App.css';
import './index.css';
import { BrowserRouter as Router,Route ,Switch } from 'react-router-dom';
import {useState} from "react";
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
import PaginaDetalleClientes from  './pages/clientes/PaginaDetalleClientes';
import PaginaRolesUsuario from './pages/vendedoresUsuarios/PaginaRolesUsuario';
import Private from './layouts/Private';
import Dashboard from './pages/Dashboard';
import PaginaEditarCliente from './pages/clientes/PaginaEditarCliente';
import PaginaAgregarUsuarios from './pages/vendedoresUsuarios/PaginaAgregarUsuarios';
import PaginaEditarVenta from './pages/venta/PaginaEditarVenta';
import {BuscadorContext} from './context/BuscadorContext'
import {SeleccionadoContext} from './context/Seleccionado';
import { Auth0Provider } from "@auth0/auth0-react";




const App =()=> {

  const [busqueda, setBusqueda] = useState('');
  const [seleccionado,setSeleccionado] = useState('');
 
  
  return (
    <Auth0Provider
    domain="proyectosoftech.us.auth0.com"
    clientId="0tByyzPYxpCCECVj0FpUvrMzpjWyJN1m"
    redirectUri="http://localhost:3000/dashboard"
  
  >
    <div className="template">
    <SeleccionadoContext.Provider value={{seleccionado, setSeleccionado}}>
    <BuscadorContext.Provider value={{busqueda, setBusqueda}}>
      <Router>
        <Switch>
          <Route path ={['/dashboard','/nuevaVenta','/moduloVentas','/moduloVentas/detalleVenta', '/moduloVentas/editarVenta','/moduloClientes', 'moduloClientes/nuevoCliente','/moduloClientes/detalleCliente',' /moduloClientes/paginaEditarCliente', '/productos', '/productos/detalleProducto', '/productos/nuevoProducto','/productos/actualizarProducto','/rolesUsuarios', '/rolesUsuarios/detalleUsuario','/rolesUsuarios/nuevoUsuario','/moduloVendedores', '/moduloVendedores/detalleUsuario','/moduloVendedores/paginaEditarUsuarios','/rolesUsuarios/detalleUsuarios']}> 
            <Private>
              <Switch>
                <Route path='/rolesUsuarios/nuevoUsuario'>
                  <PaginaAgregarUsuarios/>
                </Route>
                <Route path='/rolesUsuarios/detalleUsuarios/:id'>
                  <PaginaDetalleUsuarios />
                </Route>
                <Route path='/rolesUsuarios'>
                  <PaginaRolesUsuario/>
                </Route>
                <Route path='/productos/actualizarProducto/:id'>
                  <PaginaActualizarProducto />
                </Route>
                <Route path='/productos/nuevoProducto'>
                  <PaginaNuevoProducto/>
                </Route>
                <Route path='/productos/detalleProducto/:id'>
                  <PaginaDetalleProducto />
                </Route>
                <Route path='/productos/'>
                  <PaginaProductos />
                </Route>
                <Route path='/moduloVentas/editarVenta'>
                  <PaginaEditarVenta/>
                </Route>
                <Route path='/moduloVentas/detalleVenta/:id'>
                  <PaginaInfoDetalleVentas/>
                </Route>
                <Route path='/moduloVentas'>
                  <PaginaVentas/>
                </Route>
                <Route path='/moduloVendedores/paginaEditarUsuarios'>
                  <PaginaEditarUsuarios/>
                </Route>
                <Route path='/moduloVendedores'>
                  <PaginaVendedores />
                </Route>
                <Route path='/moduloClientes/detalleCliente/:id'>
                  <PaginaDetalleClientes />
                </Route>
                <Route path='/moduloClientes/paginaEditarCliente/:id'>
                  <PaginaEditarCliente />
                </Route>
                <Route path='/moduloClientes/nuevoCliente'>
                  <PaginaNuevoCliente/>
                </Route>
                <Route path='/moduloClientes'>
                  <PaginaClientes />
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
    </BuscadorContext.Provider>
    </SeleccionadoContext.Provider>
    </div> 
    </Auth0Provider>
  );
}

export default App;