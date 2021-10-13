import { Link } from 'react-router-dom';


const UpperBarSection =({titlePage,selectorButton,nameButton})=>{
    

    return(
        <div className=" my-9 flex justify-between">
            <span className="text-2xl font-bold">{titlePage}</span>
            <Link className="w-1/6 cursor-pointer bg-green-500 rounded h-10 text-white font-semibold flex items-center justify-center" to={selectorButton}> {nameButton}<button data-bs-toggle="modal" data-bs-target="#modal-edit-user-info"></button ></Link>
        </div>
    )
  }

  export default UpperBarSection;
