import { useAuth } from "../../Auth"; // Asegúrate de tener la ruta correcta
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import Sidebar from "./side";
import EstadisticaCalorias from "./EstadisticaComponente/EstadisticaCalorias.js";
import EstadisticaNutricion from "./EstadisticaComponente/EstadisticaNutricion.js";
import EstadisticaEjercicios from "./EstadisticaComponente/EstadisticaEjercicios.js";

import { GoAlert } from "react-icons/go";
import { BsHouse } from "react-icons/bs";

function Estadisticas() {
  const { isAdmin, setIsAdmin, isLoggedIn } = useAuth();

  useEffect(() => {
    const checkAdminStatus = async () => {
      // Realiza la lógica necesaria para determinar si el usuario es un administrador
      // Puedes hacer una llamada a la API o verificar el token, según tu implementación
      // Por ejemplo, si estás utilizando el token decodificado, puedes hacer algo como:

      const storedToken = localStorage.getItem("token");

      if (storedToken) {
        const decodedToken = jwtDecode(storedToken);

        if (decodedToken && decodedToken.user_type === 1) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      }
    };

    checkAdminStatus();
  }, [setIsAdmin]);

  // Verifica si el usuario está autenticado y es un administrador antes de mostrar el contenido del dashboard
  if (!isLoggedIn || !isAdmin) {
    // Si el usuario no está autenticado o no es un administrador, puedes redirigirlo o mostrar un mensaje de acceso denegado
    return (
      <div className="bg-zinc-800 h-screen font-Montserrat flex flex-col justify-center items-center gap-5">
        <GoAlert className="text-6xl text-[#EFB810] animate-pulse [animation-delay:0.02s]" />
        <h1 className="text-white text-4xl font-bold text-center">
          <span className="text-[#EFB810]">Acceso denegado.</span> <br />
          No tienes los permisos necesarios.
        </h1>
        <a
          href="/"
          className="flex items-center gap-2 bg-[#EFB810] py-1 px-2 rounded-2xl transition-all ease-out hover:-translate-y-2 hover:scale-110 shadow-md hover:shadow-yellow-900"
        >
          <BsHouse className="text-2xl text-white" />
          <p className="text-white font-semibold">Regresemos</p>
        </a>
      </div>
    );
  }
  return (
    <div className="flex font-Montserrat">
      <Sidebar />
      <div className="w-[full] min-h-min relative md:m-10 m-2 md:ml-[11rem] flex flex-col items-center gap-10">
        <h1 className="md:text-5xl text-3xl max-md:text-center font-bold text-[#EFB810] md:mb-[4rem] mb-5">
          Palabras más buscadas{" "}
        </h1>
        <section className="md:flex gap-28 max-md:space-y-5 md:mb-10">
          <EstadisticaEjercicios />
          <EstadisticaNutricion />
          <EstadisticaCalorias />
        </section>
      </div>
    </div>
  );
}

export default Estadisticas;
