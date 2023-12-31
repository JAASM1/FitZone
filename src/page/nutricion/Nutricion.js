import React from 'react'
import banner from '../../asset/img/nutricion/nutricion-banner.jpg'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'

function Nutricion() {
  return (
    <div className='font-Montserrat'>
        <Navbar/>
          {/* banner prinicipal */}
        <div>
          <img src={banner} alt='Tenedor y cinta métrica sobre fondo amarillo' className='w-full h-[25rem] md:h-[625px]'/>
          <div className='absolute left-[10%] top-[36%]'>
            <div className='w-[11.4375rem] h-[2.9375rem] border border-black flex items-center justify-center'>
                <p className='text-1.5xl leading-normal tracking-wider uppercase text-center '>Nutrición</p>
            </div>
          </div>
          <div className='absolute left-[10%] top-[48%]'>
            <p className='font-[700] text-white text-[2rem] md:text-[3.75rem]'>Empieza una dieta</p>
            <p className='font-[700] text-white text-[2rem] md:text-[3.75rem]'>balanceada hoy</p>
          </div>
        </div>
          {/* beneficios */}
        <div>
          <div className='w-full h-fit md:h-[30.875rem] bg-black relative flex justify-center items-center'>
            <p className='text-white absolute top-[2%] text-center md:left-[37%] md:top-[9%] text-lg'>Beneficios de tener una buena alimentación</p>
            <div className='flex p-20 mt-7 md:mt-0 md:p-0 flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-[15rem]'>
              <div className='w-[14.25rem] h-[14.25rem] rounded-[1.25rem] border border-amber-300 relative'>
                <p className='text-white font-[400] text-start mt-6 ml-7 mr-7 mb-2'>Mejora la salud cardiovascular</p>
                <p className='text-white font-[100] text-[0.8rem] w-[11rem] ml-7 mr-7'>Una alimentación equilibrada, 
                  rica en frutas, verduras, granos enteros y proteínas magras, 
                  puede reducir el riesgo de enfermedades cardiovasculares.</p>
              </div>
              <div className='w-[14.25rem] h-[14.25rem] rounded-[1.25rem] border border-amber-300 '>
              <p className='text-white font-[400] text-start mt-6 ml-7 mr-7 mb-2'>Mantiene un peso corporal saludable</p>
                <p className='text-white font-[100] text-[0.8rem] w-[11rem] ml-7 mr-7'>Una dieta balanceada 
                ayuda a prevenir la obesidad y sus complicaciones relacionadas.</p>
              </div>
              <div className='w-[14.25rem] h-[14.25rem] rounded-[1.25rem] border border-amber-300 '>
              <p className='text-white font-[400] text-start mt-6 ml-7 mr-7 mb-2'>Aumenta la energía y la concentración</p>
                <p className='text-white font-[100] text-[0.8rem] w-[11rem] ml-7 mr-7'>Nutrientes como las vitaminas y minerales 
                son esenciales para el funcionamiento óptimo del cerebro..</p>
              </div>    
            </div>
          </div>
        </div>
        {/* banner pequeño */}
        <div className='w-full h-[33rem] md:h-[16.81rem] bg-amber-400 relative  md:block'>
          <p className='text-white w-[22rem] md:w-fit font-bold text-[1.2rem] md:text-[1.40rem] tracking-widest absolute text-center left-[7%] top-[7%] md:left-[30%] md:top-[20%]'>Toda la información nutrimental que necesitas</p>
          <p className=' w-[10rem] md:w-[70.5rem] text-center text-white font-[100] absolute left-[29%] top-[22%] md:left-[14%] md:top-[40%] text-[0.9rem] md:text-[1.1rem]'>
          Fitzone extrae la información nutrimental de cualquier alimento del cual desees saber más.
          </p>
          <p className='w-[10rem] md:w-[60.5rem] text-center text-white font-[100] absolute left-[28%] md:left-[20%] top-[58%] md:top-[50%] text-[0.9rem] md:text-[1rem]'>
          Desde blogs de comida hasta menús y recetas, puede leer cualquier texto y calcular los datos nutricionales correspondientes.
          </p>
        </div>
        {/* zona de API */}
        <div className='w-full h-[30rem] bg-black relative'>
            <div>
              <p className='text-center text-[1rem] text-amber-400 font-[400] absolute top-[7%] left-[16%] md:top-[7%] md:left-[42%]'>Calcular información nutrimental</p>
              <div className='w-[23.65rem] h-[0.065rem] bg-zinc-700 absolute top-[16%] md:left-[39%]'></div>
            </div>
            <div className='w-[38.5rem] h-[16.187rem] absolute top-[22%] md:top-[25%] left-[15%] md:left-[30%] flex md:justify-center'>
              <div className='relative'>
                    <input
                      type='text'
                      placeholder='Busca un alimento aquí'
                      className='text-white font-semibold tracking-widest text-[0.8rem] w-[16rem] h-[2.9rem] bg-amber-400 outline-none rounded-3xl pl-4 pr-10'
                    />
                    <button type='submit' className='1cursor-pointer absolute right-0 top-[-7%] left-[85%] bottom-0 mt-4 mr-4 bg-zinc-800 z-10 w-[2.9rem] h-[3.1rem] rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" className='ml-3 md:ml-[4.5]' class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                      </svg>
                    </button>
              </div>
            </div>

            {/* mapeado de resultados */}
          <div className='w-[19rem] md:w-[31rem] md:h-[14rem] bg-zinc-700 rounded-xl absolute top-[40%] left-[12%] md:left-[34%]'>
            <p className='text-white text-[1.4rem] md:text-[2rem] font-[700] uppercase mt-5 ml-[5.5rem] md:ml-[10rem]'>ALIMENTO</p>
            <div className='w-[15rem] h-[10rem] md:ml-[8rem] ml-[2rem]'>
              <div className='w-[15rem] h-[2rem] flex justify-between mt-2'>
                <p className='text-white'>Calorías</p>
                <p className='text-amber-400'>54</p>
              </div>
              <div className='w-[15rem] h-[2rem] flex justify-between'>
                <p className='text-white'>Grasas totales</p>
                <p className='text-amber-400'>54</p>
              </div>
              <div className='w-[15rem] h-[2rem] flex justify-between'>
                <p className='text-white'>Proteína</p>
                <p className='text-amber-400'>54</p>
              </div>
              <div className='w-[15rem] h-[2rem] flex justify-between'>
                <p className='text-white'>Carbohidratos</p>
                <p className='text-amber-400'>54</p>
              </div>
            </div>
          </div>
        </div>
    <Footer/>
    </div>
  )
}

export default Nutricion