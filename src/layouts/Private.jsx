import Navbar from '../modules/navbar/Navbar';
import Sidebar from '../modules/sidebar/Sidebar';
import {useEffect,useState} from 'react';
import { obtenerDatosUsuario } from '../utils/GetDB'
import { useAuth0 } from '@auth0/auth0-react';
import { useUsuario } from '../context/UsuarioConectado';
import ReactLoading from 'react-loading';

const Private = ({children}) => {
    const BASE_URL2 = process.env.REACT_APP_BASE_URL2;
    const { isAuthenticated, isLoading, getAccessTokenSilently,loginWithRedirect,logout  } = useAuth0();
    const {setUsuario}=useUsuario()
    const [loadingUserInformation, setLoadingUserInformation] = useState(false);

    useEffect(() => {
        
            var fetchAuth0Token = async ()=> {
            //1. pedir token a auth0
            const accessToken=  await getAccessTokenSilently({
                audience: 'api-proyecto-softech', });
            // recibir token de auth0
            localStorage.setItem('token', accessToken);
            console.log("pedi el tokennn")
            //3. enviar token back-end
            await obtenerDatosUsuario(
            (response) => {
                setUsuario(response.data)
            },
            (err) => {
                console.log('err', err);
                setLoadingUserInformation(false);
                logout({ returnTo: BASE_URL2 });
                
            }
        );
            }
        if(isAuthenticated){
            fetchAuth0Token (); 
        }
    }, [isAuthenticated, getAccessTokenSilently]);

    if (isLoading || loadingUserInformation)
    return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />;

  if (!isAuthenticated) {
    return loginWithRedirect();
  }


    return (
        <>
            <Sidebar/>
            <main>
                    <Navbar/>
                    <section className="container-cards h-full">
                        <section className="contenido">
                        {children}
                        </section>
                    </section>
            </main>
        </>
        
    )
}

export default Private;

