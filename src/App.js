
import './App.css';
import './index.css';
import { BrowserRouter as Router,Route ,Switch } from 'react-router-dom';
import PaginaVendedores from './pages/vendedoresUsuarios/PaginaVendedores';
import PaginaInfoDetalleVentas from './pages/venta/PaginaInfoDetalleVentas';
import Login from './modules/login/Login';
import PaginaClientes from './pages/clientes/PaginaClientes';
import PaginaVentas from './pages/venta/PaginaVentas';
import PaginaNuevaVenta from './pages/venta/PaginaNuevaVenta';
import PaginaDetalleUsuarios from './pages/vendedoresUsuarios/PaginaDetalleUsuarios';
import PaginaVistaPerfilUsuario from './pages/vendedoresUsuarios/PaginaVistaPerfilUsuario';
import PaginaProductos from './pages/productos/PaginaProductos';
import PaginaDetalleProducto from './pages/productos/PaginaDetalleProducto';
import PaginaNuevoCliente from './pages/clientes/PaginaNuevoCliente';
import PaginaNuevoProducto from './pages/productos/PaginaNuevoProducto'
import PaginaActulizarProducto from'./pages/productos/PaginaActualizarProducto'
import PaginaOk from './pages/PaginaOk';
import PaginaDetalleClientes from  './pages/clientes/PaginaDetalleClientes';


const App =()=> {
  return (
    <div className="template">
    <Router>
      <Switch>
        <Route path="/moduloVendedores" component={PaginaVendedores}/>
        <Route path="/moduloVentas" component={PaginaVentas}/>
        <Route path="/nuevaVenta" component={PaginaNuevaVenta}/>
        <Route path="/detalleVenta" component={PaginaInfoDetalleVentas}/>
        <Route path="/agregarUsuarios" component={PaginaDetalleUsuarios}/> 
        <Route path="/perfilUsuario" component={PaginaVistaPerfilUsuario}/>
        <Route path="/nuevoCliente" component={PaginaNuevoCliente}/>
        <Route path="/moduloClientes" component={PaginaClientes}/> 
        <Route path="/detalleCliente" component={PaginaDetalleClientes}/>
        <Route path="/productos" component={PaginaProductos}/>
        <Route path="/detalleProducto" component={PaginaDetalleProducto}/>
        <Route path="/nuevoProducto" component={PaginaNuevoProducto}/>
        <Route path="/actualizarProducto" component={PaginaActulizarProducto}/>
        <Route path="/ok" component={PaginaOk}/>
        <Route path="/" component={Login} />

      </Switch>
    </Router>
   </div> 
  );
}

export default App;


