import React from "react";
import fondo from "../../asset/img/login/pesaTelefono.jpg";
import VerContra from '../../asset/img/login/verContra.jpg'

function ContraOlvidado() {
  return (
    <div className="font-Montserrat">
      <picture>
        <img src={fondo} alt="" className="md:w-screen md:h-screen hidden sm:block md:block"/>
        <img src={VerContra} alt="" className="h-screen sm:hidden md:hidden"/>
      </picture>
      <div className="bg-[#272733] absolute rounded-[60px] opacity-90 w-[328px] h-96 top-[22%] ml-8 sm:top-14 sm:ml-[215px] md:w-[40%] md:h-[84%] md:top-14 md:ml-[29%]">
      </div>
      <div className='flex'>
        <p className="text-[#EFB810] absolute font-bold text-xl top-[180px] ml-14 sm:top-24 sm:ml-[31%] md:text-3xl md:top-20 md:ml-[36%]">
          Reestablece tu contraseña
        </p>
        <form className="absolute top-[34%] sm:top-[135px] sm:ml-[182px] md:top-[25%] md:ml-[20.5%]">
          <label for="correo" className="text-[#EFB810] font-bold text-base ml-24 md:ml-[100%] md:text-base">
            CORREO
          </label>
          <br />
          <input className="bg-[#717171] placeholder-white rounded-2xl ml-[69px] h-7 pl-4 w-64 md:ml-[90%] md:w-[225%] md:h-12 md:pl-5"
            id="correo" type="email" placeholder="chanchitofeliz@gmail.com"
          />
        </form>
        <form className="absolute top-[45.5%] sm:top-[62%] sm:ml-[182px] md:top-[40%] md:ml-[20.5%]">
          <label for="contra" className="text-[#EFB810] font-bold text-base ml-24 md:ml-[100%] md:text-base">
            CONTRASEÑA
          </label>
          <br/>
          <input className="bg-[#717171] placeholder-white rounded-2xl ml-[69px] h-7 pl-4 w-64 md:ml-[90%] md:w-[225%] md:h-12 md:pl-5"
            id="contra" type="password" placeholder="**************"
          />
        </form>
        <form className="absolute top-[57%] sm:top-[84%] sm:ml-[182px] md:top-[55%] md:ml-[20.5%]">
          <label for="contra" className="text-[#EFB810] font-bold text-base ml-24 md:ml-[100%] md:text-base">
            CONFIRMAR
          </label>
          <br/>
          <input className="bg-[#717171] placeholder-white rounded-2xl ml-[69px] h-7 pl-4 w-64 md:ml-[90%] md:w-[225%] md:h-12 md:pl-5"
            id="contra" type="password" placeholder="**************"
          />
        </form>
      </div>
      <div>
        <button className="absolute bg-[#EFB810] text-white rounded-2xl top-[70%] ml-[18.5%] w-[63%] h-8 sm:w-[35%] sm:top-[110%] sm:ml-[32%] md:top-[75%] md:w-64 md:h-10 md:ml-[41%]">
          Guardar contraseña nueva
        </button>
      </div>
    </div>
  );
}

export default ContraOlvidado;