import { Link } from 'react-router-dom';



const EditarVenta=(props)=>{


    return(
        <>
                <form className="flex justify-between">
                    
                    <div className="flex flex-col">
                        <div>
                            <label className="font-bold">{props.formlabel1}</label>
                            <div className="mb-20">
                                <span>XXX.XXX.XXX-Y</span>
                            </div>
                        </div>
                        <div>
                            <label className="font-bold ">{props.formlabel2}</label>
                        </div>
                            <div className="mb-20">
                                <input required type="text" />
                            </div>
                        </div>
                    <div className="flex flex-col">
                        <div>
                            <label className="font-bold ">{props.formlabel3}</label>
                        </div>
                        <div className="mb-20">
                            <input required type="text"/>
                        </div>
                        <div>
                            <label className="font-bold ">{props.formlabel4}</label>
                        </div>
                        <div className="mb-20">
                            <input required type="text" />
                        </div>
                        </div>
                    <div className="flex flex-col">
                        <div>
                            <label className="font-bold ">{props.formlabel5}</label>
                        </div>
                        <div className="mb-20">
                            <input required type="text"/>
                        </div>
                    
                        <div>
                            <label className="font-bold ">{props.formlabel6}</label>
                        </div>
                        <div className="mb-20">
                            <input required type="text"/>
                        </div>
                        </div>
                    <div className="flex flex-col">
                        <div>
                            <label className="font-bold ">{props.formlabel7}</label>
                        </div>
                        <div className="mb-20">
                            <input required type="text"/>
                        </div>
                    
                        <div>
                            <label className="font-bold ">{props.formlabel8}</label>
                        </div>
                        <div className="mb-20">
                            <input required type="text"/>
                        </div>
                    </div>
                
                </form> 
               <div className="flex justify-center">
                <Link className="w-1/6 cursor-pointer flex justify-center bg-green-400 h-10 text-white font-bold flex items-center justify-center" to={props.selectorButton}> {props.nameButton}<button  data-bs-toggle="modal" data-bs-target="#modal-edit-user-info"></button ></Link>
                </div>       
        </>

    );
}

export default EditarVenta;