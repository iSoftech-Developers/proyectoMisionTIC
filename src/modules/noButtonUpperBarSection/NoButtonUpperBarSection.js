import './NoButtonUpperBarSection.css';

const NoButtonUpperBarSection =(props)=>{

    return(
        <div className="barra-ventas">
            <span className="bolder title-sales-bar">{props.titlePageProduct}</span>
        </div >
    )
  }

  export default NoButtonUpperBarSection;