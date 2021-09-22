import './Login.css';
import { Link } from 'react-router-dom';

const Login=()=>{

    return(
        <>

    <div class="container-login">
        <div class="logo">SPORTY </div>
        <div class="sales">SALES MANAGER </div>
        <div>
            <div class="textfield-login loginText-login"  >
                <i class="fas fa-user"></i>
                <input class= "text-login" type="text" name="pass" placeholder="ID de usuario"/>
            </div>
        </div>
        <div>
            <div class="textfield-login passText-login">
                <i class="fas fa-lock"></i>
                <input class= "text-login" type="password" name="pass" placeholder="Contraseña"/>
            </div>
        </div>
        <div className="link-button">
            <Link className="active" class="loginButton-login" to="/moduloVendedores">LOGIN</Link>
        </div>
    </div>



        </>
    );
}

export default Login;

//<input class="loginButton" type="submit" value="LOGIN"/>