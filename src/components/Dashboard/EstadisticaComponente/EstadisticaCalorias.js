import React, { useEffect, useState } from "react";

import axios from "axios";

import { HiOutlineTrophy } from "react-icons/hi2";

function EstadisticaCalorias() {
  const [topPalabras, setTopPalabras] = useState([]);

  useEffect(() => {
    const obtenerTopPalabras = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/fitzone/topPalabrasCalorias"
        );
        setTopPalabras(response.data.topPalabras);
      } catch (error) {
        console.error("Error al obtener las top palabras:", error);
      }
    };

    obtenerTopPalabras();
  }, []);
  return (
    <div className="flex flex-col items-center gap-5">
      <h3 className="text-4xl font-semibold text-white">Calorias</h3>
      <div className="border shadow-lg rounded-xl flex justify-center items-center w-[275px] h-[200px] bg-white">
        <ul className="capitalize space-y-3 text-center">
          {topPalabras.map((palabra, index) => (
            <li
              key={index}
              className={
                index === 0
                  ? `text-3xl text-[#EFB810] font-bold flex gap-2 items-center`
                  : "text-xl font-semibold"
              }
            >
              {palabra}
              {
                index === 0 ? <HiOutlineTrophy className=""/> : ''
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EstadisticaCalorias;
