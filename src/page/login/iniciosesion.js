import React from "react";
import { Link } from "react-router-dom";

function iniciarSesion() {
  return (
    <div className="font-Montserrat">
      <div className="bg-image h-screen bg-cover flex justify-center items-center">
        <div className="bg-[#272733] relative overflow-hidden rounded-3xl w-[750px] h-[480px]">
          <div className="absolute top-0 h-[100%] transition-all ease-in-out left-0 w-[50%]">
            <form className="bg-[#272733] flex justify-center items-center flex-col px-10 h-[100%] text-[#EFB810]">
              <h1 className="font-bold text-2xl mb-5">Iniciar sesion</h1>
              <span className="font-serif text-sm mb-2 text-white">o utilice su contraseña de correo electrónico</span>
              <input type="email" id="email" placeholder="Correo" className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none my-5 mx-15 p-2 rounded-md font-mono"/>
              <input type="password" id="password" placeholder="Contraseña" className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none mx-15 p-2 rounded-md font-mono"/>
              <Link to='/Contraseña'>
                <p className="p-5 font-serif">¿Ha olvidado su contraseña?</p>
              </Link>
              <Link>
                <button className="bg-[#EFB810] cursor-pointer text-[#272733] uppercase p-2 rounded-lg w-40 font-mono" type='submit'>
                  Acceder
                </button>
              </Link>
            </form>
          </div>
          <div className="absolute top-0 left-[50%] w-[50%] h-[100%] overflow-hidden rounded-bl-[100px] rounded-tl-[150px] z-96 transition-all ease-in-out">
            <div className="bg-[#EFB810] relative h-[100%] w-[200%] transition-all ease-in-out text-[#272733]">
              <div className="absolute w-[50%] h-[100%] flex justify-center items-center flex-col text-center top-0 transition-all ease-in-out px-[30px]">
                <h1 className="font-bold text-2xl">Hola, GymBro!</h1>
                <p className="m-[40px] font-serif text-sm">Regístrese con sus datos personales para utilizar todas las funciones del sitio web</p>
                <Link to='/Registrarse'>
                  <button className=" bg-transparent border-[#272733] p-2 border-2 rounded-lg w-40 font-mono">
                    Registrate
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default iniciarSesion;