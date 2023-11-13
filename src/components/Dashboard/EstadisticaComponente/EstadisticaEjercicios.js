import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="flex flex-col items-center gap-5">
      <h3 className="text-4xl font-semibold">Ejercicios</h3>
      <div className="border shadow-lg rounded-xl flex justify-center items-center w-[275px] h-[200px] bg-zinc-800 text-white">
        <ul className="list-decimal capitalize space-y-3">
          {topButtons.map((boton, index) => (
            <li
              key={index}
              className={
                index === 0
                  ? "text-2xl text-[#EFB810] font-semibold"
                  : "text-xl text-white"
              }
            >
              {boton}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EstadisticaEjercicios;
