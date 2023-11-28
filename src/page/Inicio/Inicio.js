import React, { useEffect, useRef, useState } from "react";
import img1 from "../../asset/img/inicio/img1.jpg";
import img2 from "../../asset/img/inicio/img2.jpg";
import imgMovil from "../../asset/img/inicio/imgMovil.jpg";
import imgMovil2 from "../../asset/img/inicio/imgMovil2.jpg";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";

import { motion, useInView, useAnimation } from "framer-motion";
import iconEjercicio from "../../asset/icons/pesa (1).png";
import iconNutricion from "../../asset/icons/nutricion.png";
import iconCalorias from "../../asset/icons/calorias.png";
import { Link } from "react-router-dom";
import { useAuth } from '../../Auth'
import { jwtDecode } from 'jwt-decode'

function Inicio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const { isLoggedIn } = useAuth()
  const [username, setUserName] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        setUserName(decodedToken.user_name);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); 



  return (
    <div ref={ref}>
      <div className="text-white bg-[#333] font-Montserrat">
        <Navbar />
        {/* banner principal */}
        <div className="flex">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col absolute md:left-24 md:bottom-[7rem] md:gap-14 left-4 pt-20 gap-5"
          >
            <div className="md:text-6xl text-3xl uppercase flex flex-col md:gap-5 tracking-[10px]">
              <p className=" font-bold">Transforma</p>
              <p className="font-extralight">Tu cuerpo</p>
            </div>
            <div className="md:text-2xl text-lg font-extralight">
              <p>
                Vuélvete <snap className="text-[#EFB810]">fit</snap>
              </p>
            </div>
            <div>
              {isLoggedIn ? (
              <p>Bienvenido, <span className='text-[#EFB810]'>{username}</span> </p>
            ):             <Link to="/Iniciar sesion">
              <button className="border-2 border-[#EFB810] p-2 px-5 rounded-full font-medium">
                  Iniciar ahora
                </button>
            </Link>}

            </div>
          </motion.div>
          <div className="max-md:hidden">
            <img src={img1} alt=""></img>
          </div>
          <div className="md:hidden static">
            <img src={imgMovil} alt=""></img>
          </div>
        </div>

        {/* Lo que ofrecemos */}
        <div className="flex flex-col p-20 gap-20">
          <div className="flex max-md:justify-center">
            <p className="text-3xl font-bold uppercase max-md:text-center">
              Lo que <br />
              ofrecemos
            </p>
          </div>
          <div className="grid md:grid-cols-3 md:gap-36 gap-5 justify-center">
            <div className="bg-black w-[298px] h-[250px] flex flex-col justify-center items-center p-10 gap-3 rounded-3xl">
              <img
                src={iconEjercicio}
                alt="icono ejercicio"
                className="w-12"
              ></img>
              <p className="text-lg uppercase font-medium">Ejercicios</p>
              <p className="text-sm font-light text-center">
                Proporcionar información sobre ejercicios específicos dirigidos
                a diferentes grupos musculares
              </p>
            </div>
            <div className="bg-black w-[298px] h-[250px] flex flex-col justify-center items-center p-10 gap-3 rounded-3xl">
              <img
                src={iconNutricion}
                alt="icono nutricion"
                className="w-12"
              ></img>
              <p className="text-lg uppercase font-medium">Nutricion</p>
              <p className="text-sm font-light text-center">
                Ofrecer recetas y detalles nutricionales para una alimentación
                saludable
              </p>
            </div>
            <div className="bg-black w-[298px] h-[250px] flex flex-col justify-center items-center p-10 gap-3 rounded-3xl">
              <img
                src={iconCalorias}
                alt="icono calorias"
                className="w-12"
              ></img>
              <p className="text-lg uppercase font-medium">Calorias</p>
              <p className="text-sm font-light text-center">
                Calcular y mostrar la cantidad de calorías quemadas durante
                diferentes actividades físicas
              </p>
            </div>
          </div>
        </div>

        {/* motivacion */}
        <div className="flex flex-col items-end justify-center">
          <div className="flex flex-col bg-[#EFB810] text-black md:w-[724px] md:h-[478px] w-[250px] h-[180px] md:gap-11 gap-2 justify-center items-center absolute md:right-28 right-5">
            <p className="md:text-4xl text-xs font-bold text-center uppercase md:tracking-[10px]">
              Nunca es tarde <br /> para empezar
            </p>
            <p className="text-center md:text-xl text-[10px]">
              "El cambio comienza hoy. Cada pequeño paso
              <br /> cuenta en tu viaje hacia una vida más saludable.
              <br /> Con determinación, construyes un mañana más fuerte.
              <br /> ¡Hoy, da ese primer paso hacia tu mejor versión!"
            </p>
          </div>
          <div>
            <img src={img2} alt="" className="max-md:hidden" />
            <img src={imgMovil2} alt="" className="md:hidden" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Inicio;
