import './UpperBarSection.css';

const UpperBarSection =()=>{

    return(
        <div class="barra-ventas">
            <span class="bolder title-sales-bar">Vendedores</span>
            <button class="bolder" data-bs-toggle="modal" data-bs-target="#modal-edit-user-info">AGREGAR</button>
        </div >
    )
  }

  export default UpperBarSection;