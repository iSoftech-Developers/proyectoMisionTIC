import React from 'react'
import Navbar from '../modules/navbar/Navbar';
import Sidebar from '../modules/sidebar/Sidebar';


const Private = ({children}) => {
    return (
        <>
            <Sidebar/>
            <main>
                <Navbar/>
                    <section className="container-cards h-full overflow-scroll md: ml-80 lg:ml-80">
                        <section className="contenido lg">
                            {children}
                        </section>
                    </section>
            </main>
        </>
        
    )
}

export default Private

