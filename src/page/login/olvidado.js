import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";

function ContraOlvidado() {
  const [user_email, setUserEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [canResend, setCanResend] = useState(true);
  const [secondsRemaining, setSecondsRemaining] = useState(15);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (user_email.trim() === "") {
      setError("Por favor, ingresa una dirección de correo para continuar.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        'http://localhost:8080/fitzone/user/email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_email }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const { user_name, reset_code } = data;
        console.log(data)

        try {
          emailjs.send("service_ky6qbm7", "template_28s6azj", {
            to_name: user_name,
            recoveryCode: reset_code,
            user_email: user_email,
          }, '8o9NuKxJRWO4nQqJH');
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
          setCanResend(false);
          setError("");
          setValidateForm(true)
          const interval = setInterval(() => {
            setSecondsRemaining((prevSeconds) => prevSeconds - 1);
          }, 1000);

          setTimeout(() => {
            clearInterval(interval);
            setCanResend(true);
            setSecondsRemaining(15);
          }, 15000);

          Swal.fire({
            title: "¡Correo enviado!",
            text: "Verifica tu buzón de entrada.",
            icon: "success",
            timer: 1000,
            timerProgressBar: true
          });
        }
      } else if (response.status === 404) {
        setError("No se encontró el correo electrónico vinculado a tu cuenta.");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let interval;
    return () => clearInterval(interval);
  }, []);

  // validar codigo
  const [validateForm, setValidateForm] = useState(false)
  const [reset_code, setCode] = useState("")
  const navigate = useNavigate()

  const validateCode = async (e) => {
    e.preventDefault()

    if (reset_code.trim() === ''){
      setError("Por favor, ingrese un código válido")
      return;
    }

    if (reset_code.length < 4 || reset_code.length > 4){
      setError("El código únicamente puede contener 4 carácteres.")
      return;
    }


    try {
      const response = await fetch(
        'http://localhost:8080/fitzone/user/verify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_email, reset_code }),
        }
      );

      console.log(user_email)

      if (response.ok){
        Swal.fire({
          title: "Código validado",
          html: "Redirigiendo",
          icon: "success",
          timer: 1000,
          timerProgressBar: true,
          showConfirmButton: false,

        }).then(() => {
          navigate(`/recover/${user_email}`);
        });
      } else {
        setError(
          "Código de recuperación incorrecto. Verifica el código o solicita uno nuevo."
        );
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="font-Montserrat">
      <div className="bg-image h-screen bg-cover flex justify-center items-center">
        <div className="bg-[#272733] relative overflow-hidden rounded-3xl w-[350px] lg:w-[750px] h-[480px]">
          <div className="absolute top-0 h-[100%] transition-all ease-in-out w-[150%] lg:left-64 lg:w-[80%]">
            {validateForm ? (
              <form className="bg-[#272733] flex justify-center items-center flex-col pl-8 w-[60%] h-[80%] lg:w-[100%] lg:px-40 lg:h-[100%] text-[#EFB810]">
                <h1 className="font-bold text-2xl mb-5">Validar código</h1>
                <span className="font-serif text-sm mb-2 text-center text-white">Inserte el código de cuatro dígitos que llegó a la dirección de correo <span className="text-amber-400">{user_email}</span></span>
                <input value={reset_code} onChange={(e) => setCode(e.target.value)} min="4" max="4" type="number" className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none my-5 mx-15 p-2 rounded-md font-mono" />
                <button
                  className="bg-[#EFB810] cursor-pointer text-[#272733] uppercase p-2 rounded-lg w-40 font-mono"
                  type="submit"
                  onClick={validateCode}
                >
                  Validar
                </button>
                {error && (
                  <p className="text-red-500 text-center text-sm mt-2">{error}</p>
                )}
                <p className="text-sm font-serif text-white mt-2">¿No le llegó el código? <span className="text-amber-400">Inténtelo de nuevo.</span></p>
                <button
                  className="bg-[#EFB810] cursor-pointer text-[#272733] uppercase p-2 rounded-lg w-40 font-mono mt-3"
                  type="submit"
                  onClick={sendEmail}
                  disabled={!canResend}
                >
                  {canResend ? "Solicitar código" : `Reenviar en ${secondsRemaining}s`}
                </button>

                {loading && (
                  <p className="text-white text-sm">Cargando...</p>
                )}
              </form>
            ) : (
              <form className="bg-[#272733] flex justify-center items-center flex-col pl-8 w-[60%] h-[80%] lg:w-[100%] lg:px-40 lg:h-[100%] text-[#EFB810]">
                <h1 className="font-bold text-2xl mb-5">Recuperar Contraseña</h1>
                <span className="font-serif text-sm mb-2 text-center text-white">Ingrese su dirección de correo electrónico para recuperar su contraseña</span>

                <input value={user_email} onChange={(e) => setUserEmail(e.target.value)} type="email" id="email" placeholder="Correo" className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none my-5 mx-15 p-2 rounded-md font-mono" />
                <button
                  className="bg-[#EFB810] cursor-pointer text-[#272733] uppercase p-2 rounded-lg w-40 font-mono"
                  type="submit"
                  onClick={sendEmail}
                  disabled={!canResend}
                >
                  {canResend ? "Solicitar" : `Reenviar en ${secondsRemaining}s`}
                </button>
                {error && (
                  <p className="text-red-500 text-center text-sm mt-2">{error}</p>
                )}
                {loading && (
                  <p className="text-white text-sm">Cargando...</p>
                )}
              </form>
            )}


          </div>
          <div className="absolute top-[75%] lg:top-0 lg:right-[50%] w-[100%] lg:w-[50%] h-[25%] lg:h-[100%] overflow-hidden lg:rounded-br-[100px] lg:rounded-tr-[150px] z-96 transition-all ease-in-out">
            <div className="bg-[#EFB810] relative h-[100%] w-[200%] transition-all ease-in-out text-[#272733]">
              <div className="absolute w-[50%] h-[100%] flex justify-center items-center flex-col text-center top-0 transition-all ease-in-out px-[30px]">
                <h1 className="font-bold text-2xl">¡Bienvenido GymBro!</h1>
                <p className="lg:m-[40px] lg:font-serif lg:text-sm max-lg:hidden">Introduzca sus datos personales para utilizar todas las funciones del sitio web</p>
                <Link to='/Iniciar sesion'>
                  <button className=" bg-transparent border-[#272733] p-2 border-2 rounded-lg w-40 font-mono">
                    Iniciar sesion
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}

export default ContraOlvidado;
