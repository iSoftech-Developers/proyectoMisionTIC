import './Navbar.css';
import { useLocation } from 'react-router-dom';
import { useEffect , useState} from 'react';
import { useBuscado } from '../../context/BuscadorContext';
import { useUsuario } from '../../context/UsuarioConectado';

const Navbar=()=>{
  
  const {setBusqueda}=useBuscado()
  const {usuario}=useUsuario()
  const [render,setRender]=useState({});
  const location =useLocation()
  console.log(usuario)
  useEffect(() => {
      if (location.pathname==="/rolesUsuarios"){
        setRender({placeholder:"Buscar por nombre usuario o ID",hidden:"",justify:"justify-between"})
      }
      if (location.pathname.includes("/rolesUsuarios/")){
        setRender({placeholder:"",hidden:"hidden",justify:"justify-end"})
      }
      if (location.pathname==="/productos"){
        setRender({placeholder:"Buscar por nombre producto o ID",hidden:"",justify:"justify-between"})
      }
      if (location.pathname.includes("/productos/")){
        setRender({placeholder:"",hidden:"hidden",justify:"justify-end"})
      
      }
      if (location.pathname==="/nuevaVenta"){
        setRender({placeholder:"",hidden:"hidden",justify:"justify-end"})
      }
      if (location.pathname==="/dashboard"){
        setRender({placeholder:"",hidden:"hidden",justify:"justify-end"})
      }
      if (location.pathname==="/moduloClientes"){
        setRender({placeholder:"Buscar por nombre Cliente o ID",hidden:"",justify:"justify-between"})
      }
      if (location.pathname.includes("/moduloClientes/")){
        setRender({placeholder:"",hidden:"hidden",justify:"justify-end"})
      }
      if (location.pathname==="/moduloVentas"){
        setRender({placeholder:"Buscar por ID de la venta",hidden:"",justify:"justify-between"})
      }
      if (location.pathname.includes("/moduloVentas/")){
        setRender({placeholder:"",hidden:"hidden",justify:"justify-end"})
      }
      if (location.pathname==="/moduloVendedores"){
        setRender({placeholder:"Buscar por nombre vendedor o ID",hidden:"",justify:"justify-between"})
      }
      if (location.pathname.includes("/moduloVendedores/")){
        setRender({placeholder:"",hidden:"hidden",justify:"justify-end"})
      }
    }, [location]);


  return (
    <header className=" ">
      <div className="ml-80 mr-8">
      <div className ={`w-full h-20 flex  ${render.justify} max-w-7xl mx-auto items-center`}>
        <div className= {` bg-white border border-gray-500 rounded-xl ${render.hidden} `} >
            <i className="fas fa-search text-gray-500 pl-4 mr-3"></i>
            <input onChange={(e) => setBusqueda(e.target.value)}  className= "outline-none w-96 h-9 rounded-xl" type="text" placeholder={render.placeholder} title="Type in a category"/>
        </div>
        <div className="flex items-center text-white">
            <div className="flex flex-col  mr-5 items-end">
                <span className="font-bold">ID  {usuario.field2}</span>
                <span clase="nameUser">{usuario.field1}</span>
            </div>
            <img src={usuario.field8} className=" flex justify-center  rounded-full h-16"/>
        </div>
    </div>
    </div>
    </header>

  )
}

export default Navbar;