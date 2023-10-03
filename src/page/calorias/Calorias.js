import React from 'react'
import box from '../../asset/img/calorias/Box calo.jpg'
import { GrSearch } from "react-icons/gr";

function Calorias() {
  return(
    <div className='font-Montserrat'>
      {/* banner principal */}
      <div>
        <img src={box} alt='' className='w-full h-[625px]'/>
        <div className='absolute ml-[33%] top-[78%]'>
          <p className='text-6xl font-bold'>
            <span className='text-[#EFB810]'>Construye</span> <span className='text-white'>tu mejor versión</span> <br/> 
            <span className='text-white'>este año</span> <span className='text-[#EFB810]'>sin excusas</span>
          </p>
        </div>
      </div>
      {/* Motor de busqueda */}
      <div className='bg-[#EFB810] p-6'>
        <input className='w-[40%] bg-[#333333] placeholder-white rounded-md h-10 text-center ml-[28%]' 
          type='text' 
          placeholder='Busca una actividad para saber cuantas calorias vas a quemar'
        />
        <button className='rounded-full bg-white w-16 h-16'>
          <div className='ml-6'>
            <GrSearch/>
          </div>
        </button>
      </div>

    </div>
  )
}

export default Calorias