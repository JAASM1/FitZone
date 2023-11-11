import React from 'react';
import { Link } from 'react-router-dom';

function Registrarse(){
    return(
        <div className='font-Montserrat'>
            <div className='bg-image1 h-screen bg-cover flex justify-center items-center'>
                <div className="bg-[#272733]  relative overflow-hidden rounded-3xl w-[750px] h-[480px]">
                    <div className="absolute top-0 h-[100%] transition-all ease-in-out left-64 w-[80%]">
                        <form className="bg-[#272733]  flex justify-center items-center flex-col px-40 h-[100%] text-[#EFB810]" action=''>
                            <h1 className="font-bold text-2xl mb-5">Crea tu cuenta</h1>
                            <span className="font-serif text-sm mb-2 text-center text-white">o utilice su correo electrónico para registrarse</span>
                            <input type="text" id="nombre" placeholder="Nombre" className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none my-5 mx-15 p-2 rounded-md font-mono"/>
                            <input type="email" id="email" placeholder="Correo" className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none mx-15 p-2 rounded-md font-mono"/>
                            <input type="password" id="password" placeholder="Contraseña" className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none my-5 mx-15 p-2 rounded-md font-mono"/>
                            <button className="bg-[#EFB810] cursor-pointer text-[#272733] uppercase p-2 rounded-lg w-40 font-mono" type='submit'>
                                Registrarse
                            </button>
                        </form>
                    </div>
                    <div className="absolute top-0 right-[50%] w-[50%] h-[100%] overflow-hidden rounded-br-[100px] rounded-tr-[150px] z-96 transition-all ease-in-out">
                        <div className="bg-[#EFB810] relative h-[100%] w-[200%] transition-all ease-in-out text-[#272733]">
                            <div className="absolute w-[50%] h-[100%] flex justify-center items-center flex-col text-center top-0 transition-all ease-in-out px-[30px]">
                                <h1 className="font-bold text-2xl">¡Bienvenido GymBro!</h1>
                                <p className="m-[40px] font-serif text-sm">Introduzca sus datos personales para utilizar todas las funciones del sitio web</p>
                                <Link to='/Iniciar sesion'>
                                    <button className=" bg-transparent border-[#272733] p-2 border-2 rounded-lg w-40 font-mono">
                                        Iniciar sesion
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registrarse