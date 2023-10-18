import React from 'react';
import Registro from '../../asset/img/login/boxTelefono.jpg'
import Vertical from '../../asset/img/login/vertical.jpg'

function Registrarse(){
    return(
        <div className='font-Montserrat'>
            <picture>
                <img src={Registro} alt='' className='sm:w-screen sm:h-full md:h-screen md:w-screen hidden sm:block md:block'/>
                <img src={Vertical} alt='' className='h-screen sm:hidden md:hidden'/>
            </picture>
            <div className='bg-[#272733] absolute rounded-[60px] opacity-90 w-[328px] h-96 top-[22%] ml-8 sm:top-10 sm:ml-[215px] md:w-[40%] md:h-[84%] md:top-14 md:ml-[29%]'>
            </div>
            <div className='flex flex-col'>
                <p className='text-[#EFB810] absolute font-bold text-2xl top-44 ml-16 sm:top-16 sm:ml-60 md:text-3xl md:top-20 md:ml-[38%]'>
                    ¿Ya estas registrado?
                </p>
                <form className='absolute top-60 sm:top-28 sm:ml-[182px] md:top-[25%] md:ml-[20.5%]'>
                    <label for='user' className='text-[#EFB810] font-bold text-base ml-24 md:ml-[100%] md:text-base'>
                        USUARIO
                    </label> 
                    <br/>
                    <input className='bg-[#717171] placeholder-white rounded-2xl h-7 pl-4 w-64 ml-[69px] md:ml-[90%] md:w-[220%] md:h-12 md:pl-5'
                        id='user' type='text' placeholder='Ronnie Coleman'
                    />
                </form>
                <form className='absolute top-[45.5%] sm:top-[180px] sm:ml-[182px] md:top-[40%] md:ml-[20.5%]'>
                    <label for='correo' className='text-[#EFB810] font-bold text-base ml-24 md:ml-[100%] md:text-base'>
                        CORREO
                    </label> 
                    <br/>
                    <input className='bg-[#717171] placeholder-white rounded-2xl h-7 pl-4 w-64 ml-[69px] md:ml-[90%] md:w-[220%] md:h-12 md:pl-5'
                        id='correo' type='email' placeholder='chanchitofeliz@gmail.com'
                    />
                </form>
                <form className='absolute top-[55%] sm:top-[249px] sm:ml-[182px] md:top-[55%] md:ml-[20.5%]'>
                    <label for='contra' className='text-[#EFB810] font-bold text-base ml-24 md:ml-[100%] md:text-base'>
                        CONTRASEÑA
                    </label> 
                    <br/>
                    <input className='bg-[#717171] placeholder-white rounded-2xl h-7 pl-4 w-64 ml-[69px] md:ml-[90%] md:w-[220%] md:h-12 md:pl-5'
                        id='contra' type='password' placeholder='**************'
                    />
                </form>
                <button className='absolute bg-[#EFB810] text-white rounded-2xl top-[68%] ml-32 w-32 h-8 sm:top-[340px] sm:ml-[315px] md:top-[75%] md:w-40 md:h-10 md:ml-[43%]'>
                    Registrate
                </button>
            </div>
        </div>
    )
}

export default Registrarse