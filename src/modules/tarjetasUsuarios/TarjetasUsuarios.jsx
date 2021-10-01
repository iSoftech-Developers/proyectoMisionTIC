import React from 'react';
import image from '../../media/image.jpeg';
import { Link } from 'react-router-dom';



const TarjetasUsuarios = (props) => {
    return (
        <>
            <div className="flex flex-wrap mt-9 gap-4">
                <Link to="/rolesUsuarios/detalleUsuarios">
                    <div className="w-32 p-1 bg-white shadow-sm cursor-pointer transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <img src={image}/>
                        <div className="flex flex-col mt-2 mb-2 justify-start ">
                            <span className="font-bold text-center">{props.variableUserCard.field1}</span>
                            <span className="text-sm text-center my-2">{props.variableUserCard.field2}</span>
                            <span className="text-sm text-center bg-yellow-500 text-white">{props.variableUserCard.field3}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default TarjetasUsuarios
