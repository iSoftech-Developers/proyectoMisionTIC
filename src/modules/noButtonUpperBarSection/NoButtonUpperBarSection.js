
import { useHistory } from "react-router-dom";
const NoButtonUpperBarSection =(props)=>{
    
    const Boton = () => {
        let history = useHistory();
        return (
            <>
              <button onClick={() => history.goBack()}>Back</button>
            </>
        );
    };

    return(
        <div className=" my-9 flex justify-between">
            <span className="font-bold text-2xl">{props.title}</span>
            <div>
                <i class="far fa-times text-blue-800"></i>
                <button className="font-bold text-blue-800">Regresar</button>
            </div>
            
        </div >
    )
  }

  export default NoButtonUpperBarSection;