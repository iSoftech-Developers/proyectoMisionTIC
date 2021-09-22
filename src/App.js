
import PaginaVendedores from './pages/PaginaVendedores';
import './App.css';
import PaginaInfoDetalleVentas from './pages/PaginaInfoDetalleVentas';
import { BrowserRouter as Router,Route ,Switch } from 'react-router-dom';
import Login from './modules/login/Login';
import PaginaClientes from './pages/PaginaClientes';
import PaginaVentas from './pages/PaginaVentas';



const App =()=> {
  return (
    <div className="template">
    <Router>
      <Switch>
      
        <Route path="/moduloVendedores" component={PaginaVendedores} />
        <Route path="/moduloVentas" component={PaginaVentas} />
        <Route path="/detalleVenta" component={PaginaInfoDetalleVentas} />
        <Route path="/moduloClientes/" component={PaginaClientes} /> 
        <Route path="/" component={Login} />

      </Switch>
    </Router>
   </div> 
  );
}

export default App;


