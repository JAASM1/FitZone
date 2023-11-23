import React, { useState, useEffect } from "react";
import axios from "axios";

import { HiOutlineTrophy } from "react-icons/hi2";

function EstadisticaEjercicios() {
  const [topButtons, setTopButtons] = useState([]);

  useEffect(() => {
    const obtenerTopButtons = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/fitzone/topValorBotones"
        );
        setTopButtons(response.data.topButtons);
      } catch (error) {
        console.error("Error al obtener las top palabras de botones:", error);
      }
    };

    obtenerTopButtons();
  }, []);
  return (
    <div className="flex flex-col items-center md:gap-5 gap-3">
      <h3 className="md:text-4xl text-3xl font-semibold text-white">Ejercicios</h3>
      <div className="border shadow-lg rounded-xl flex justify-center items-center md:w-[275px] md:h-[200px] w-[225px] h-[150px] bg-white">
        <ul className="capitalize space-y-3 text-center">
          {topButtons.map((boton, index) => (
            <li
              key={index}
              className={
                index === 0
                  ? `md:text-3xl text-2xl text-[#EFB810] font-bold flex gap-2 items-center`
                  : "text-lg md:text-xl font-semibold"
              }
            >
              {boton}
              {index === 0 ? <HiOutlineTrophy className="" /> : ""}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EstadisticaEjercicios;
