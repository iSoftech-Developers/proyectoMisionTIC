import img_avatar from '../../media/img_avatar.png';
import { Link } from 'react-router-dom';

const Gestorderoles = () => {
  return (
    <>
      <div className="w-1/4">
        <label for="userole"></label>
        <select required className="w-full h-10" name="roleoptions">
          <option value="Usuarios">Vendedor</option>
          <option value="Usuarios">Administrador</option>
        </select>
      </div>
      <Link to="/rolesUsuarios/detalleUsuario">
        <div className="flex justify-between w-full h-full mt-6">
        
            <div className="h-full w-full flex">
            
                <div className="w-1/6 h-80 mr-6 bg-white cursor-pointer transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-md  ">
                    <div className="justify-center flex">
                        <img src={img_avatar} alt="Avatar" className="w-30 h-48 mr-1 ml-1 mt-3" />
                    </div>
                    <div className="">
                        <div className="ml-3 font-black">
                            <h4>ID 0023455968</h4>
                        </div>
                        <div className="ml-3">
                            <p>Architect & Engineer </p>
                        </div>
                        <div className="bg-black">
                            <p className="text-white ml-2 " >Administrador</p>
                        </div>
                    </div>
                </div>
              
            </div>
           
            
        </div>
        </Link>
        
    </>
  );
};
export default Gestorderoles;