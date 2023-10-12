import React from "react";
import fondo from "../../asset/img/login/pesaTelefono.jpg";

function ContraOlvidado() {
  return (
    <div className="font-Montserrat">
      <picture>
        <img src={fondo} alt="" className="h-96 sm:h-full sm:w-full md:h-screen"/>
      </picture>
      <div className="bg-[#272733] absolute rounded-[8%] opacity-90
        w-[80%] h-[40%] top-[22%] ml-[10%]
        sm:w-[55%] sm:h-[62%] sm:top-[27%] sm:ml-[22.5%]
        md:w-[40%] md:h-[84%] md:top-[30%] md:ml-[30%]">
      </div>
      <div className='flex'>
        <p className="text-[#EFB810] absolute font-bold 
          text-xl top-[22.6%] ml-[20.5%]
          sm:text-xl sm:top-[28.5%] sm:ml-[31%]
          md:text-3xl md:top-[35%] md:ml-[36%]">
          Reestablece tu contraseña
        </p>
        <form className="absolute top-[29%] sm:top-[35%] sm:ml-[21%] md:top-[45%] md:ml-[21%]">
          <label for="correo" className="text-[#EFB810] font-bold
            text-base ml-[45%]
            sm:text-sm sm:ml-[33%] 
            md:ml-[100%] md:text-base">
            CORREO
          </label>
          <br />
          <input className="bg-[#717171] placeholder-white rounded-2xl 
            ml-[33%] h-7 pl-4 w-[125%]
            sm:w-[150%] sm:h-8 sm:ml-[25%] sm:pl-5
            md:ml-[90%] md:w-[220%] md:h-12 md:pl-5"
            id="correo" type="email" placeholder="chanchitofeliz@gmail.com"
          />
        </form>
        <form className="absolute top-[37%] sm:top-[47%] sm:ml-[21%] md:top-[60%] md:ml-[21%]">
          <label for="contra" className="text-[#EFB810] font-bold 
            text-base ml-[45%]
            sm:text-sm sm:ml-[33%]
            md:ml-[100%] md:text-base">
            CONTRASEÑA
          </label>
          <br/>
          <input className="bg-[#717171] placeholder-white rounded-2xl
            ml-[33%] h-7 pl-4 w-[125%]
            sm:w-[150%] sm:h-8 sm:ml-[25%] sm:pl-5
            md:ml-[90%] md:w-[220%] md:h-12 md:pl-5"
            id="contra" type="password" placeholder="**************"
          />
        </form>
        <form className="absolute top-[45%] sm:top-[59%] sm:ml-[21%] md:top-[75%] md:ml-[21%]">
          <label for="contra" className="text-[#EFB810] font-bold 
            text-base ml-[45%]
            sm:text-sm sm:ml-[33%]
            md:ml-[100%] md:text-base">
            CONFIRMAR
          </label>
          <br/>
          <input className="bg-[#717171] placeholder-white rounded-2xl
            ml-[33%] h-7 pl-4 w-[125%]
            sm:w-[150%] sm:h-8 sm:ml-[25%] sm:pl-5
            md:ml-[90%] md:w-[220%] md:h-12 md:pl-5"
            id="contra" type="password" placeholder="**************"
          />
        </form>
      </div>
      <div>
        <button className="absolute bg-[#EFB810] text-white rounded-2xl
          top-[54%] ml-[20%] w-[60%] h-8
          sm:top-[73%] sm:ml-[30%] sm:w-[40%] sm:h-8
          md:top-[95%] md:w-[20%] md:h-[5%] md:ml-[40%]">
          Guardar contraseña nueva
        </button>
      </div>
    </div>
  );
}

export default ContraOlvidado;