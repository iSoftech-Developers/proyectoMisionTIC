import './Login.css';
import { Link } from 'react-router-dom';

const Login=()=>{

    return(
        

    <form className=" container-login w-full h-full flex flex-col justify-center items-center text-white ">
        <div className="logo text-7xl">SPORTY </div>
        <div className="text-2xl mb-9">SALES MANAGER </div>
        <div>
            <div className=" bg-white border-solid border-1 p-1 mt-14">
                <i className="fas fa-user text-gray-400 pl-4 "></i>
                <input className= "w-96 h-14 pl-5 text-base text-gray-400 outline-none border-0 " type="text" name="pass" placeholder="ID de usuario" required/>
            </div>
        </div>
        <div >
            <div className="  bg-white border-solid border-1 p-1  mt-7 mb-20">
                <i className="fas fa-lock text-gray-400 pl-4"></i>
                <input className= "text-gray-400 w-96 h-14 pl-5 text-base text-grey-400 outline-none border-0" type="password" name="pass" placeholder="Contraseña" required/>
            </div>
        </div>
        <div className="link-button">
            <Link className=" loginButton-login w-44 h-12 text-white  bg-black py-3.5 px-16 font-bold text-base  "  to="/dashboard">LOGIN</Link>
        
        </div>
    </form>



        
    );
}

export default Login;

//<input className="loginButton" type="submit" value="LOGIN"/>