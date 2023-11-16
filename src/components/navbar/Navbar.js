// import {NavLink} from 'react-router-dom'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Auth'
import { AiOutlineLogout } from 'react-icons/ai'
import Swal from 'sweetalert2'

function Navbar() {
 const { isLoggedIn, logout, isAdmin } = useAuth()


 const handleLogout = () => {
    Swal.fire({
        title: "¿Quieres terminar tu sesión?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Cerrar sesión",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          logout()
          Swal.fire({
            title: "¡Hasta luego!",
            text: "¡Esperamos verte pronto!",
            icon: "success"
          });
        }
      });
 }

  return (
    <div className='w-full m-0 p-0 font-Montserrat'>
        <div className='bg-black flex items-center'>
            <Link to = '/'>
                <h1 className='text-white text-4xl p-6 pl-10 font-medium max-md:text-center'>FIT ZONE</h1>
            </Link>
            {isLoggedIn ? (
                <button
                onClick={handleLogout}>
                    <AiOutlineLogout className='text-white'></AiOutlineLogout>
                </button>
            )
                : (
                <Link to="/Iniciar sesion" className=' text-amber-300 uppercase tracking-wider text-sm my-auto md:ml-[68rem]'>Inicia sesión</Link>
            )}
            {isAdmin && (
                <Link to="/Estadisticas">
                    <h2 className='text-white md:ml-[68rem]'>Dashboard</h2>
                </Link>
            )}
        </div>

        <div className='bg-[#333] absolute left-10 px-8 pt-6 pb-9 max-md:hidden'>
            <Link to='/'>
                <p className='uppercase  text-white text-xl'>Inicio</p>        
            </Link>
        </div>

        <div className='bg-[#EFB810] flex md:gap-7 gap-5 items-center max-md:justify-center justify-end p-6 max-md:h-16 max-md:text-xs'>

            <div className='bg-[#333] py-6 px-4 md:hidden'>
                <Link to='/'>
                    <p className='uppercase  text-white md:text-xl'>Inicio</p>        
                </Link>
            </div>

            <div className=''>
                <Link to='/Ejercicios'>
                    <p className='text-white uppercase font-medium'>Ejercicios</p>
                </Link>
            </div>
            <div>
                <Link to = '/Nutricion'>
                    <p className='text-white uppercase font-medium'>Nutricion</p>
                </Link>
            </div>
            <div className=''>
                <Link to = '/Calorias'>
                    <p className='text-white uppercase font-medium'>Calorias</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar