// import {NavLink} from 'react-router-dom'
import React from 'react'
import { Link } from 'react-router-dom'

import iconEjercicios from '../../asset/icons/pesa (1).png'
import iconNutricion from '../../asset/icons/nutricion.png'
import iconCalorias from '../../asset/icons/calorias.png'


function Navbar() {
  return (
    <div className='w-full m-0 p-0'>
        <div className='bg-[#333] flex gap-20 justify-center items-center p-4'>
            <div className='basis-4/6 text-white text-3xl p-0'>
                <Link to='/'>
                    <p className='transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-100 duration-300'>Home</p>
                    
                </Link>
            </div>
            <div>
                <Link to='/Ejercicios'>
                    <img src={iconEjercicios} className='flex-initial w-[3.5rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'></img>
                </Link>
            </div>
            <div>
                <Link to = '/Nutricion'>
                    <img src={iconNutricion} className='flex-initial w-[3.5rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'></img>
                </Link>
            </div>
            <div>
                <Link to = '/Calorias'>
                    <img src={iconCalorias} className='flex-initial w-[3.5rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'></img>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar