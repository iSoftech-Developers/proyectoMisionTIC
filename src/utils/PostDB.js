import {toast} from 'react-toastify';
import axios from 'axios';


const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
  };

const PostDB = async (cambios, urlPost) => {
    const options = {
        
        method: 'POST',
        url: urlPost,
        headers: {'Content-Type': 'application/json',
        Authorization: getToken()},
        data: cambios,

};
    await axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
        toast.success('Agregado con éxito');
    })
    .catch(function (error) {
        console.error(error);
        toast.error('Error');
    });
}

export default PostDB
