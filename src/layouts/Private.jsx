import React from 'react'
import Navbar from '../modules/navbar/Navbar';
import Sidebar from '../modules/sidebar/Sidebar';


const Private = ({children}) => {
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

