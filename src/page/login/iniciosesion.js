import React from "react";
import InisioSesion from "../../asset/img/login/pesaTelefono.jpg";
import VerInicio from '../../asset/img/login/verInicio.jpg'
import { Link } from "react-router-dom";

function iniciarSesion() {
  return (
    <div className="font-Montserrat">
      <picture>
        <img src={InisioSesion} alt="" className="md:h-screen md:w-screen hidden sm:block md:block"/>
        <img src={VerInicio} alt="" className='sm:hidden md:hidden h-screen'/>
      </picture>
      <div className="bg-[#272733] absolute rounded-[60px] opacity-90 w-[328px] h-96 top-[22%] ml-8 sm:top-14 sm:ml-[215px] md:w-[40%] md:h-[84%] md:top-14 md:ml-[29%]">
      </div>
      <div className="flex flex-col">
        <p className="text-[#EFB810] absolute font-bold text-xl top-[180px] ml-14 sm:top-24 sm:ml-[31%] md:text-3xl md:top-20 md:ml-[36%]">
          Inicia sesión para continuar
        </p>
        <form className="absolute top-56 sm:top-[140px] sm:ml-[182px] md:top-[22%] md:ml-[20.5%]">
          <label for="correo" className="text-[#EFB810] font-bold text-base ml-24 md:ml-[100%] md:text-base">
            CORREO
          </label>
          <br />
          <input className="bg-[#717171] placeholder-white rounded-2xl ml-[69px] h-7 pl-4 w-64 md:ml-[90%] md:w-[225%] md:h-12 md:pl-5"
            id="correo" type="email" placeholder="chanchitofeliz@gmail.com"
          />
        </form>
        <form className="absolute top-[45%] sm:top-[215px] sm:ml-[182px] md:top-[37%] md:ml-[20.5%]">
          <label for="contra" className="text-[#EFB810] font-bold text-base ml-24 md:ml-[100%] md:text-base">
            CONTRASEÑA
          </label>
          <br />
          <input className="bg-[#717171] placeholder-white rounded-2xl ml-[69px] h-7 pl-4 w-64 md:ml-[90%] md:w-[225%] md:h-12 md:pl-5"
            id="contra" type="password" placeholder="**************"
          />
        </form>
        <Link to="/Contraseña">
          <button className="absolute text-[#EFB810] font-bold text-sm ml-[18%] top-[53.5%] sm:top-[81%] sm:ml-64 md:top-[48%] md:ml-[47%] md:text-sm">
            ¿HA OLVIDADO LA CONTRASEÑA?
          </button>
        </Link>
        <div className="flex">
          <button className="absolute bg-[#EFB810] text-white rounded-2xl top-[61%] ml-[21%] h-7 w-24 sm:top-[95%] sm:ml-[35%] md:top-[57%] md:w-40 md:h-10 md:ml-[36%]">
            Acceder
          </button>
          <Link to="/Registrarse">
            <button className="absolute bg-[#EFB810] text-white rounded-2xl top-[61%] ml-[52%] w-28 h-7 sm:top-[95%] sm:ml-[51%] md:top-[57%] md:w-40 md:h-10 md:ml-[51%]">
              Registrarse
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute border-white border-1 md:top-[67%] md:ml-[34%] md:w-[30%] md:border-2">
      </div>
      <div>
        <div className="bg-white absolute top-[70%] w-24 h-7 ml-[23%] sm:top-[113%] sm:ml-[35%] md:p-5 md:w-40 md:top-[75%] md:ml-[37%]"></div>
        <div className="bg-white absolute top-[70%] w-24 h-7 ml-[52%] sm:top-[113%] md:p-5 md:w-40 md:top-[75%] md:ml-[51%]"></div>
      </div>
    </div>
  );
}

export default iniciarSesion;