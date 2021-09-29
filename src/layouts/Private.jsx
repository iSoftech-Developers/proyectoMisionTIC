import React from 'react'
import Navbar from '../modules/navbar/Navbar';
import Sidebar from '../modules/sidebar/Sidebar';


const Private = ({children}) => {
    return (
        <div className="overflow-y-scroll">
           <Sidebar/>
           <main className="w-screen">
               <Navbar/>
                {children}
           </main>
        </div>
    )
}

export default Private

