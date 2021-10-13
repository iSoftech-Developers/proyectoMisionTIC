import DetalleUsuarios from '../../modules/detalleUsuarios/DetalleUsuarios';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';

const PaginaDetalleUsuarios =({cardsUsuarios})=>{


    return(
        <>
            <NoButtonUpperBarSection title="Detalle Usuarios"/>
            <DetalleUsuarios cardsUsuarios={cardsUsuarios}/>
        </>
    );
}

export default PaginaDetalleUsuarios;