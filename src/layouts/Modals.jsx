import React from 'react'
import Navbar from '../modules/navbar/Navbar';
import Sidebar from '../modules/sidebar/Sidebar';


const Modals = ({children}) => {
    return (
        <>
            <main>
                    <section className="container-cards h-full overflow-scroll">
                         <section className="contenido">
                            {children}
                        </section>
                    </section>
            </main>
        </>
        
    )
}

export default Modals