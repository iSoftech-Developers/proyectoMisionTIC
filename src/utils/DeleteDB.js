import axios from 'axios'
import { toast } from "react-toastify";


const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};


      const DeleteDB = async ({i,variableCards}) => {
        
        
        const options = {
          method: 'DELETE',
          url: `${variableCards.route}/${i._id}/`,
          headers: { 'Content-Type': 'application/json',
          Authorization: getToken() },
        };
    
        await axios
          .request(options)
          .then(function (response) {
            console.log(response.data);
            toast.success('Eliminado con éxito');
          })
          .catch(function (error) {
            console.error(error);
            toast.error('Error al eliminar');
          });
      
        
      };

export default DeleteDB;      