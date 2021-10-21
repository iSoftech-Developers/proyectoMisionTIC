import { Tooltip } from '@material-ui/core';
import { useHistory, useParams} from "react-router-dom";
import { Link} from 'react-router-dom';


const NoButtonUpperBarSection =({title, cardTo, edit})=>{
    
  let {id}= useParams();

    let history = useHistory();
    let back = e => {
        e.stopPropagation();
        history.goBack();
      };

    return(
        <div className=" my-9 flex justify-between"> 
            <div>
              <span className="font-bold text-2xl">{title}</span>
              {edit ?(
                <Link to={`${cardTo}/${id}`}>
                  <Tooltip title="editar">
                    <i className="fas fa-pen hover:text-gray-500 text-black fa-lg pl-4"></i>
                  </Tooltip>
                </Link>
              ):(
              <></>
              )} 
            </div>
            <button onClick={back} className="w-1/6 cursor-pointer rounded h-10 text-white backButton font-semibold flex items-center justify-center">Regresar</button>
        </div >
    )
  }

  export default NoButtonUpperBarSection;