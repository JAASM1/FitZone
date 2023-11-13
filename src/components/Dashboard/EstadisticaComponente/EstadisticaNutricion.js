import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="flex flex-col items-center gap-5">
      <h3 className="text-4xl font-semibold">Nutrición</h3>
      <div className="border shadow-lg rounded-xl flex justify-center items-center w-[275px] h-[200px] bg-zinc-800 text-white">
        <ul className="list-decimal capitalize space-y-3">
          {topPalabras.map((palabra, index) => (
            <li
              key={index}
              className={
                index === 0
                  ? "text-2xl text-[#EFB810] font-semibold"
                  : "text-xl text-white"
              }
            >
              {palabra}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EstadisticaNutricion;
