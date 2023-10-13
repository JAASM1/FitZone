import React from "react";
import Sidebar from "./side";
import {AiOutlineUser} from 'react-icons/ai'

function Dashboard(){
    return (
        <div className="flex font-Montserrat">
            <Sidebar/>
            <div className="w-[full] min-h-screen block relative">
                <div className="text-black font-semibold text-[1.1rem] ml-[5rem] mt-[2rem]">
                    <span className="font-thin">Pages / </span>  Dashboard
                </div>

                <div className="text-black flex flex-col absolute top-[17%] left-[50%]">
                    <h1 className="font-semibold text-[1.7rem] tracking-wider">Bienvenido,</h1>
                    <h2>administrador</h2>
                </div>

                <div className="w-[400px] bg-zinc-800 absolute top-[33%] left-[90%] h-[100px] rounded-xl p-5 flex justify-around space-x-5 shadow-lg">
                    <div className="bg-amber-400 w-[3rem] h-[3rem] mt-2 text-[2rem] p-2 rounded-2xl text-white">
                        <AiOutlineUser/>
                    </div>
                    <div className="flex flex-col text-white text-[1.5rem]">
                        <p>0</p>
                        <h3 className="text-[1rem]">Total de usuarios</h3>
                    </div>
                </div>

                <div className="w-[800px] bg-zinc-800 absolute h-[300px] left-[90%] top-[50%] rounded-md shadow-md">
                    <div className="text-white p-2 text-center text-[1.2rem]">
                        Lista de usuarios
                    </div>

                    <div className="w-[600px] h-[200px] absolute left-[10%] flex flex-row justify-between text-white">
                        <div>
                            Nombre de usuario
                        </div>
                        <div>
                            Correo
                        </div>
                        <div>
                            <div>
                                Acciones
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dashboard