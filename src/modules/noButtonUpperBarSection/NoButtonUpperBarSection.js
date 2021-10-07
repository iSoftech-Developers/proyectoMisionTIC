import { useHistory} from "react-router-dom";


const NoButtonUpperBarSection =({title})=>{
    
    let history = useHistory();
    let back = e => {
        e.stopPropagation();
        history.goBack();
      };

    return(
        <div className=" my-9 flex justify-between">
            <span className="font-bold text-2xl">{title}</span>
            <button onClick={back} className="w-1/6 cursor-pointer bg-green-500 rounded h-10 text-white font-semibold flex items-center justify-center">Atras</button>
        </div >
    )
  }

  export default NoButtonUpperBarSection;