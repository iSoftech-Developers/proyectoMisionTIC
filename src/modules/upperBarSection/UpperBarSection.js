import './UpperBarSection.css';
import { Link } from 'react-router-dom';

const UpperBarSection =(props)=>{

    return(
        <div className="barra-ventas">
            <span className="bolder title-sales-bar">{props.titlePage}</span>
            <button className="bolder"  data-bs-toggle="modal" data-bs-target="#modal-edit-user-info" ><Link className="active" to={props.selectorButton}>{props.nameButton}</Link></button >
        </div >
    )
  }

  export default UpperBarSection;