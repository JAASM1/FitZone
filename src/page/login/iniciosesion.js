import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { useAuth } from "../../Auth";
import { jwtDecode } from "jwt-decode";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

function IniciarSesion() {
  const navigate = useNavigate()
  const { login, loginAdmin } = useAuth();
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (user_email.trim() === ''){
      setError("Por favor, ingresa tu correo electrónico antes de continuar.")
      return;
    }
    if (user_password.trim() === ''){
      setError("Ingresa tu contraseña antes de continuar.")
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:8080/fitzone/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_email, user_password }),
        }
      );

      if (response.ok) {

        const data = await response.json();
        const token = data.token;
        localStorage.setItem("token", token);
        console.log("Inicio de Sesión exitoso");


        const decodedToken = jwtDecode(token);

        // verifica si es admin
        if (decodedToken && decodedToken.user_type === 2) {
          loginAdmin();
          navigate("/Bienvenida");
          return;
        }

        login();
        Swal.fire({
          title: "Inicio de Sesión exitoso",
          html: "Redireccionando",
          icon: "success",
          timer: 1000,
          timerProgressBar: true,
          showConfirmButton: false,
          onBeforeOpen: () => {
            Swal.showLoading();
          },
        }).then(() => {
          navigate("/");
        });
      } else if (response.status === 401) {
        setError("Credenciales inválidas. Verifica tu email y contraseña.");
        console.log(error);
      } else {
        const text = await response.text();
        if (text) {
          const data = JSON.parse(text);
          setError(data.message);
        } else {
          setError("Error de inicio de sesión. Por favor, inténtalo de nuevo.");
        }
      }
    } catch (error) {
      console.error(error);
      setError("Error interno. Por favor, inténtalo de nuevo más tarde.");
    }
  };

  return (
    <div className="font-Montserrat">
      <div className="bg-image h-screen bg-cover flex justify-center items-center">
        <div className="bg-[#272733] relative overflow-hidden rounded-3xl w-[750px] h-[480px]">
          <div className="absolute top-0 h-[100%] transition-all ease-in-out left-0 w-[50%]">
            <form
              onSubmit={handleLogin}
              className="bg-[#272733] flex justify-center items-center flex-col px-10 h-[100%] text-[#EFB810]">
              <h1 className="font-bold text-2xl mb-5">Iniciar sesion</h1>
              <span className="font-serif text-sm mb-2 text-white">con sus credenciales de usuario</span>
              <input
                value={user_email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="Correo"
                className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none my-5 mx-15 p-2 rounded-md font-mono" />
              <input
                type={showPassword ? "text" : "password"}
                value={user_password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Contraseña"
                className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none mx-15 p-2 rounded-md font-mono"
              />
              <span
                className=" absolute top-[16.5rem] left-[21.4rem] cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible className="h-[1rem] text-gray-400" />
                ) : (
                  <AiOutlineEye className="h-[1rem] text-gray-400" />
                )}
              </span>
                
              {error && (
                <p className="text-red-500 text-[0.6rem] mt-2">{error}</p>
              )}  

              <Link to='/Contraseña'>
                <p className="p-5 font-serif">¿Ha olvidado su contraseña?</p>
              </Link>

              <button
                className="bg-[#EFB810] cursor-pointer text-[#272733] uppercase p-2 rounded-lg w-40 font-mono"
                type='button'
                onClick={handleLogin}>
                Acceder
              </button>

            </form>
          </div>
          <div className="absolute top-0 left-[50%] w-[50%] h-[100%] overflow-hidden rounded-bl-[100px] rounded-tl-[150px] z-96 transition-all ease-in-out font-Montserrat">
            <div className="bg-[#EFB810] relative h-[100%] w-[200%] transition-all ease-in-out text-[#272733]">
              <div className="absolute w-[50%] h-[100%] flex justify-center items-center flex-col text-center top-0 transition-all ease-in-out px-[30px]">
                <h1 className="font-bold text-2xl">Hola, GymBro!</h1>
                <p className="m-[40px] text-sm">Regístrese con sus datos personales para utilizar todas las funciones del sitio web</p>
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

export default IniciarSesion;