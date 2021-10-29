const Games = () => {



    return (
        <div className="flex flex-col w-full">
            <div className=" my-9 flex justify-center">


                <span className="text-2xl font-bold">Quien quiere ser millonario</span>


            </div>


            <div className=" w-full flex justify-between">
                <button  onClick={()=>{}} className="border py-2 px-4 bg-green-500 text-xl  rounded-xl">Para iniciar una partida</button>
                <button className="border py-2 px-4 bg-green-500 text-xl  rounded-xl">Ver estadisticas de jugadores </button>
                <button className="border py-2 px-4 bg-green-500 text-xl  rounded-xl">Imprimir preguntas </button>
                <button className="border py-2 px-4 bg-green-500 text-xl  rounded-xl">Admin </button>

            </div>
        </div>
    )
}

export default Games
