import React from 'react'
import fondo from '../../asset/img/calorias/pesomuerto.jpg'
import { GrSearch } from "react-icons/gr";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';

function Calorias() {
  return(
    <div className='font-Montserrat'>
      <Navbar/>
      {/* banner principal */}
      <div>
        <div>
          <img src={fondo} alt=''/>
        </div>
        <div className='absolute flex inset-0 text-2xl justify-center top-[28%] font-bold 
          sm:text-4xl sm:top-[50%] sm:ml-[23%] 
          md:text-6xl md:justify-center md:items-end md:ml-[30%]'>
          <p>
            <span className='text-[#EFB810]'>Construye</span> <span className='text-white'>tu mejor versión</span> <br/> 
            <span className='text-white'>este año</span> <span className='text-[#EFB810]'>sin excusas</span>
          </p>
        </div>
      </div>
      {/* Motor de busqueda */}
      <div className='bg-[#EFB810] p-6'>
        <input className='bg-[#ffffff] placeholder-black rounded-md h-10 text-center
          ml-16
          sm:w-[80%] sm:ml-12
          md:w-[40%] md:ml-[28%]' 
          type='text' 
          placeholder='Busca una actividad para saber cuantas calorias vas a quemar'
        />
        <button>
          <div className='ml-5 text-2xl'>
            <GrSearch/>
          </div>
        </button>
      </div>
      <Footer/>
    </div>
  )
}

export default Calorias