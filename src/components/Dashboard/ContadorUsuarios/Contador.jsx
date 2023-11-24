import React, { useState, useEffect } from "react";
import axios from "axios";

const Contador = () => {
  const [userCount, setUserCount] = useState(0);
  useEffect(() => {
    const contadorUsuarios = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/fitzone/userCount"
        );
        setUserCount(response.data.userCount);
      } catch (error) {
        console.error("Error al obtener el conteo de usuarios", error);
      }
    };
    contadorUsuarios();
  }, []);
  return (
    <div className="flex flex-col items-center p-5 font-Montserrat gap-2">
      <p className="text-white text-2xl text-center font-semibold">
        Usuarios registrados:
      </p>
      <div className="bg-white w-16 h-16 flex justify-center items-center rounded-lg">
        <p className="text-[#EFB810] text-4xl font-semibold">{userCount}</p>
      </div>
    </div>
  );
};

export default Contador;
