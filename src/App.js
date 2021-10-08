
import './App.css';
import './index.css';
import { BrowserRouter as Router,Route ,Switch } from 'react-router-dom';
import {useEffect,useState} from "react";
import axios from 'axios';
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





const App =()=> {

  const [busqueda, setBusqueda] = useState('');
  const [cardsClientes,setCardsClientes] =useState([]);
  const [cardsProductosInformation,setCardsProductosInformation] =useState([]);
  const [cardsUsuarios,setCardsUsuarios] =useState([]);
  

  useEffect(() => {   
    const options = { method: 'GET', url: 'http://localhost:3001/clientes' };
    axios.request(options).then(function (response){
        setCardsClientes(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    },[cardsClientes]);

    useEffect(() => {
      const options = { method: 'GET', url: 'http://localhost:3001/productos' };
      axios.request(options).then(function (response){
          setCardsProductosInformation(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
      },[cardsProductosInformation]);

    useEffect(() => {
      const options = { method: 'GET', url: 'http://localhost:3001/usuarios' };
      axios.request(options).then(function (response){
          setCardsUsuarios(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
      },[cardsUsuarios]);



  useEffect(()=>{
      console.log(busqueda)
    },[busqueda])



  
  return (
    <div className="template">
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
                  <PaginaDetalleUsuarios/>
                </Route>
                <Route path='/rolesUsuarios'>
                  <PaginaRolesUsuario/>
                </Route>
                <Route path='/productos/actualizarProducto'>
                  <PaginaActualizarProducto/>
                </Route>
                <Route path='/productos/nuevoProducto'>
                  <PaginaNuevoProducto/>
                </Route>
                <Route path='/productos/detalleProducto/:id'>
                  <PaginaDetalleProducto cardsProductosInformation={cardsProductosInformation}/>
                </Route>
                <Route path='/productos/'>
                  <PaginaProductos cardsProductosInformation={cardsProductosInformation}/>
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
                <Route path='/moduloVendedores/detalleUsuario/:id'>
                  <PaginaDetalleUsuarios/>
                </Route>
                <Route path='/moduloVendedores'>
                  <PaginaVendedores cardsUsuarios={cardsUsuarios}/>
                </Route>
                <Route path='/moduloClientes/detalleCliente/:id'>
                  <PaginaDetalleClientes cardsClientes={cardsClientes}/>
                </Route>
                <Route path='/moduloClientes/paginaEditarCliente/:id'>
                  <PaginaEditarCliente cardsClientes={cardsClientes}/>
                </Route>
                <Route path='/moduloClientes/nuevoCliente'>
                  <PaginaNuevoCliente/>
                </Route>
                <Route path='/moduloClientes'>
                  <PaginaClientes cardsClientes={cardsClientes}/>
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


