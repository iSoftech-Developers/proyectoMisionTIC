import axios from 'axios';
const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

export const obtenerDB = async (setConsulta, setEjecutarConsulta,ruta) => {
  const options = { 
  method: 'GET',
  url: ruta ,
  headers: {
    Authorization: getToken(), //enviar token a back-end
  },
};
  await axios
    .request(options)
    .then(function (response) {
      setConsulta(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
};


export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  
  const options = {
    method: 'GET',
    url: `${BASE_URL}/usuarios/self`,
    headers: {
      Authorization: getToken()
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};