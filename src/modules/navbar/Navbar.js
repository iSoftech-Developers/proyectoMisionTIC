import './Navbar.css';

const Navbar=()=>{

  return (
    <header>
    
      <div className ="navbar-container">
        <div className="textfield searchText">
            <i className="fas fa-search"></i>
            <input type="text" id="searchbar" placeholder="Buscar usuario por ID o nombre" title="Type in a category"/>
        </div>
        <div className="user_bar">
            <div className="text-over-text infoUser">
                <span className="bolder">ID 2345</span>
                <span clase="nameUser">Juan Pérez Pérez</span>
            </div>
            <i className="fas fa-user-circle fa-3x"></i>
        </div>
    </div>
    </header>

  )
}

export default Navbar;