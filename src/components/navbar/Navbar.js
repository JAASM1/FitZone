// import {NavLink} from 'react-router-dom'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full m-0 p-0 font-Montserrat'>
        <div className='bg-black'>
            <Link to = '/'>
                <h1 className='text-white text-4xl p-6 pl-10 font-medium'>FIT ZONE</h1>
            </Link>
        </div>

        <div className='bg-[#333] absolute left-10 px-8 pt-6 pb-9'>
            <Link to='/'>
                <p className='uppercase  text-white text-xl'>Inicio</p>        
            </Link>
        </div>

        <div className='bg-[#EFB810] flex gap-20 items-center justify-end p-6 static'>
            

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