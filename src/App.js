
import PaginaVendedores from './pages/PaginaVendedores';
import './App.css';
import PaginaInfoDetalleVentas from './pages/PaginaInfoDetalleVentas';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Login from './modules/login/Login';



const App =()=> {
  return (
    <Router>
      <div className="template">
        <Route path="/moduloVendedores" component={PaginaVendedores} />
        <Route path="/moduloVentas/detalleVenta" component={PaginaInfoDetalleVentas} />
        <Route path="/login" component={Login} />
    </div> 
   </Router>
  );
}

export default App;


