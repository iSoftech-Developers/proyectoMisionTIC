import './Navbar.css';

const Navbar=()=>{

  return (
    <header className="ml-72">
    
      <div className ="w-full h-20 flex  justify-between max-w-7xl mx-auto items-center">
        <div className="bg-white border border-gray-500 rounded-xl ml-8">
            <i className="fas fa-search text-gray-500 pl-4 mr-3"></i>
            <input className=" outline-none w-96 h-9 rounded-xl " type="text" placeholder="Buscar usuario por ID o nombre" title="Type in a category"/>
        </div>
        <div className="flex items-center text-white">
            <div className="flex flex-col  mr-5 items-end">
                <span className="font-bold">ID 2345</span>
                <span clase="nameUser">Juan Pérez Pérez</span>
            </div>
            <i className="fas fa-user-circle fa-3x mr-8 "></i>
        </div>
    </div>
    </header>

  )
}

export default Navbar;