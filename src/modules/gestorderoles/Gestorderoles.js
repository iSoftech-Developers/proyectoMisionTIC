import img_avatar from '../../media/img_avatar.png';
import { Link } from 'react-router-dom';

const Gestorderoles = () => {
  return (
    <>
      <div className="w-1/4">
        <label for="userole"></label>
        <select required class=" w-full h-8" name="roleoptions">
          <option value="Usuarios">Vendedor</option>
          <option value="Usuarios">Administrador</option>
        </select>
      </div>
      <div className=" flex justify-between mt-32 w-80">
        <div className="card m-3 w-60 ml-3  bg-white rounded-lg cursor-pointer transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-md  ">
            <div className="content_imageuser flex w-20rem ">
                <img src={img_avatar} alt="Avatar" className="m-0.1 object-fill border rounded-md m-2 w-25 h-15" />
            </div>
            <div className="container " >
                <div className="container_Idusername ml-3 font-black">
                    <h4>ID 0023455968</h4>
                </div>
                <div className="container_username ml-3  ">
                    <p>Architect & Engineer </p>
                </div>
                <div className="container_rol ml-3 bg-black rounded-lg m-3 mr-21 ">
                    <p className="text_rol text-white ml-2 " >Administrador</p>
                </div>
            </div>
        </div>
        <div className="card m-3 w-60 ml-3  bg-white rounded-lg cursor-pointer transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg">
            <div className="content_imageuser flex w-20rem ">
                <img src={img_avatar} alt="Avatar" className="m-0.1 object-fill border rounded-md m-2 w-25 h-15" />
            </div>
            <div className="container static">
                <div className="container_Idusername ml-3 font-black">
                    <h4>ID 0023455968</h4>
                </div>
                <div className="container_username ml-3 ">
                    <p>Architect & Engineer</p>
                </div>
                <div className="container_rol ml-3 bg-black rounded-lg m-3 mr-21">
                    <p className="text_rol text-white ml-2 " >Administrador</p>
                </div>
            </div>
        </div>
       
        
        
        
      
    </div>
      
    </>
  );
};
export default Gestorderoles;