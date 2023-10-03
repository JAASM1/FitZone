import React from "react";
import CBUM from '../../asset/img/login/cbum.jpg'

function Registrarse(){
    return(
        <div className="font-Montserrat">
            <img src={CBUM} className='w-screen h-[850px]'/>
            <div 
                className="bg-[#000000] absolute w-[40%] h-[75%] top-[48%] ml-32 rounded-[8%]">
            </div>
            <div className="flex flex-col">
                <p className="text-[#EFB810] absolute font-bold text-3xl top-[55%] ml-[18%]">
                    ¿Ya estas registrado?
                </p>
                <form className="absolute top-[65%]">
                    <label for='user' className="text-[#EFB810] font-bold absolute ml-[100%] text-base">
                        USUARIO
                    </label> 
                    <br/>
                    <input className="ml-[90%] w-[220%] h-12 bg-[#717171] placeholder-white rounded-2xl pl-5"
                        id='user' 
                        type="text" 
                        placeholder="Ronnie Coleman"
                    />
                </form>
                <form className="absolute top-[80%]">
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
                <form className="absolute top-[95%]">
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
                <button className="absolute bg-[#EFB810] text-white top-[110%] w-[12%] h-[5%] rounded-2xl ml-[22%]">
                    Registrate
                </button>
            </div>
        </div>
    )
}
export default Registrarse