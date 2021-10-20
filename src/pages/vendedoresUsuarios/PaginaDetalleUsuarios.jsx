import DetalleUsuarios from '../../modules/detalleUsuarios/DetalleUsuarios';
import NoButtonUpperBarSection from '../../modules/noButtonUpperBarSection/NoButtonUpperBarSection';

const PaginaDetalleUsuarios =({cardsUsuarios})=>{


    return(
        <>
            <NoButtonUpperBarSection title="Detalle Usuarios" cardTo="/moduloVendedores/paginaEditarUsuarios" edit={true}/>
            <DetalleUsuarios cardsUsuarios={cardsUsuarios}/>
        </>
    );
}

export default PaginaDetalleUsuarios;