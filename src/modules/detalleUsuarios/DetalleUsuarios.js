import './DetalleUsuarios.css';

const DetalleUsuarios=()=>{

    return(
        <>
            <div class="modal-body">
                <div class="upper-container-modal">
                    <div class="photo-container">
                        <i class="fas fa-user fa-10x"></i>
                    </div>
                    <div class="info-container-modal">
                        <div class="text-over-text">
                            <div>
                                <span class="rol-tag">Administrador</span>
                            </div>
                            <div>
                                <span class="user-id">023466</span>
                            </div>
                        </div>

                        <div class="lower-info-container-modal">
                            <div class="form-lower-info-container">
                                <div class="text-over-text">
                                    <div>
                                        <span class="bolder">Nombre</span>
                                    </div>
                                    <div>
                                        <span>Juan Camilo Gomez</span>
                                    </div>
                                </div>
                                <div class="text-over-text">
                                    <div>
                                        <span class="bolder">Fecha de ingreso</span>
                                    </div>
                                    <div>
                                        <span>10/04/2019</span>
                                    </div>
                                </div>
                                <div class="text-over-text">
                                    <div>
                                        <span class="bolder">Celular</span>
                                    </div>
                                    <div>
                                        <span>302 1234567</span>
                                    </div>
                                </div>
                                <div class="text-over-text">
                                    <div>
                                        <span class="bolder">Especialidad</span> 
                                    </div>
                                    <div>
                                        <span>Sección Gym</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                </div>

                <div class="lower-container-modal-form">
                    <p>hola</p>
                </div>
            </div>
        </>
    );
}

export default DetalleUsuarios ;