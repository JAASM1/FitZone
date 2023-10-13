import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-[#333] py-14 text-white flex flex-col gap-y-7 font-Montserrat tracking-[1.5px]'>
        <div className='flex justify-center items-center'>
            <button className='border-[#EFB810] border-2 text-white font-bold uppercase md:text-sm text-xs md:px-24 md:py-4 px-12 py-2 rounded-xl'>Arriba</button>
        </div>
        
        <div className='grid md:grid-cols-3 mx-16'>
          <div className='flex flex-col items-center md:gap-12 gap-5'>
            <p className='font-bold uppercase'>Siguenos</p>
            <div className='flex gap-6 max-md:pb-6'>
              {/* twitter */}
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#EFB810" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
              </a>
              
              {/* facebook */}
              <a href='#'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#EFB810" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </a>
              
              {/* instagram */}
              <a href='#'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#EFB810" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M16.5 7.5l0 .01" />
                </svg>
              </a>
              

            </div>
          </div>

          <div className='flex flex-col gap-8 max-md:items-center'>
            <p className='font-bold md:text-lg text-xs uppercase'>Sobre FitZone</p>
            <p className='md:mr-10 md:font-light font-extralight max-md:text-xs max-md:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar ipsum sed massa maximus convallis. Nulla facilisi. Sed eget tortor nibh. Nunc at pulvinar nulla, ac volutpat turpis. In hac habitasse platea dictumst. </p>
          </div>



          <div className='flex flex-col md:items-end md:text-end text-center pt-6'>
            <p className='text-lg font-bold uppercase'>Explora FitZone</p>
            <div className='font-light md:pt-8 pt-6'>
              <Link to='/'>
                  <p className='uppercase'>Inicio</p>        
              </Link>

              <Link to='/Ejercicios'>
                    <p className='uppercase'>Ejercicios</p>
              </Link>

              <Link to = '/Nutricion'>
                    <p className='uppercase'>Nutricion</p>
              </Link>

              <Link to = '/Calorias'>
                    <p className='uppercase'>Calorias</p>
              </Link>           

              <Link to= '/Bienvenida'>
                    <p className='uppercase'>Dashboard</p>  
              </Link>   
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer