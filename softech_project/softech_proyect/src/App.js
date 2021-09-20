
import './App.css';
import Sidebar from './features/sidebar/Sidebar';
import Navbar from './features/navbar/Navbar';
import { useState } from 'react';

const App =()=> {
  const [contadorValue,updaterContador]=useState(0);
  return (
   <div class="template">

    <Sidebar contadorValue={contadorValue} updaterContador={updaterContador} />
    <main>
      <Navbar contadorValue={contadorValue} />
    
        <section class="contenido">


        </section>
    </main>
   </div> 
    
  );
}

export default App;


