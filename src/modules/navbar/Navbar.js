import './Navbar.css';
import { useLocation } from 'react-router-dom';
import { useEffect , useState} from 'react';

const Navbar=()=>{
  const [render,setRender]=useState({});
  const location =useLocation()
  
  useEffect(() => {
      if (location.pathname==="/productos"){
        setRender({placeholder:"Buscar por nombre producto o ID",hidden:"",justify:"justify-between"})
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
      if (location.pathname==="/moduloVentas"){
        setRender({placeholder:"Buscar por ID de la venta",hidden:"",justify:"justify-between"})
      }
      if (location.pathname==="/moduloVendedores"){
        setRender({placeholder:"Buscar por nombre vendedor o ID",hidden:"",justify:"justify-between"})
      }
      if (location.pathname.includes("/moduloClientes/paginaEditarCliente/")){
        setRender({placeholder:"",hidden:"hidden",justify:"justify-end"})
      }
    }, [location]);


  return (
    <header className=" ">
      <div className="ml-80 mr-8">
      <div className ={`w-full h-20 flex  ${render.justify} max-w-7xl mx-auto items-center`}>
        <div className= {` bg-white border border-gray-500 rounded-xl ${render.hidden} `} >
            <i className="fas fa-search text-gray-500 pl-4 mr-3"></i>
            <input  className= "outline-none w-96 h-9 rounded-xl" type="text" placeholder={render.placeholder} title="Type in a category"/>
        </div>
        <div className="flex items-center text-white">
            <div className="flex flex-col  mr-5 items-end">
                <span className="font-bold">ID 2345</span>
                <span clase="nameUser">Juan Pérez Pérez</span>
            </div>
            <i className="fas fa-user-circle fa-3x  "></i>
        </div>
    </div>
    </div>
    </header>

  )
}

export default Navbar;