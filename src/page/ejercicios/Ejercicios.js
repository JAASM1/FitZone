import { useState, useEffect } from "react";
import axios from "axios";
import bnnEjercicos from "../../asset/img/ejercicios/bnnEjercicio1.jpg";
import bnnMovilEjercicos from "../../asset/img/ejercicios/bnnMovil.jpg";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";

import { useAuth } from "../../Auth";
import Swal from "sweetalert2";

function Ejercicios() {
  const [count, setCount] = useState(""); // variables recibe el valor del button
  const [data, setData] = useState(); //variables de extraccion de datos de la api
  const [showMore, setShowMore] = useState(false); //variables para la funcionalidad Mostrar más/Mostrar menos

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${count}`, {
        method: "GET",
        headers: {
          "X-Api-Key": "wHcDfLI1fmto6kZltETAlw==P3Nn9u6EhOKG5MfL",
        },
      })
        .then((response) => response.json())
        .then((data) => setData(data));
    }
  }, [count, isLoggedIn]);

  const handleButtonClick = async (muscle) => {
    if (isLoggedIn) {
      setCount(muscle);

      try {
        await axios.post("http://localhost:8080/fitzone/valorBoton", {
          buttonName: muscle,
        });
      } catch (error) {
        console.error(
          "Error al enviar la información del botón al backend:",
          error
        );
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Inicia sesión para ver este contenido",
        footer: '<a href="/Iniciar sesion">Inicia sesión</a>',
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="font-Montserrat bg-[#333333] text-white">
        <div className="flex items-center">
          <div className="flex flex-col absolute md:left-48 max-md:ml-10">
            <p className="md:text-[3.5rem] text-2xl font-semibold">
              Bienvenido a tú guía de
            </p>
            <p className="md:text-7xl text-4xl text-[#EFB810] font-extrabold uppercase">
              Ejercicios
            </p>
          </div>
          <div className="max-md:hidden">
            <img src={bnnEjercicos} alt="ejercicios" />
          </div>
          <div className="md:hidden">
            <img src={bnnMovilEjercicos} alt="ejercicios" />
          </div>
        </div>

        <div className="flex flex-col items-center mt-10">
          <div>
            <p className="md:text-4xl text-lg max-md:text-center font-semibold mb-12">
              Selecciona el músculo que deseas ejercitar
            </p>
          </div>

          {/* ////////////////////////////////////Buttons/////////////////////////////////////// */}
          <div className="flex flex-col items-center gap-6">
            <div className="md:flex grid grid-cols-2 gap-5">
              <button
                className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black"
                type="button"
                onClick={() => {
                  handleButtonClick("adductors");
                }}
              >
                Adductor
              </button>
              <button
                className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black"
                type="button"
                onClick={() => {
                  handleButtonClick("abductors");
                }}
              >
                Abductors
              </button>
              <button
                className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black"
                type="button"
                onClick={() => {
                  handleButtonClick("abdominals");
                }}
              >
                Abdominals
              </button>
              <button
                className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black"
                type="button"
                onClick={() => {
                  handleButtonClick("biceps");
                }}
              >
                Biceps
              </button>
              <button
                className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black"
                type="button"
                onClick={() => {
                  handleButtonClick("chest");
                }}
              >
                Chest
              </button>
              <button
                className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black"
                type="button"
                onClick={() => {
                  handleButtonClick("calves");
                }}
              >
                Calves
              </button>
            </div>
            <div className="md:flex grid grid-cols-2 gap-5">
              <button
                className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black"
                type="button"
                onClick={() => {
                  handleButtonClick("forearms");
                }}
              >
                Forearms
              </button>
              <button
                className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black"
                type="button"
                onClick={() => {
                  handleButtonClick("glutes");
                }}
              >
                Glutes
              </button>
              <button
                className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black"
                type="button"
                onClick={() => {
                  handleButtonClick("hamstrings");
                }}
              >
                Hamstrings
              </button>
              <button
                className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black"
                type="button"
                onClick={() => {
                  handleButtonClick("lower_back");
                }}
              >
                Lower back
              </button>
              <button
                className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black"
                type="button"
                onClick={() => {
                  handleButtonClick("lats");
                }}
              >
                Lats
              </button>
              <button
                className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black"
                type="button"
                onClick={() => {
                  handleButtonClick("middle_back");
                }}
              >
                Middle back
              </button>
            </div>
            <div className="md:flex grid grid-cols-2 gap-5">
              <button
                className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black"
                type="button"
                onClick={() => {
                  handleButtonClick("neck");
                }}
              >
                Neck
              </button>
              <button
                className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black"
                type="button"
                onClick={() => {
                  handleButtonClick("triceps");
                }}
              >
                Triceps
              </button>
              <button
                className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black"
                type="button"
                onClick={() => {
                  handleButtonClick("traps");
                }}
              >
                Traps
              </button>
              <button
                className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black"
                type="button"
                onClick={() => {
                  handleButtonClick("quadriceps");
                }}
              >
                Quadriceps
              </button>
            </div>
            {/* Mapeo de data */}
            <div className="flex flex-col p-10">
              <ul className="md:grid md:grid-cols-2 gap-5 max-md:space-y-5">
                {data?.map((exercise) => (
                  <li
                    key={exercise.id}
                    className={`bg-zinc-600 text-white capitalize md:p-10 p-5 rounded-xl md:text-justify`}
                  >
                    <div className="max-md:space-y-1">
                      <h3 className="text-[#EFB810] font-semibold md:text-4xl text-3xl">
                        {exercise.name}
                      </h3>
                      <p className="text-xl">{exercise.muscle}</p>
                      <p className="text-xl">{exercise.equipment}</p>
                      <p className="text-xl">{exercise.difficulty}</p>
                      <p className="text-sm text-justify normal-case">
                        {exercise.instructions}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Ejercicios;
