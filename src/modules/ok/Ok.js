import React from 'react'

const Ok = () => {
    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
            <i className="far fa-check-circle fa-5x text-green-400 "></i>
            <h1 className=" text-6xl  my-20 font-bold text-gray-500 ">! Venta Registrada !</h1>
            <input className="w-1/5 cursor-pointe bg-green-400 py-2 text-white font-bold" type="submit" value="OK!"/>

            
        </div>
    )
}

export default Ok
