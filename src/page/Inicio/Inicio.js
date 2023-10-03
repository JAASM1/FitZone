import React from 'react'
import img1 from '../../asset/img/inicio/img1.jpg'
import img2 from '../../asset/img/inicio/img2.jpg'

import iconEjercicio from '../../asset/icons/pesa (1).png'
import iconNutricion from '../../asset/icons/nutricion.png'
import iconCalorias from '../../asset/icons/calorias.png'
import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div className='text-white bg-[#333] font-Montserrat'>
      {/* banner principal */}
      <div className='flex'>
        <div className='flex flex-col absolute left-24 bottom-[7rem] gap-14'>
          <div className='text-6xl uppercase flex flex-col gap-5 tracking-[10px]'>
            <p className=' font-bold'>Transforma</p>
            <p className='font-extralight'>Tu cuerpo</p>
          </div>
          <div className='text-2xl font-extralight'>
            <p >Vuélvete <snap className='text-[#EFB810]'>fit</snap></p>
          </div>
          <div>
            <Link to='/Credenciales'>
              <button className='border-2 border-[#EFB810] p-2 px-5 rounded-full font-medium'>Iniciar ahora</button>
            </Link>
          </div>   
        </div>
        <div className='static'>
          <img src={img1} alt='' className=''></img>
        </div>
      </div>

      {/* Lo que ofrecemos */}
      <div className='flex flex-col p-20 gap-20'>
        <div>
          <p className='text-3xl font-bold uppercase'>Lo que <br/>ofrecemos</p>
        </div>
        <div className='grid grid-cols-3 gap-36'>
          <div className='bg-black w-[298px] h-[250px] flex flex-col justify-center p-10 gap-3 rounded-3xl'>
            <img src={iconEjercicio} alt='icono ejercicio' className='w-12'></img>
            <p className='text-lg uppercase font-medium'>Ejercicios</p>
            <p className='text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Nulla pulvinar ipsum sed massa maximus convallis.</p>
          </div>
          <div className='bg-black w-[298px] h-[250px] flex flex-col justify-center p-10 gap-3 rounded-3xl'>
            <img src={iconNutricion} alt='icono nutricion' className='w-12'></img>
            <p className='text-lg uppercase font-medium'>Nutricion</p>
            <p className='text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar ipsum sed massa maximus convallis.</p>
          </div>
          <div className='bg-black w-[298px] h-[250px] flex flex-col justify-center p-10 gap-3 rounded-3xl'>
            <img src={iconCalorias} alt='icono calorias' className='w-12'></img>
            <p className='text-lg uppercase font-medium'>Calorias</p>
            <p className='text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar ipsum sed massa maximus convallis.</p>
          </div>
        </div>
      </div>

      {/* motivacion */}
      <div className='flex flex-col items-end justify-center'>
        <div className='flex flex-col bg-[#EFB810] text-black w-[724px] h-[478px] gap-11 justify-center items-center absolute right-28'>
          <p className='text-4xl font-bold text-center uppercase tracking-[10px]'>Nunca es tarde <br/> para empezar</p>
          <p className='text-justify text-xl'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Nulla pulvinar ipsum sed <br/> massa maximus convallis. Nulla facilisi. Sed <br/> eget tortor nibh. Nunc at pulvinar nulla, ac <br/> volutpat turpis. In hac habitasse platea <br/> dictumst. </p>
        </div>
        <div>
          <img src={ img2 } alt=''/>
        </div>
      </div>

    </div>
  )
}

export default Inicio