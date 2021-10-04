import { Link } from 'react-router-dom';

const DetalleCliente = (props) => {
    return (
        
        <>
        <div className="flex justify-between overflow-y-hidden">
                <div className="">
                    
                    <div>
                        <span className="block font-bold">Razon social</span>
                        <span>XXX.XXX.XXX - Y</span>
                    </div>
                    <div className="my-8">
                        <span className="block font-bold">Direccion</span>
                        <span>Juan Camilo Gomez</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span className="block font-bold">NIT/C.C.</span>
                        <span>D9999999</span>
                    </div>
                    <div className="my-8">
                        <span className="block font-bold">Departamento</span>
                        <span>10/04/2019</span>
                    </div>
                </div>
                <div className="">
                    <div>
                        <span className="block font-bold">Telefono</span>
                        <span>11/04/2021</span>
                    </div>
                    <div className="my-8">
                        <span className="block font-bold">Municipio</span>
                        <span>302 1234567</span>
                    </div>
                </div>
                <div className="">
                    <div>
                        <span className="block font-bold">Email</span>
                        <span>ruta</span>
                    </div>
                </div>
            </div> 
                 
        </>
      
      
    );
}

export default DetalleCliente;
