import React from "react";
import Arnold from '../../asset/img/login/Arnold.png'
import Fitzone from '../../asset/img/login/FitZone.png'
import { Link } from "react-router-dom";

function Credenciales(){
    return(
        <div className='font-Montserrat'>
            <div>
                <img src={Arnold} alt="" className="w-full h-[900px]"/>
                <img src={Fitzone} alt="" className='absolute top-[37%] ml-20'/>
                <div className='bg-[#EFB810] p-4 absolute top-[59%] w-[60%]'></div>
                <div className="absolute text-white font-bold top-[125%] text-5xl ml-24">NEVER <br/> SURRENDER</div>
                <div className='absolute text-white font-bold top-[128%] text-3xl ml-[43%] bg-[#EFB810] h-[8%] w-[20%] text-center p-2 rounded-2xl'>
                    <Link to='/Iniciar sesion'>
                        INICIAR SESION
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Credenciales