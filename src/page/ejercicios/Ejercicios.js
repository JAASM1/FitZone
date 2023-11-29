import { useState, useEffect, useRef } from "react";
import axios from "axios";

import bnnEjercicos from "../../asset/img/ejercicios/bnnEjercicio.webp";
import bnnMovilEjercicos from "../../asset/img/ejercicios/bnnMovil.jpg";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import { useAuth } from "../../Auth";

import { motion, useInView, useAnimation } from "framer-motion";
import Swal from "sweetalert2";

function Ejercicios() {
  const [count, setCount] = useState(""); // variables recibe el valor del button
  const [data, setData] = useState(); //variables de extraccion de datos de la api

  const [loading, setLoading] = useState(false);

  const [selectedType, setSelectedType] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [showAllCards, setShowAllCards] = useState(false);
  const [buttonText, setButtonText] = useState("Ver más");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    if (isLoggedIn) {
      fetch(
        `https://api.api-ninjas.com/v1/exercises?muscle=${count}&type=${selectedType}&difficulty=${selectedDifficulty}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "wHcDfLI1fmto6kZltETAlw==P3Nn9u6EhOKG5MfL",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setFiltered(data));
    }
  }, [count, selectedType, selectedDifficulty, isLoggedIn]);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };
  const handleButtonClick = async (muscle) => {
    if (isLoggedIn) {
      setCount(muscle);
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await axios.post("http://localhost:8080/fitzone/valorBoton", {
          buttonName: muscle,
        });
      } catch (error) {
        console.error(
          "Error al enviar la información del botón al backend:",
          error
        );
      } finally {
        setLoading(false);
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
      {/* div principal */}
      <div className="font-Montserrat bg-[#333333] text-white">
        <div ref={ref} className="flex items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col absolute md:left-48 max-md:ml-10 gap-2"
          >
            <p className="md:text-[3.5rem] text-2xl font-semibold">
              Bienvenido a tú guía de
            </p>
            <p className="md:text-7xl text-4xl text-[#EFB810] font-extrabold uppercase">
              Ejercicios
            </p>
          </motion.div>
          <div className="max-md:hidden">
            <img src={bnnEjercicos} alt="ejercicios" />
          </div>
          <div className="md:hidden">
            <img src={bnnMovilEjercicos} alt="ejercicios" />
          </div>
        </div>
        {/* <div className="bg-black h-[10rem] p-5">
          <p className="text-white text-2xl line-clamp-2 text-center font-semibold">
            Aquí obtendrás información sobre los ejercicios que puedes realizar
            <br /> por cada músculo de tu cuerpo
          </p>
        </div> */}
        <div className="flex flex-col items-center mt-10">
          <div>
            <p className="md:text-4xl text-lg max-md:text-center font-semibold mb-12">
              Selecciona un músculo para obtener información sobre los
              ejercicios
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            {/* ////////////////////////////////////Buttons/////////////////////////////////////// */}
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

            {/* Selectores de tipo y dificultad */}
            {isLoggedIn && (
              <div className="flex gap-5">
                <div className="space-x-2">
                  <label htmlFor="equipment" className="text-xl">
                    Type:
                  </label>
                  <select
                    id="equipment"
                    value={selectedType}
                    onChange={handleTypeChange}
                    className="bg-zinc-900 text-lg outline-[#EFB810] rounded-xl px-2 py-1 text-center"
                  >
                    <option value="">All</option>
                    <option value="strength">Strength</option>
                    <option value="stretching">Stretching</option>
                    <option value="powerlifting">Powerlifting</option>
                  </select>
                </div>
                <div className="space-x-2">
                  <label htmlFor="difficulty" className="text-xl">
                    Difficulty:
                  </label>
                  <select
                    id="difficulty"
                    value={selectedDifficulty}
                    onChange={handleDifficultyChange}
                    className="bg-zinc-900 text-lg outline-[#EFB810] rounded-xl px-3 py-1 text-center"
                  >
                    <option value="">All</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
              </div>
            )}

            {loading && (
              <div className="flex flex-col items-center">
                <p className="text-2xl font-Montserrat font-semibold text-white mt-10 mb-2">
                  Cargando
                </p>
                <div class="flex flex-row gap-2">
                  <div class="w-4 h-4 rounded-full bg-[#EFB810] animate-bounce"></div>
                  <div class="w-4 h-4 rounded-full bg-[#EFB810] animate-bounce [animation-delay:-.2s]"></div>
                  <div class="w-4 h-4 rounded-full bg-[#EFB810] animate-bounce [animation-delay:-.4s]"></div>
                </div>
              </div>
            )}
            {!loading && (
              // Mapeo de data
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.6,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="flex flex-col p-10 items-center gap-10"
              >
                <ul className="md:grid md:grid-cols-2 gap-5 max-md:space-y-5 transition-all ease-in-out">
                  {filtered
                    ?.slice(0, showAllCards ? filtered.length : 4)
                    .map((exercise) => (
                      // Contenedor de informacion
                      <li
                        key={exercise.id}
                        className={`bg-zinc-600 text-white capitalize md:p-10 p-5 rounded-3xl md:text-justify`}
                      >
                        <div className="max-md:space-y-1">
                          <h3 className="text-[#EFB810] font-semibold md:text-4xl text-3xl">
                            {exercise.name}
                          </h3>
                          <p className="text-xl">{exercise.muscle}</p>
                          <p className="text-xl">{exercise.type}</p>
                          <p className="text-xl">{exercise.equipment}</p>
                          <p className="text-xl">{exercise.difficulty}</p>
                          <p className="text-sm text-justify normal-case">
                            {exercise.instructions}
                          </p>
                          {/* {console.log(exercise.name,exercise.instructions)} */}
                        </div>
                      </li>
                    ))}
                </ul>
                {filtered.length > 4 && (
                  <button
                    className="btnStyles btnAnimation bg-black focus:bg-[#EFB810] hover:focus:shadow-amber-900 focus:text-black col-span-2"
                    type="button"
                    onClick={() => {
                      setShowAllCards(!showAllCards);
                      setButtonText(showAllCards ? "Ver más" : "Ver menos");
                    }}
                  >
                    {buttonText}
                  </button>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Ejercicios;
