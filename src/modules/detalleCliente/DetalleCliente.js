import { useParams,useHistory } from "react-router";



const DetalleCliente = (props) => {

    const clientes = [
        { id: 0, field1:"Liliana Romero", field2: "123456789",field3:"liliana@gmail.com",field4:"Bogota DC",field5:"bogota",field6:"cra 1 # 1-1",field7:"3135635569"},
        { id: 1, field1:"Anna Blanco", field2: "987654321",field3:"anna@gmail.com",field4:"Medellin",field5:"313333333",field6:"antioquia",field7:"cra 2 # 2-2" },
        { id: 2, field1:"Anna Blanco", field2: "987654321",field3:"anna@gmail.com",field4:"Medellin",field5:"313333333",field6:"antioquia",field7:"cra 2 # 2-2" },
        { id: 3, field1:"Anna Blanco", field2: "987654321",field3:"anna@gmail.com",field4:"Medellin",field5:"313333333",field6:"antioquia",field7:"cra 2 # 2-2" },
      ];

    
    let history = useHistory();
    let { id } = useParams();
    let cliente = clientes[parseInt(id, 10)];
  
    
  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
    return (
        
        <>
        <div className="bg-gray-300">
            <div className="flex justify-between">
                    <div className="">
                        <div>
                            <span className="block font-bold">Razon social</span>
                            <span>{cliente.field1}</span>
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
            </div>
        </>
      
      
    );
}

export default DetalleCliente;
