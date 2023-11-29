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
    <div className="flex flex-col items-center justify-center font-Montserrat">
      <p className="text-white text-xl text-center font-semibold">
        Usuarios registrados:
      </p>
      <div className="w-16 h-10 flex justify-center items-center rounded-lg">
        <p className="text-[#EFB810] text-4xl font-semibold">{userCount}</p>
      </div>
    </div>
  );
};

export default Contador;
