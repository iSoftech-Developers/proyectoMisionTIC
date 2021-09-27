import { Link } from 'react-router-dom';

const UpperBarSection =(props)=>{

    return(
        <div className=" my-9 flex   justify-between">
            <span className="text-2xl font-semibold">{props.titlePage}</span>
            <button className="w-1/6 cursor-pointe bg-green-400 h-10 text-white font-bold" data-bs-toggle="modal" data-bs-target="#modal-edit-user-info"><Link className="active" to={props.selectorButton}>{props.nameButton}</Link></button >
            
        </div>
    )
  }

  export default UpperBarSection;