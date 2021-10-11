import {toast} from 'react-toastify';
import axios from 'axios';

const PostDB = async (cambios, urlPost) => {
    const options = {
            
        method: 'POST',
        url: urlPost,
        headers: {'Content-Type': 'application/json'},
        data: cambios,

      };
      await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Cliente agregado con éxito');
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error creando un Cliente');
      });
}

export default PostDB
