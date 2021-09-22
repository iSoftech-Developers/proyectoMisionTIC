import './UpperBarSection.css';
import { Link } from 'react-router-dom';

const UpperBarSection =(props)=>{

    return(
        <div className="barra-ventas">
            <span className="bolder title-sales-bar">Vendedores</span>
            <button className="bolder"  data-bs-toggle="modal" data-bs-target="#modal-edit-user-info" ><Link className="active" to={props.selectorButton}>Nueva venta</Link></button >
        </div >
    )
  }

  export default UpperBarSection;