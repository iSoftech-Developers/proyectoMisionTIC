import axios from 'axios'
import { toast } from "react-toastify";

      const DeleteDB = async ({seleccionado,variableCards}) => {
        console.log(seleccionado);
        const options = {
          method: 'DELETE',
          url: `${variableCards.route}/${seleccionado._id}/`,
          headers: { 'Content-Type': 'application/json' },
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