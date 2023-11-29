import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Swal from 'sweetalert2';

function Recover() {
    const navigate = useNavigate();
    const { user_email } = useParams();
    const [showOnePassword, setShowOnePassword] = useState(false)
    const [newPassword, setUserPassword] = useState("")
    const [verifyPassword, setVerifyPassword] = useState("")
    const [showVerifyPassword, setShowVerifyPassword] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        console.log(user_email);
    }, [user_email]);
    

    const handleShowVerifyPassword = (e) => {
        e.preventDefault()
        setShowVerifyPassword(!showVerifyPassword)
    }

    const handleshowOnePassword = (e) => {
        e.preventDefault()
        setShowOnePassword(!showOnePassword)
    }

    const handleResetPassword = async (e) => {
        e.preventDefault()


        if (newPassword.trim() === '' || verifyPassword.trim() === '') {
            setError("Por favor, ingresa todos los campos.")
            return;
        }

        if (newPassword === verifyPassword) {
            try {
                const response = await fetch(
                    'http://localhost:8080/fitzone/user/restablish',
                    {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ user_email, newPassword })
                    }
                )

                if (response.ok) {
                    Swal.fire({
                        title: "Contraseña cambiada exitosamente",
                        html: "Redirigiendo a inicio de sesión",
                        icon: "success",
                        timer: 1000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                    }).then(() => {
                        navigate(`/Iniciar sesion`);
                    });
                } else {
                    const data = await response.json();
                    setError(data.message);
                }
            } catch (error) {
                console.error(error)
                setError("Error interno. Inténtalo de nuevo más tarde")
            }
        } else {
            setError("Las contraseñas no coinciden.")
            return;
        }
    }

    return (
        <div className="font-Montserrat">
            <div className="bg-image2 h-screen bg-cover flex justify-center items-center">

                <div className="bg-[#272733] relative overflow-hidden rounded-3xl w-[350px] lg:w-[750px] h-[480px]">
                    <div className="absolute top-0 h-[100%] transition-all ease-in-out left-0 w-[100%] lg:w-[50%]">
                        <form
                            className="bg-[#272733] flex justify-center items-center flex-col px-10 lg:h-[100%] text-[#EFB810]">
                            <h1 className="font-bold text-xl ">Restablecer contraseña</h1>
                            <span className="text-sm text-white">Elija una nueva contraseña</span>
                            <div className='flex space-x-3'>
                                <input
                                    type={showOnePassword ? "text" : "password"}
                                    value={newPassword}
                                    onChange={(e) => setUserPassword(e.target.value)}
                                    placeholder="Contraseña"
                                    className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none my-5 mx-15 p-2 rounded-md font-mono" />
                                <button onClick={handleshowOnePassword}>
                                    {showOnePassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                </button>

                            </div>

                            <div className='flex space-x-3'>
                                <input
                                    type={showVerifyPassword ? "text" : "password"}
                                    value={verifyPassword}
                                    onChange={(e) => setVerifyPassword(e.target.value)}
                                    placeholder="Verifica tu contraseña"
                                    className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none my-5 mx-15 p-2 rounded-md font-mono" />
                                <button onClick={handleShowVerifyPassword}>
                                    {showVerifyPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                </button>

                            </div>

                            {error && (
                                <p className='text-red-500 font-Montserrat'>{error}</p>
                            )}

                            <button
                                className="bg-[#EFB810] cursor-pointer text-[#272733] uppercase p-2 rounded-lg w-60 font-mono mb-3 mt-5"
                                type='button'
                                onClick={handleResetPassword}
                            >
                                Cambiar contraseña
                            </button>


                        </form>
                    </div>
                    <div className="absolute top-[78%] lg:top-0 lg:left-[50%] w-[100%] lg:w-[50%] h-[25%] lg:h-[100%] overflow-hidden lg:rounded-bl-[100px] lg:rounded-tl-[150px] z-96 transition-all ease-in-out font-Montserrat">
                        <div className="bg-[#EFB810] relative h-[100%] w-[200%] transition-all ease-in-out text-[#272733]">
                            <div className="absolute w-[50%] h-[100%] flex justify-center items-center flex-col text-center top-0 transition-all ease-in-out px-[30px]">
                                <h1 className="font-bold text-2xl">¡Recuerda!</h1>
                                <p className="lg:m-[40px] lg:text-sm max-lg:hidden">Asegúrate de elegir una contraseña segura con más de 8 carácteres.  </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recover