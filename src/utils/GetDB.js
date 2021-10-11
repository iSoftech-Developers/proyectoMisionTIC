import axios from 'axios';

export const obtenerDB = async (setConsulta, setEjecutarConsulta,ruta) => {
  const options = { method: 'GET', url: ruta };
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