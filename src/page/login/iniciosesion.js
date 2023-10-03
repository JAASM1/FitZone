import React from "react";
import CBUM from '../../asset/img/login/cbum.jpg'
import { Link } from "react-router-dom";

function iniciarSesion(){
    return(
        <div className='font-Montserrat'>
            <img src={CBUM} className='w-screen h-[850px]'/>
            <div 
                className="bg-[#000000] absolute w-[40%] h-[71%] top-[48%] ml-32 rounded-[8%]">
            </div>
            <div className="flex flex-col">
                <p className="text-[#EFB810] absolute font-bold text-3xl top-[55%] ml-[14%]">
                    Inicia sesión para continuar
                </p>
                <form className="absolute top-[65%]">
                    <label for='correo' className="text-[#EFB810] font-bold absolute ml-[100%] text-base">
                        CORREO
                    </label> 
                    <br/>
                    <input className="ml-[90%] w-[220%] h-12 bg-[#717171] placeholder-white rounded-2xl pl-5"
                        id='correo' 
                        type="email" 
                        placeholder="chanchitofeliz@gmail.com"
                    />
                </form>
                <form className="absolute top-[80%]">
                    <label for='contra' className="text-[#EFB810] font-bold absolute ml-[100%] text-base">
                        CONTRASEÑA
                    </label> 
                    <br/>
                    <input className="ml-[90%] w-[220%] h-12 bg-[#717171] placeholder-white rounded-2xl pl-5"
                        id='contra' 
                        type="password" 
                        placeholder="**************"
                    />
                </form>
                <h1 className="absolute text-[#EFB810] font-bold top-[91%] ml-[23%]">
                    ¿HA OLVIDADO LA CONTRASEÑA?
                </h1>
                <button className="absolute bg-[#EFB810] text-white top-[100%] w-[12%] h-[5%] rounded-2xl ml-[15%]">
                    Acceder
                </button>
                <Link to='/Registrarse'>
                    <button className="absolute bg-[#EFB810] text-white top-[100%] w-[12%] h-[5%] rounded-2xl ml-[30%]">
                        Registrarse
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default iniciarSesion