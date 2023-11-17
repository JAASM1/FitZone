import React, { useState } from "react";
import fondo from "../../asset/img/calorias/pesomuerto.jpg";
import { GrSearch } from "react-icons/gr";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import Swal from "sweetalert2";
import { useAuth } from "../../Auth";

function Calorias() {
  const [activity, setActivity] = useState(""); // Inicializa con una cadena vacía
  const [caloriesData, setCaloriesData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useAuth();
  const handleInputChange = (e) => {
    setActivity(e.target.value); // Actualiza el estado 'activity' con el valor del campo de entrada
  };

  const handleSearch = async () => {
    if (!isLoggedIn) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Inicia sesión para ver este contenido",
        footer: '<a href="/Iniciar sesion">Inicia sesión</a>',
      });
      return;
    }
    setLoading(true);

    const apiKey = "WtsnxJSNki7OXcUF1wGyKA==1ElJCbq4rHRH0vur";

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/caloriesburned?activity=${activity}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      // Almacena la palabra buscada en la base de datos
      await fetch("http://localhost:8080/fitzone/guardarBusquedaCalorias", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ palabra: activity }),
      });

      const data = await response.json();
      if(data.length === 0) {
        Swal.fire({
          icon: "info",
          title: "Información",
          text: "No se encontraron resultados para la palabra buscada",
        });
      } else {
        setCaloriesData(data); // Guarda los datos en el estado
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-Montserrat">
      <Navbar />
      {/* banner principal */}
      <div>
        <div>
          <img src={fondo} alt="" />
        </div>
        <div className="absolute inset-0 text-2xl justify-center top-1/3 font-bold grid sm:top-80 sm:text-4xl md:text-6xl md:justify-center md:items-end md:ml-[30%]">
          <p>
            <span className="text-[#EFB810]">Construye</span>{" "}
            <span className="text-white">tu mejor versión</span> <br />
            <span className="text-white">este año</span>{" "}
            <span className="text-[#EFB810]">sin excusas</span>
          </p>
        </div>
      </div>
      {/* Motor de busqueda */}
      <div className="bg-[#EFB810] p-6">
        <input
          className="bg-[#ffffff] placeholder-black rounded-md h-10 text-center align-super ml-1 w-72 sm:ml-12 sm:w-[80%] md:w-[40%] md:ml-[28%]"
          type="text"
          placeholder="Busca una actividad para saber cuantas calorias vas a quemar"
          value={activity}
          onChange={handleInputChange}
          // palabras de la api: run, skiing, golf, walk, soccer, basketball, cycling, jump, karate, boxing
        />
        <button onClick={handleSearch}>
          <div className="ml-5 text-2xl">
            <GrSearch />
          </div>
        </button>
      </div>
      <div className="bg-black h-screen flex justify-center items-center">
        {!loading && !caloriesData &&(
          <div className="text-white text-center">
            <p className="text-5xl">No se encontraron resultados</p>
            <p className="text-xl">Prueba buscando términos como "run", "skiing" o "cycling"</p>
          </div>
        )}
        {loading && (
          <div className="text-white text-5xl text-center">
            <p>Cargando...</p>
          </div>
        )}
        {!loading && caloriesData && (
          <div className={`grid md:grid-cols-${Math.min(caloriesData.length, 3)} md:overflow-x-autos md:gap-7 place-content-center`}>
            {caloriesData.map((item, index) => (
              <div key={index} className="bg-[#333] rounded-2xl font-bold w-[400px] h-[200px]">
                <div className="relative overflow-hidden flex flex-col justify-center items-center mt-[15%]">
                  <h3 className="text-[#EFB810] text-lg">{item.name}</h3>
                  <p className="text-white">Calorías por hora: {item.calories_per_hour}</p>
                  <p className="text-white">Duración en minutos: {item.duration_minutes}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Calorias;
