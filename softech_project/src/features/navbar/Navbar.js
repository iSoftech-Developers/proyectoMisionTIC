

const Navbar=(props)=>{
  const isEven= props.contadorValue % 2 === 0;
  const mensaje= isEven ? "es par : " + props.contadorValue : "es impar : "+ props.contadorValue;
 

  return (
    <header class="navbar">
    <div class="textfield searchText">
        <i class="fas fa-search"></i>
        <input type="text" id="searchbar" placeholder= {mensaje} title="Type in a category"/>
    </div>
    <div class="user_bar">
        <div class="infoUser">
            <span class="idUser">ID 2345</span>
            <span clase="nameUser">Juan Pérez Pérez</span>
        </div>
        <i class="fas fa-user-circle fa-3x"></i>
    </div>
    
</header>

  )
}

export default Navbar;