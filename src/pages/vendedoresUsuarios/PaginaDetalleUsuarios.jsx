import DetalleUsuarios from '../../modules/detalleUsuarios/DetalleUsuarios';

const PaginaDetalleUsuarios =({cardsUsuarios})=>{

 

    return(
        <>
            <DetalleUsuarios cardsUsuarios={cardsUsuarios}/>
       </>
    );
}

export default PaginaDetalleUsuarios;