import React from 'react';
import Registro from '../../asset/img/login/boxTelefono.jpg'

function Registrarse(){
    return(
        <div className='font-Montserrat'>
            <picture>
                <img src={Registro} alt='' className='h-96 sm:h-full sm:w-full md:h-screen md:w-screen'/>
            </picture>
            <div 
                className='bg-[#272733] absolute rounded-[8%] opacity-90
                w-[80%] h-[40%] top-[22%] ml-[10.5%]
                sm:w-[55%] sm:h-[55%] sm:top-[27%] sm:ml-[22%]
                md:w-[40%] md:h-[75%] md:top-[35%] md:ml-[29%]'>
            </div>
            <div className='flex flex-col'>
                <p className='text-[#EFB810] absolute font-bold
                    text-2xl top-[22.6%] ml-[21%]
                    sm:text-2xl sm:top-[28.5%] sm:ml-[32%]
                    md:text-3xl md:top-[41%] md:ml-[38%]'>
                    ¿Ya estas registrado?
                </p>
                <form className='absolute top-[28%] sm:top-[35%] md:top-[53%] md:ml-[20%]'>
                    <label for='user' className='text-[#EFB810] font-bold
                        text-base ml-[45%]
                        sm:text-sm sm:ml-[100%] 
                        md:ml-[100%] md:text-base'>
                        USUARIO
                    </label> 
                    <br/>
                    <input className='bg-[#717171] placeholder-white rounded-2xl
                        h-7 pl-4 w-[125%] ml-[35%]
                        sm:w-[163%] sm:h-8 sm:ml-[90%] sm:pl-5
                        md:ml-[90%] md:w-[220%] md:h-12 md:pl-5'
                        id='user' 
                        type='text' 
                        placeholder='Ronnie Coleman'
                    />
                </form>
                <form className='absolute top-[36%] sm:top-[45%] md:top-[68%] md:ml-[20%]'>
                    <label for='correo' className='text-[#EFB810] font-bold
                        text-base ml-[45%]
                        sm:text-sm sm:ml-[100%] 
                        md:ml-[100%] md:text-base'>
                        CORREO
                    </label> 
                    <br/>
                    <input className='bg-[#717171] placeholder-white rounded-2xl
                        h-7 pl-4 w-[125%] ml-[35%]
                        sm:w-[163%] sm:h-8 sm:ml-[90%] sm:pl-5
                        md:ml-[90%] md:w-[220%] md:h-12 md:pl-5'
                        id='correo' 
                        type='email' 
                        placeholder='chanchitofeliz@gmail.com'
                    />
                </form>
                <form className='absolute top-[44%] sm:top-[55%] md:top-[83%] md:ml-[20%]'>
                    <label for='contra' className='text-[#EFB810] font-bold
                        text-base ml-[45%]
                        sm:text-sm sm:ml-[100%] 
                        md:ml-[100%] md:text-base'>
                        CONTRASEÑA
                    </label> 
                    <br/>
                    <input className='bg-[#717171] placeholder-white rounded-2xl
                        h-7 pl-4 w-[125%] ml-[35%]
                        sm:w-[163%] sm:h-8 sm:ml-[90%] sm:pl-5
                        md:ml-[90%] md:w-[220%] md:h-12 md:pl-5'
                        id='contra' 
                        type='password' 
                        placeholder='**************'
                    />
                </form>
                <button className='absolute bg-[#EFB810] text-white rounded-2xl
                    top-[54%] ml-[36%] w-32 h-8
                    sm:top-[69%] sm:ml-[40%] sm:w-[16%] sm:h-8
                    md:top-[99%] md:w-[12%] md:h-[5%] md:ml-[43%]'>
                    Registrate
                </button>
            </div>
        </div>
    )
}
export default Registrarse