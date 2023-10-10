import React from 'react'
import bnnEjercicos from '../../asset/img/ejercicios/bnnEjercicio1.jpg'

function Ejercicios() {

  return (
    <div className='font-Montserrat bg-[#333333] text-white'>

      <div className='flex items-center'>
        <div className='flex flex-col absolute left-48'>
          <p className='text-[3.5rem] font-semibold'>Bienvenido a tú guía de</p>
          <p className='text-7xl text-[#EFB810] font-extrabold uppercase'>Ejercicios</p>
        </div>
        <div>
          <img src={ bnnEjercicos } alt='ejercicios'/>
        </div>
      </div>
      
      <div className='flex flex-col items-center mt-10'>
        <div>
          <p className='text-4xl font-semibold mb-12'>Selecciona el músculo que deseas ejercitar</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex gap-3'>
            <button className='btnStyles Adductor bg-black focus:bg-[#EFB810] focus:text-black' type='button'>Adductor</button>
            <button className='btnStyles bg-black focus:bg-[#EFB810] focus:text-black' type='button'>Abductors</button>
            <button className='btnStyles bg-black focus:bg-[#EFB810] focus:text-black' type='button'>Abdominals</button>
            <button className='btnStyles bg-black focus:bg-[#EFB810] focus:text-black' type='button'>Biceps</button>
            <button className='btnStyles bg-black focus:bg-[#EFB810] focus:text-black' type='button'>Chest</button>
            <button className='btnStyles bg-black focus:bg-[#EFB810] focus:text-black' type='button'>Calves</button>
          </div>
          <div className='flex gap-3'>
            <button className='btnStyles bg-black focus:bg-[#EFB810] focus:text-black' type='button'>Forearms</button>
            <button className='btnStyles bg-black focus:bg-[#EFB810] focus:text-black' type='button'>Glutes</button>
            <button className='btnStyles bg-black focus:bg-[#EFB810] focus:text-black' type='button'>Hamstrings</button>
            <button className='btnStyles bg-black focus:bg-[#EFB810] focus:text-black' type='button'>Lower back</button>
            <button className='btnStyles bg-black focus:bg-[#EFB810] focus:text-black' type='button'>Lats</button>
            <button className='btnStyles bg-black focus:bg-[#EFB810] focus:text-black' type='button'>Middle back</button>
          </div>
          <div className='flex gap-3'>
            <button className='btnStyles bg-black focus:bg-[#EFB810] focus:text-black' type='button'>Neck</button>
            <button className='btnStyles bg-black focus:bg-[#EFB810] focus:text-black' type='button'>Triceps</button>
            <button className='btnStyles bg-black focus:bg-[#EFB810] focus:text-black' type='button'>Traps</button>
            <button className='btnStyles bg-black focus:bg-[#EFB810] focus:text-black' type='button'>Quadriceps</button>
          </div>

 

        </div>
      </div>
    </div>
  )
}

export default Ejercicios