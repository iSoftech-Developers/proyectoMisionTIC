import { Link } from 'react-router-dom';

const UpperBarSection =(props)=>{

    return(
        <div className="flex pl-8 my-4 justify-between pr-8">
            <span className="text-2xl font-semibold">{props.titlePage}</span>
            <button className="w-1/6 cursor-pointe bg-green-400 h-10 text-white font-bold" data-bs-toggle="modal" data-bs-target="#modal-edit-user-info"><Link className="active" to={props.selectorButton}>{props.nameButton}</Link>Agregar</button >
            
        </div>
    )
  }

  export default UpperBarSection;