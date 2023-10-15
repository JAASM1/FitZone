import React, { useState } from 'react'
import fondo from '../../asset/img/calorias/pesomuerto.jpg'
import { GrSearch } from "react-icons/gr";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';

function Calorias() {
  const [activity, setActivity] = useState('') // Inicializa con una cadena vacía
  const [caloriesData, setCaloriesData] = useState(null);

  const handleInputChange = (e) => {
    setActivity(e.target.value); // Actualiza el estado 'activity' con el valor del campo de entrada
  };

  const handleSearch = async () => {
    const apiKey = 'WtsnxJSNki7OXcUF1wGyKA==1ElJCbq4rHRH0vur';

    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/caloriesburned?activity=${activity}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      setCaloriesData(data); // Guarda los datos en el estado
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
          value={activity}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>
          <div className='ml-5 text-2xl'>
            <GrSearch/>
          </div>
        </button>
      </div>
      <div className='bg-black'>
        {caloriesData && (
          <div className='flex flex-wrap -mx-5 p-20'>
            {caloriesData.map((item, index) => (
              <div key={index} className='text-center w-1/3 px-5 mb-4'>
                <div className='text-white my-14 bg-[#333] rounded-2xl h-[50%] p-5 font-bold'>
                  <h3>{item.name}</h3>
                  <p>Calorías por hora: {item.calories_per_hour}</p>
                  <p>Duración en minutos: {item.duration_minutes}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Calorias