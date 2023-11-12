import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function Registrarse() {

    const navigate = useNavigate()
    const [user_name, setUserName] = useState("")
    const [user_email, setEmail] = useState("");
    const [user_password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault()
        if (user_email.trim() === '' || user_password.trim() === '' || user_name.trim() === '') {
            setError("Por favor, ingresa todos los campos.")
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:8080/fitzone/users/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ user_name, user_email, user_password })
                }
            );

            if (response.ok) {
                Swal.fire({
                    title: "Registro Exitoso",
                    html: "Redirigiendo a inicio de sesión",
                    icon: "success",
                    timer: 1000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                }).then(() => {
                    navigate('/Iniciar Sesion')
                })
            } else {
                const text = await response.text();

                if (text) {
                    const data = JSON.parse(text);
                    setError(data.message);
                } else {
                    setError("Error de registro. Por favor, inténtalo de nuevo.");
                }
            }
        } catch (error) {
            console.error(error);
            setError("Error interno. Por favor, inténtalo de nuevo más tarde.");
        }
    }


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className='font-Montserrat'>
            <div className='bg-image1 h-screen bg-cover flex justify-center items-center'>
                <div className="bg-[#272733]  relative overflow-hidden rounded-3xl w-[750px] h-[480px]">
                    <div className="absolute top-0 h-[100%] transition-all ease-in-out left-64 w-[80%]">
                        <form onSubmit={handleRegister} className="bg-[#272733]  flex justify-center items-center flex-col px-40 h-[100%] text-[#EFB810]" action=''>
                            <h1 className="font-bold text-2xl mb-5">Crea tu cuenta</h1>
                            <span className="font-serif text-sm mb-2 text-center text-white">o utilice su correo electrónico para registrarse</span>
                            <input
                                type="text"
                                id="nombre"
                                placeholder="Nombre de usuario"
                                value={user_name}
                                onChange={(e) => setUserName(e.target.value)}
                                className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none my-5 mx-15 p-2 rounded-md font-mono" />
                            <input
                                type="email"
                                id="email"
                                value={user_email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Correo"
                                className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none mx-15 p-2 rounded-md font-mono" />
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Contraseña"
                                value={user_password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none my-5 mx-15 p-2 rounded-md font-mono" />
                            <span
                                className=" absolute top-[20.2rem] left-[28rem] cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible className="h-[1rem] text-gray-400" />
                                ) : (
                                    <AiOutlineEye className="h-[1rem] text-gray-400" />
                                )}
                            </span>
                            {error && (
                                <p className='text-red-500 text-sm mb-2'>{error}</p>
                            )}
                            <button
                                className="bg-[#EFB810] cursor-pointer text-[#272733] uppercase p-2 rounded-lg w-40 font-mono"
                                type='submit'>
                                Registrarse
                            </button>
                        </form>
                    </div>
                    <div className="absolute top-0 right-[50%] w-[50%] h-[100%] overflow-hidden rounded-br-[100px] rounded-tr-[150px] z-96 transition-all ease-in-out">
                        <div className="bg-[#EFB810] relative h-[100%] w-[200%] transition-all ease-in-out text-[#272733]">
                            <div className="absolute w-[50%] h-[100%] flex justify-center items-center flex-col text-center top-0 transition-all ease-in-out px-[30px]">
                                <h1 className="font-bold text-2xl">¡Bienvenido GymBro!</h1>
                                <p className="m-[40px] font-serif text-sm">Introduzca sus datos personales para utilizar todas las funciones del sitio web</p>
                                <Link to='/Iniciar sesion'>
                                    <button
                                        type='button'
                                        className=" bg-transparent border-[#272733] p-2 border-2 rounded-lg w-40 font-mono">
                                        Iniciar sesion
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registrarse