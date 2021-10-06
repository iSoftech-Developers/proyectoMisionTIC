import { Tooltip } from "@material-ui/core";

const NoButtonUpperBarSection =(props)=>{

    return(
        <Tooltip title="Guardar">
            <div className=" my-9 flex  items-start">
            <span className="font-bold text-2xl">{props.title}</span>
            </div >
        </Tooltip>
        
    )
  }

  export default NoButtonUpperBarSection;