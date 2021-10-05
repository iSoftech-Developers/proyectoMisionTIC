import Navbar from '../modules/navbar/Navbar';
import Sidebar from '../modules/sidebar/Sidebar';
import { useLocation } from 'react-router';
import { useEffect } from 'react';


const Private = ({children}) => {
    const location = useLocation;
    useEffect(() =>{
        console.log(location)

    },[location]);

    

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

export default Private

