import React from 'react';
import Sidebar from '../../modules/sidebar/Sidebar';
import Navbar from '../../modules/navbar/Navbar';
import EstadoDeVenta from '../../modules/estadoDeVenta/EstadoDeVenta';

const PaginaEstadoVenta = () => {
    return (
            <>
            <Sidebar/>
            <main>
                <Navbar/>
                    <section className="container-cards">
                        <section className="contenido">
                            <EstadoDeVenta/>
                        </section>
                    </section>
                </main>
            </>
    )
}

export default PaginaEstadoVenta
