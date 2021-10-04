import { Link } from 'react-router-dom';

const UpperBarSection =(props)=>{

    return(
        <div className=" my-9 flex justify-between">
            <span className="text-2xl font-semibold">{props.titlePage}</span>
            <Link className="w-1/6 cursor-pointer bg-green-400 h-10 text-white font-bold flex items-center justify-center" to={props.selectorButton}> {props.nameButton}<button  data-bs-toggle="modal" data-bs-target="#modal-edit-user-info"></button ></Link>
           
        </div>
    )
  }

  export default UpperBarSection;
