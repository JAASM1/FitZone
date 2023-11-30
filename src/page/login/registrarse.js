import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaHome } from "react-icons/fa";

function Registrarse() {
  const navigate = useNavigate();
  const [user_name, setUserName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Validacion del nombre de usuario

  const handleRegister = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (
      user_email.trim() === "" ||
      user_password.trim() === "" ||
      user_name.trim() === ""
    ) {
      setError("Por favor, ingresa todos los campos.");
      return;
    }
    if (user_password !== confirmPassword) {
      setError("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return;
    }
    if (user_password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }
    // Validación del nombre de usuario
    if (
      user_name.length < 6 ||
      !/^[a-zA-Z0-9]+$/.test(user_name) ||
      /\s/.test(user_name)
    ) {
      setError(
        "El nombre tiene que tener al menos 6 caracteres, sin caracteres especiales."
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|es|mx)$/i;
    if (!emailRegex.test(user_email)) {
      setError(
        "Por favor, ingresa un correo electrónico válido con terminación .com, .es, o .mx"
      );
      return;
    }

    try {
      // Alerta de carga
      Swal.fire({
        title: "Cargando...",
        text: "Por favor, espera un momento.",
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 5000,
        willOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await fetch("http://localhost:8080/fitzone/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_name, user_email, user_password }),
      });

      if (response.ok) {
        Swal.close();
        Swal.fire({
          title: "Registro Exitoso",
          html: "Redirigiendo a inicio de sesión",
          icon: "success",
          timer: 1000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then(() => {
          navigate("/Iniciar Sesion");
        });
      } else {
        const data = await response.json();

        if (
          response.status === 400 &&
          data.error === "Correo electrónico duplicado"
        ) {
          console.log(
            "Correo electrónico duplicado. Mostrar mensaje de error."
          );
          setError(
            "El correo electrónico ya está en uso. Por favor, utiliza otro."
          );
        } else {
          console.log("Error de registro. Mostrar mensaje de error genérico.");
          setError("Error de registro. Por favor, inténtalo de nuevo.");
          Swal.fire({
            icon: "error",
            title: "Error de registro",
            text: "Por favor, inténtalo de nuevo.",
          });
        }
      }
    } catch (error) {
      console.error(error);
      setError("Error interno. Por favor, inténtalo de nuevo más tarde.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const buttonStyle = {
    fontSize: "40px",
    color: hovered ? "#EFB810" : "white",
  };

  return (
    <div className="font-Montserrat">
      <div className="bg-image1 h-screen bg-cover flex justify-center items-center">
        <div>
          <Link to="/">
            <button
              className="flex items-center justify-center absolute left-10 top-10"
              style={buttonStyle}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <FaHome />
            </button>
          </Link>
        </div>
        <div className="bg-[#272733] relative overflow-hidden rounded-3xl w-[350px] lg:w-[750px] h-[480px]">
          <div className="absolute top-0 h-[100%] transition-all ease-in-out w-[150%] lg:left-64 lg:w-[80%]">
            <form
              onSubmit={handleRegister}
              className="bg-[#272733] flex justify-center items-center flex-col px-16 w-[68%] lg:w-[100%] lg:px-40 lg:h-[100%] text-[#EFB810]"
              action=""
            >
              <h1 className="font-bold text-2xl">Crea tu cuenta</h1>
              <span className="text-sm text-center mb-1 text-white">
                o utilice su correo electrónico para registrarse
              </span>
              <div className="space-y-5">
                {/* Nombre de usuario */}
                <div className="space-y-1 text-center">
                  <input
                    type="text"
                    id="nombre"
                    placeholder="Nombre de usuario"
                    value={user_name}
                    onChange={(e) => setUserName(e.target.value)}
                    className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none mx-15 p-2 rounded-md font-mono"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    value={user_email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo"
                    className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none mx-15 p-2 rounded-md font-mono"
                  />
                </div>
                <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Contraseña"
                    value={user_password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none mx-15 p-2 rounded-md font-mono"
                  />
                </div>
                <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Confirmar Contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none mx-15 p-2 rounded-md font-mono"
                  />
                </div>
              </div>
              <span
                className=" absolute top-[19.2rem] left-[26rem] cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible className="h-[1rem] text-gray-400" />
                ) : (
                  <AiOutlineEye className="h-[1rem] text-gray-400" />
                )}
              </span>
              {error && <p className="text-red-500 text-xs my-2">{error}</p>}
              <button
                className="bg-[#EFB810] cursor-pointer text-[#272733] uppercase p-2 my-1.5 md:my-5 rounded-lg w-40 font-mono"
                type="submit"
              >
                Registrarse
              </button>
            </form>
          </div>
          <div className="absolute top-[75%] lg:top-0 lg:right-[50%] w-[100%] lg:w-[50%] h-[25%] lg:h-[100%] overflow-hidden lg:rounded-br-[100px] lg:rounded-tr-[150px] z-96 transition-all ease-in-out">
            <div className="bg-[#EFB810] relative h-[100%] w-[200%] transition-all ease-in-out text-[#272733]">
              <div className="absolute w-[50%] h-[100%] flex justify-center items-center flex-col text-center top-0 transition-all ease-in-out px-[30px]">
                <h1 className="font-bold text-2xl">¡Bienvenido GymBro!</h1>
                <p className="lg:m-[40px] lg:font-semibold lg:text-sm max-lg:hidden">
                  Introduzca sus datos personales para utilizar todas las
                  funciones del sitio web
                </p>
                <Link to="/Iniciar sesion">
                  <button
                    type="button"
                    className=" bg-transparent border-[#272733] p-2 border-2 rounded-lg w-40 font-mono"
                  >
                    Iniciar sesion
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

export default Registrarse;
