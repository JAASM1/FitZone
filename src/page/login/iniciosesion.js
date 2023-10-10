import React from 'react';
import InisioSesion from '../../asset/img/login/pesaTelefono.jpg'
import { Link } from 'react-router-dom';

function iniciarSesion(){
    return(
        <div className='font-Montserrat'>
            <picture>
                <img src={InisioSesion} alt='' className='h-96 sm:h-full sm:w-full md:h-screen md:w-screen'/>
            </picture>
            <div 
                className='bg-[#272733] absolute rounded-[8%] opacity-90
                w-[80%] h-[40%] top-[22%] ml-[10%]
                sm:w-[55%] sm:h-[62%] sm:top-[27%] sm:ml-[22.5%]
                md:w-[40%] md:h-[84%] md:top-[30%] md:ml-[30%]'>
            </div>
            <div className='flex flex-col'>
                <p className='text-[#EFB810] absolute font-bold 
                    text-xl top-[22.6%] ml-[17.5%]
                    sm:text-xl sm:top-[28.5%] sm:ml-[30%]
                    md:text-3xl md:top-[35%] md:ml-[35%]'>
                    Inicia sesión para continuar
                </p>
                <div className='absolute top-[29%] sm:top-[35%] sm:ml-[20%] md:top-[45%] md:ml-[21%]'>
                    <label for='correo' className='text-[#EFB810] font-bold
                        text-base ml-[45%]
                        sm:text-sm sm:ml-[33%] 
                        md:ml-[100%] md:text-base'>
                        CORREO
                    </label>
                    <br/>
                    <input className='bg-[#717171] placeholder-white rounded-2xl 
                        ml-[33%] h-7 pl-4 w-[125%]
                        sm:w-[150%] sm:h-8 sm:ml-[25%] sm:pl-5
                        md:ml-[90%] md:w-[220%] md:h-12 md:pl-5'
                        id='correo' 
                        type='email' 
                        placeholder='chanchitofeliz@gmail.com'
                    />
                </div>
                <form className='absolute top-[37%] sm:top-[45%] sm:ml-[20%] md:top-[60%] md:ml-[21%]'>
                    <label for='contra' className='text-[#EFB810] font-bold 
                        text-base ml-[45%]
                        sm:text-sm sm:ml-[33%]
                        md:ml-[100%] md:text-base'>
                        CONTRASEÑA
                    </label> 
                    <br/>
                    <input className='bg-[#717171] placeholder-white rounded-2xl
                        ml-[33%] h-7 pl-4 w-[125%]
                        sm:w-[150%] sm:h-8 sm:ml-[25%] sm:pl-5
                        md:ml-[90%] md:w-[220%] md:h-12 md:pl-5'
                        id='contra' 
                        type='password' 
                        placeholder='**************'
                    />
                </form>
                <Link to='/Contraseña'>
                    <button className='absolute text-[#EFB810] font-bold 
                        text-sm ml-[25%] top-[43.6%]
                        sm:text-xs sm:top-[54%] sm:ml-[38%]
                        md:top-[71%] md:ml-[46%] md:text-sm'>
                        ¿HA OLVIDADO LA CONTRASEÑA?
                    </button>
                </Link>
                <div className='flex'>
                    <button className='absolute bg-[#EFB810] text-white rounded-2xl
                        top-[49%] ml-[23%] h-7 w-24
                        sm:top-[60.5%] sm:ml-[32%] sm:w-[13%] sm:h-8
                        md:top-[79%] md:w-[12%] md:h-[5%] md:ml-[36%]'>
                        Acceder
                    </button>
                    <Link to='/Registrarse'>
                        <button className='absolute bg-[#EFB810] text-white rounded-2xl
                            top-[49%] ml-[50%] w-28 h-7
                            sm:top-[60.5%] sm:ml-[50%] sm:w-[16%] sm:h-8
                            md:top-[79%] md:w-[12%] md:h-[5%] md:ml-[51%]'>
                            Registrarse
                        </button>
                    </Link>
                </div>
            </div>
            <div 
                className='absolute border-white 
                border-1
                sm:top-[70%] sm:ml-[32%] sm:w-[35%] sm:border-2
                md:top-[90%] md:ml-[35%] md:w-[30%] md:border-2'>
            </div>
            <div>
                <div 
                    className='bg-white absolute
                    top-[56%] w-24 h-7 ml-[23%]
                    sm:p-3 sm:w-[12%] sm:top-[78%] sm:ml-[33%]
                    md:p-5 md:w-[10%] md:top-[98%] md:ml-[38%]'>
                </div>
                <div 
                    className='bg-white absolute
                    top-[56%] w-24 h-7 ml-[52%]
                    sm:p-3 sm:w-[12%] sm:top-[78%] sm:ml-[52%]
                    md:p-5 md:w-[10%] md:top-[98%] md:ml-[51%]'>
                </div>
            </div>
        </div>
    )
}

export default iniciarSesion