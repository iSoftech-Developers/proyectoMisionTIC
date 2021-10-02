import React from 'react';
import image from '../../media/image.jpeg';
import { Link } from 'react-router-dom';



const TarjetasUsuarios = ({userCardInfo}) => {
    return (
        <>
            <div className="flex flex-wrap mt-9 gap-4 max-h-3">
                {userCardInfo.map((i)=>{
                    return(
                        <Link to="/rolesUsuarios/detalleUsuarios">
                            <div className="w-32 p-1 bg-white shadow-sm cursor-pointer transition duration-250 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <img src={image}/>
                                <div className="flex flex-col">
                                    <span className="font-bold text-center">{i.field1}</span>
                                    <span className="text-sm text-center">{i.field2}</span>
                                    <span className="text-sm text-center bg-yellow-500 text-white">{i.field3}</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
                
                
            </div>
        </>
    )
}

export default TarjetasUsuarios
