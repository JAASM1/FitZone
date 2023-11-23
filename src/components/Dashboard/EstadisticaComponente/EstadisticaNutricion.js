import React, { useEffect, useState } from "react";
import axios from "axios";

import { HiOutlineTrophy } from "react-icons/hi2";

function EstadisticaNutricion() {
  const [topPalabras, setTopPalabras] = useState([]);

  useEffect(() => {
    const obtenerTopPalabras = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/fitzone/topPalabrasNutricion"
        );
        setTopPalabras(response.data.topPalabras);
      } catch (error) {
        console.error("Error al obtener las top palabras:", error);
      }
    };

    obtenerTopPalabras();
  }, []);
  return (
    <div className="flex flex-col items-center md:gap-5 gap-3">
      <h3 className="md:text-4xl text-3xl font-semibold text-white">Nutrición</h3>
      <div className="border shadow-lg rounded-xl flex justify-center items-center md:w-[275px] md:h-[200px] w-[225px] h-[150px] bg-white">
        <ul className="capitalize space-y-3 text-center">
          {topPalabras.map((palabra, index) => (
            <li
              key={index}
              className={
                index === 0
                  ? `md:text-3xl text-2xl text-[#EFB810] font-bold flex gap-2 items-center`
                  : "md:text-xl text-lg font-semibold"
              }
            >
              {palabra}
              {index === 0 ? <HiOutlineTrophy className="" /> : ""}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EstadisticaNutricion;
