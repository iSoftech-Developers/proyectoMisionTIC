import './Login.css';
import { Link } from 'react-router-dom';

const Login=()=>{

    return(
        <>

    <form className="container-login">
        <div className="logo">SPORTY </div>
        <div className="sales">SALES MANAGER </div>
        <div>
            <div className="textfield-login loginText-login"  >
                <i className="fas fa-user"></i>
                <input className= "text-login" type="text" name="pass" placeholder="ID de usuario" required/>
            </div>
        </div>
        <div>
            <div className="textfield-login passText-login">
                <i className="fas fa-lock"></i>
                <input className= "text-login" type="password" name="pass" placeholder="Contraseña" required/>
            </div>
        </div>
        <div className="link-button">
            <Link className="active loginButton-login"  to="/moduloVendedores">LOGIN</Link>
            <input className="loginButton" type="submit" value="LOGIN"/>
        </div>
    </form>



        </>
    );
}

export default Login;

