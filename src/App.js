
import PaginaVendedores from './pages/PaginaVendedores';
import './App.css';
import PaginaInfoDetalleVentas from './pages/PaginaInfoDetalleVentas';
import { BrowserRouter as Router,Route ,Switch } from 'react-router-dom';
import Login from './modules/login/Login';
import PaginaDetalleUsuarios from './pages/PaginaDetalleUsuarios';



const App =()=> {
  return (
    <div className="template">
    <Router>
      <Switch>
        <Route path="/moduloVendedores" component={PaginaVendedores} />
        <Route path="/usuarios/infoUsuarios" component={PaginaDetalleUsuarios} />
        <Route path="/moduloVentas/detalleVenta" component={PaginaInfoDetalleVentas} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
   </div> 
  );
}

export default App;


