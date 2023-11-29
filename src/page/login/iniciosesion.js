import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { useAuth } from "../../Auth";
import { jwtDecode } from "jwt-decode";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { GoogleLoginButton } from "./logingoogle";
import { FaHome } from "react-icons/fa";

function IniciarSesion() {
  const navigate = useNavigate()
  const { login, loginAdmin, isAdmin, setIsAdmin } = useAuth();
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGoogleResponse = async (response) => {
    if (response.error) {
      console.error("Google Sign-In Error:", response.error);
    } else {
      const googleToken = response.credential;
      console.log("Google Token:", googleToken);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ googleToken }),
      };
      console.log("Request options:", requestOptions);
      setLoading(true)
      try {
        const res = await fetch(
          "http://localhost:8080/fitzone/users/loginwithgoogle",
          requestOptions
        );
        if (res.ok) {
          const data = await res.json();
          const token = data.token;
          localStorage.setItem("token", token);
          console.log("Inicio de Sesión exitoso");
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
            setLoading(false);
          });
        } else {
          console.error("Server error:", res.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (user_email.trim() === '') {
      setError('Por favor, ingresa tu correo electrónico antes de continuar.');
      return;
    }
    if (user_password.trim() === '') {
      setError('Ingresa tu contraseña antes de continuar.');
      return;
    }
  
    try {
      Swal.fire({
        title: 'Cargando...',
        text: 'Por favor, espera un momento.',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });
  
      const response = await fetch(
        'http://localhost:8080/fitzone/users/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_email, user_password }),
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('token', token);
        console.log('Inicio de Sesión exitoso');
  
        const decodedToken = jwtDecode(token);
        console.log(decodedToken.user_type);
  
        // Verifica si es admin
        if (decodedToken && decodedToken.user_type === 1) {
          // Establece isAdmin antes de redirigir al dashboard
          setIsAdmin(true);
          console.log('Es un administrador');
        }
  
        Swal.close();
        console.log('isAdmin después de setIsAdmin:', isAdmin);
        if (isAdmin) {
          // Redirige solo si es admin
          console.log('Redirigiendo al dashboard...');
          loginAdmin();
          navigate('/Dashboard');
        } else {
          // Si no es admin, realiza las acciones correspondientes
          login();
          Swal.fire({
            title: 'Inicio de Sesión exitoso',
            html: 'Redireccionando',
            icon: 'success',
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false,
            onBeforeOpen: () => {
              Swal.showLoading();
            },
          }).then(() => {
            navigate('/');
          });
        }
      } else if (response.status === 401) {
        Swal.close();
        setError('La contraseña proporcionada no es correcta. Verifica tu email y contraseña.');
        console.log(error);
      } else if (response.status === 404) {
        Swal.close();
        setError("Correo electrónico no encontrado. Por favor, regístrate antes de iniciar sesión.");
      } else {
        Swal.close();
        const text = await response.text();
        if (text) {
          const data = JSON.parse(text);
          setError(data.message);
        } else {
          setError(
            'Error de inicio de sesión. Por favor, inténtalo de nuevo.'
          );
        }
      }
    } catch (error) {
      Swal.close();
      console.error(error);
      setError(
        'Error interno. Por favor, inténtalo de nuevo más tarde.'
      );
    } finally {
      setLoading(false);
    }
  };

  const [hovered, setHovered] = useState(false);
  
  const handleHover = () => {
    setHovered(!hovered);
  };

  const buttonStyle = {
    fontSize: '40px',
    color: hovered ? '#EFB810' : 'white',
  };

  return (
    <div className="font-Montserrat">
      <div className="bg-image h-screen bg-cover flex justify-center items-center">
        <div>
          <Link to="/">
            <button className="flex items-center justify-center absolute left-10 top-10" style={buttonStyle} onMouseEnter={handleHover} onMouseLeave={handleHover}>
              <FaHome/>
            </button>
          </Link>
        </div>
        <div className="bg-[#272733] relative overflow-hidden rounded-3xl w-[350px] lg:w-[750px] h-[480px]">
          <div className="absolute top-0 h-[100%] transition-all ease-in-out left-0 w-[100%] lg:w-[50%]">
            <form
              onSubmit={handleLogin}
              className="bg-[#272733] flex justify-center items-center flex-col px-10 lg:h-[100%] text-[#EFB810]">
              <h1 className="font-bold text-2xl p-1">Iniciar sesion</h1>
              <span className="text-sm text-white">con sus credenciales de usuario</span>
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
                className=" absolute top-[14.9rem] left-[21.4rem] cursor-pointer"
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
                <p className="p-2">¿Ha olvidado su contraseña?</p>
              </Link>

              <button
                className="bg-[#EFB810] cursor-pointer text-[#272733] uppercase p-2 rounded-lg w-40 font-mono mb-3 mt-5"
                type='button'
                onClick={handleLogin}>
                Acceder
              </button>

              <div className=" w-full text-center flex items-center mb-2">
                <div className="bg-slate-500 w-[30%] h-[1px]"></div>
                <p className="p-2 text-sm">O accede con </p>
                <div className="bg-slate-500 w-[30%] h-[1px]"></div>

              </div>
 
              <GoogleLoginButton
                clientId={"48190451362-g56p8ihvpbnkf4e5ujj0brh133p9elsh.apps.googleusercontent.com"}
                onSuccess={handleGoogleResponse}
                onError={handleGoogleResponse}
              />
            </form>
          </div>
          <div className="absolute top-[78%] lg:top-0 lg:left-[50%] w-[100%] lg:w-[50%] h-[25%] lg:h-[100%] overflow-hidden lg:rounded-bl-[100px] lg:rounded-tl-[150px] z-96 transition-all ease-in-out font-Montserrat">
            <div className="bg-[#EFB810] relative h-[100%] w-[200%] transition-all ease-in-out text-[#272733]">
              <div className="absolute w-[50%] h-[100%] flex justify-center items-center flex-col text-center top-0 transition-all ease-in-out px-[30px]">
                <h1 className="font-bold text-2xl">Hola, GymBro!</h1>
                <p className="lg:m-[40px] lg:text-sm max-lg:hidden">Regístrese con sus datos personales para utilizar todas las funciones del sitio web</p>
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