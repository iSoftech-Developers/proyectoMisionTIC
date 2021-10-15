import Navbar from '../modules/navbar/Navbar';
import Sidebar from '../modules/sidebar/Sidebar';
import {useEffect} from 'react';
import { obtenerDatosUsuario } from '../utils/GetDB'
import { useAuth0 } from '@auth0/auth0-react';
import { useUsuario } from '../context/UsuarioConectado';

const Private = ({children}) => {

    const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const {setUsuario}=useUsuario()

    useEffect(() => {
        const fetchAuth0Token = async ()=> {

            const accessToken=  await getAccessTokenSilently({
                audience: 'api-proyecto-softech', });
                
         localStorage.setItem('token', accessToken);
         await obtenerDatosUsuario(
            (response) => {
                setUsuario(response.data)
            },
            (err) => {
              console.log('err', err);
            }
          );
        };
        if(isAuthenticated){
            fetchAuth0Token (); 
        }
     }, [isAuthenticated, getAccessTokenSilently]);


 
 
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

