import axios from "axios";
import { toast } from "react-toastify";
const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};


const PatchDB = async(cambios,seleccionado,urlEdit)=>{
  
        const options = {
            method: 'PATCH',
            url:`${urlEdit}/${seleccionado._id}`,
            headers: { 'Content-Type': 'application/json',
            Authorization: getToken() },
            data: cambios
          };
          
          await axios
            .request(options)
            .then(function (response) {
              console.log(response.data);
              toast.success('Actualizado');
            })
            .catch(function (error) {
              console.error(error);
              toast.error('Error al actualizar');
            });
            
}

export default PatchDB;