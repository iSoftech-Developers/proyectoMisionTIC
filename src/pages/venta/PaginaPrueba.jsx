import Sidebar from '../../modules/sidebar/Sidebar';
import Navbar from '../../modules/navbar/Navbar';
import React from "react";
import UpperBarSection from '../../modules/upperBarSection/UpperBarSection';

const PaginaPrueba=()=>{
    
/*export default PaginaPrueba;*/
const people = [
    {
      id: 'ID-2354647',
      descripcion: 'Camiseta Nike',
      cantidad: '2',
      valorunit: '$200.000',
      valortotal: '$400.000',
      estado: 'Disponible',
      
    },
    // More people...
  ]

    return (
        <>
      
        <main>

                <div className="flex flex-col">
                <UpperBarSection titlePage="Listado de ventas" nameButton="GUARDAR" selectorButton="/nuevaVenta"/>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID Producto
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Descripcion
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Cantidad
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Valor Unitario
                  </th>
                  <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Valor Total
                  </th>
                  <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        Estado
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.i}>
                    <td className="px-2 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{person.descripcion}</div>
                      
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">
                        
                        <div className="text-sm text-gray-500 text-center">{person.cantidad}</div>
                    </td>
   
                    <td className="px-2 py-2 whitespace-nowrap">
                        
                        <div className="text-sm text-gray-500 text-center">{person.valorunit}</div>
                    </td>
                    <td className="px-2 py-2 whitespace-nowrap">
                        
                        <div className="text-sm text-gray-500 text-center">{person.valortotal}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.estado}</td>
                    
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <form action="ejemplo" method="get">
                        <button
                            data-modal-toggle="example2"
                            data-modal-action="open"
                            class="bg-purple-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"
                            >
                        Click here
                        </button> 
                        </form> 
                        
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>  
            </main>
            
      
    </>
  )
}
export default PaginaPrueba;
