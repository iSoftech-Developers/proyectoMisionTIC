import './UpperBarSection.css';

const UpperBarSection =(props)=>{

    return(
        <div className="barra_ventas">
            <span className="bolder title-sales-bar">Vendedores</span>
            <button className="bolder"  data-bs-toggle="modal" data-bs-target="#modal-edit-user-info" >AGREGAR</button >
        </div >
    )
  }

  export default UpperBarSection;