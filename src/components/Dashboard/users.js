import React, { useState, useEffect } from "react";
import Sidebar from "./side";
import { FaUserCheck } from "react-icons/fa";
import ContadorUsuarios from "./ContadorUsuarios/Contador.jsx";
import axios from "axios";
import Swal from 'sweetalert2'
import { Table, Button, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap'

function Dashboard(){
    const [users, setUsers] = useState([]);
    const [editUserData, setEditUserData] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [nameLengthError, setNameLengthError] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        axios.get("http://localhost:8080/fitzone/users")
        .then((response) => {
            const filteredUsers = response.data.filter(user => user.user_type !== 1);
            setUsers(filteredUsers);
        })
        .catch((error) => {
            console.error("Error en la búsqueda de usuarios", error);
        });
    }

    const openEditModal = (user) => {
        setEditUserData(user);
        setIsEditModalOpen(true);
    };

    const handleDeleteUser = (userId) => {
        Swal.fire({
            title: '¿Estás seguro de eliminar el usuario?',
            text: 'Esta acción no se puede revertir',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8080/fitzone/users/${userId}`)
                .then((response) => {
                    console.log(response.data);
                    fetchUsers();
                })
                .catch((error) => {
                    console.error("Error al eliminar usuario", error);
                });
            }
        })
    };

    const handleEditUser = () => {
        if (!editUserData.user_name.trim()) {
            setNameError(true)
            return;
        }
        if (!editUserData.user_email.trim()) {
            setEmailError(true);
            return;
        }
        if (!editUserData.user_name.trim().length < 6) {
            setNameLengthError(true)
            return;
        }

        axios.patch(`http://localhost:8080/fitzone/users/${editUserData.id_user}`, editUserData)
          .then((response) => {
            console.log(response.data);
            setIsEditModalOpen(false);
            fetchUsers(); // Vuelve a cargar la lista de usuarios después de editar
          })
          .catch((error) => {
            console.error("Error al editar usuario", error);
          });
    };
    
    return (
        <div className="flex font-Montserrat">
            <Sidebar/>
            <div className="flex items-center justify-center flex-col bg-zinc-800 w-screen">
                <div className="w-[400px] bg-black rounded-xl p-5 flex justify-around mb-10 items-center">
                    <div className="bg-amber-400 w-[5rem] h-[4rem] p-2 rounded-2xl grid place-content-center">
                        <FaUserCheck style={{fontSize: '50px', color: 'white'}}/>
                    </div>
                    <div>
                        <ContadorUsuarios/>
                    </div>
                </div>
                <div className="w-[750px] bg-black h-[300px] rounded-3xl flex items-center justify-center flex-col">
                    <h1 className="text-white text-center text-2xl absolute top-72 font-semibold">
                        Lista de usuarios
                    </h1>
                    <div className="text-white grid place-content-center">
                        <Table>
                            <thead>
                                <tr className="text-[#EFB810] text-center">
                                    <th className="pr-10">Id</th>
                                    <th className="pr-20">Usuario</th>
                                    <th className="pr-20">Correo</th>
                                    <th className="pl-10">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id_user} className="">
                                        <td>{user.id_user}</td>
                                        <td>{user.user_name}</td>
                                        <td>{user.user_email}</td>
                                        <td className="pl-10">
                                            <button className="bg-blue-600 h-10 w-20 rounded-xl mr-5" onClick={()=>openEditModal(user)}>
                                                Editar
                                            </button>
                                            <button className="bg-slate-700 h-10 w-20 rounded-xl" onClick={()=>handleDeleteUser(user.id_user)}>
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody> 
                        </Table>
                    </div>
                </div>
                <Modal isOpen={isEditModalOpen} className="flex items-center justify-center text-center bg-gray-600 w-[35%] h-96 rounded-3xl" style={{transform: 'translate(100%, -145%)', position: 'fixed' }}>
                    <ModalHeader>
                        <h1 className="text-[#EFB810] font-bold text-2xl p-5">
                            Editar Usuario
                        </h1>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label className="font-bold text-xl text-white">Nombre</label>
                            <input type="text" value={editUserData.user_name} onChange={(e) => {setEditUserData({...editUserData, user_name: e.target.value}); setNameError(false); setNameLengthError(false);}}
                                className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none mx-15 p-2 rounded-md font-mono text-white" required
                            />
                            {nameError && <p className="text-red-500 text-lg">El nombre no puede estar vacío</p>}
                            {nameLengthError && <p className="text-red-500 text-lg">El nombre tiene que tener al menos 6 caracteres</p>}
                        </FormGroup>
                        <FormGroup>
                            <label className="font-bold text-xl text-white">Correo</label>
                            <input type="email" value={editUserData.user_email} onChange={(e) => {setEditUserData({...editUserData, user_email: e.target.value}); setEmailError(false);}}
                                className="bg-transparent border-[#EFB810] border-2 w-[100%] outline-none mx-15 p-2 rounded-md font-mono text-white" required
                            />
                            {emailError && <p className="text-red-500 text-lg">El correo no puede estar vacío</p>}
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleEditUser} className="bg-[#EFB810] h-12 w-20 rounded-2xl mr-5 mt-5">
                            Guardar
                        </Button>
                        <Button onClick={() => setIsEditModalOpen(false)} className="bg-zinc-700 h-12 w-20 rounded-2xl text-white">
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}
export default Dashboard