
import './DetalleUsuarios.css';

const DetalleUsuarios=()=>{

    return(
        <>
            <div className="max-container">
                <div className="upper-container-modal">
                    <div className="photo-container">
                        <i className="fas fa-user fa-10x"></i>
                    </div>
                    <div className="info-container-modal">
                        <div className="text-over-text">
                            <div>
                                <span className="rol-tag">Administrador</span>
                            </div>
                            <div>
                                <span className="user-id">023466</span>
                            </div>  
                        </div>

                        <div className="lower-info-container-modal">
                            <div className="lower-info-container">
                                <div className="text-over-text">
                                    <div>
                                        <span className="bolder">Nombre</span>
                                    </div>
                                    <div>
                                        <span>Juan Camilo Gomez</span>
                                    </div>
                                </div>
                                <div className="text-over-text">
                                    <div>
                                        <span className="bolder">Fecha de ingreso</span>
                                    </div>
                                    <div>
                                        <span>10/04/2019</span>
                                    </div>
                                </div>
                                <div className="text-over-text">
                                    <div>
                                        <span className="bolder">Celular</span>
                                    </div>
                                    <div>
                                        <span>302 1234567</span>
                                    </div>
                                </div>
                                <div className="text-over-text">
                                    <div>
                                        <span className="bolder">Especialidad</span> 
                                    </div>
                                    <div>
                                        <span>Sección Gym</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower-container-modal-form">
                    <div className="text-over-text">
                        <div>
                            <span className="bolder gray-letter">ID*</span>
                        </div>
                        <div>
                            <input className="input-form-users" type="text"></input>
                        </div>
                        <div>
                            <span className="bolder gray-letter independent-child">Número Celular</span>
                        </div>
                        <div>
                            <input className="input-form-users" type="text"></input>
                        </div>
                    </div>
                    <div className="text-over-text">
                        <div>
                            <span className="bolder gray-letter">Nombres y Apellidos*</span>
                        </div>
                        <div>
                            <input className="input-form-users" type="text"></input>
                        </div>
                        <div>
                            <span className="bolder gray-letter independent-child">Especialidad*</span>
                        </div>
                        <div>
                            <input className="input-form-users" type="text"></input>
                        </div>
                    </div>
                    <div className="text-over-text">
                        <div>
                            <span className="bolder gray-letter">Fecha de ingreso*</span>
                        </div>
                        <div>
                            <input className="input-form-users" type="text"></input>
                        </div>
                        <div>
                            <span className="bolder gray-letter independent-child">Rol*</span>
                        </div>
                        <div>
                            <input className="input-form-users" type="text"></input>
                        </div>
                    </div>
                </div>
                
                <div className="modal-bottom">
                    <button className="bolder save-button"  data-bs-toggle="modal" data-bs-target="#modal-edit-user-info">GUARDAR</button >
                </div>    
            </div>

            
        </>
    );
}

export default DetalleUsuarios ;