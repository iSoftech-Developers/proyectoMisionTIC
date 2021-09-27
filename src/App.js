
import PaginaVendedores from './pages/PaginaVendedores';
import './App.css';
import './index.css';
import PaginaInfoDetalleVentas from './pages/PaginaInfoDetalleVentas';
import { BrowserRouter as Router,Route ,Switch } from 'react-router-dom';
import Login from './modules/login/Login';
import PaginaClientes from './pages/PaginaClientes';
import PaginaVentas from './pages/PaginaVentas';
import PaginaNuevaVenta from './pages/PaginaNuevaVenta';
import PaginaDetalleUsuarios from './pages/PaginaDetalleUsuarios';
import PaginaVistaPerfilUsuario from './pages/PaginaVistaPerfilUsuario';
import PaginaProductos from './pages/PaginaProductos';
<<<<<<< HEAD
=======
import PaginaDetalleProducto from './pages/PaginaDetalleProducto';
>>>>>>> edbb6b30ec31bc4ee6715a183efc10dd34f32c2b



const App =()=> {
  return (
    <div className="template">
    <Router>
      <Switch>
        <Route path="/moduloVendedores" component={PaginaVendedores} />
        <Route path="/moduloVentas" component={PaginaVentas} />
        <Route path="/nuevaVenta" component={PaginaNuevaVenta} />
        <Route path="/detalleVenta" component={PaginaInfoDetalleVentas}/>
<<<<<<< HEAD
        <Route path="/moduloClientes/" component={PaginaClientes}/> 
        <Route path="/detalleUsuarios" component={PaginaDetalleUsuarios}/> 
        <Route path="/perfilUsuarios" component={PaginaVistaPerfilUsuario}/>
        <Route path="/listadoProductos" component={PaginaProductos}/>
=======
        <Route path="/moduloClientes" component={PaginaClientes}/> 
        <Route path="/agregarUsuarios" component={PaginaDetalleUsuarios}/> 
        <Route path="/perfilUsuario" component={PaginaVistaPerfilUsuario}/>
        <Route path="/paginaProductos" component={PaginaProductos}/>
        <Route path="/paginaDetalleProducto" component={PaginaDetalleProducto}/>  
>>>>>>> edbb6b30ec31bc4ee6715a183efc10dd34f32c2b
        <Route path="/" component={Login} />

      </Switch>
    </Router>
   </div> 
  );
}

export default App;


