import React from 'react'
import { Link } from 'react-router-dom'

function footer() {
  return (
    <div className='bg-[#333] py-14'>
        <div className='flex justify-center items-center'>
            <button className='border-[#EFB810] border-2 text-white font-bold uppercase text-sm px-24 py-4 rounded-xl'>Arriba</button>
        </div>
        <div>
          <div>
            <p className='text-white font-bold text-base'>Sobre FitZone</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar ipsum sed massa maximus convallis. Nulla facilisi. Sed eget tortor nibh. Nunc at pulvinar nulla, ac volutpat turpis. In hac habitasse platea dictumst. </p>
          </div>

          <div>
            <p className='text-white font-bold'>Siguenos</p>
          </div>

          <div>
            <p>Explora FitZone</p>
            <div>
              <Link to='/'>
                  <p className='uppercase  text-white'>Inicio</p>        
              </Link>

              <Link to='/Ejercicios'>
                    <p className='text-white uppercase font-medium'>Ejercicios</p>
              </Link>

              <Link to = '/Nutricion'>
                    <p className='text-white uppercase font-medium'>Nutricion</p>
              </Link>

              <Link to = '/Calorias'>
                    <p className='text-white uppercase font-medium'>Calorias</p>
              </Link>              
            </div>
          </div>
        </div>
    </div>
  )
}

export default footer