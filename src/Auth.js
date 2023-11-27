import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
    const [isAdmin, setIsAdmin] = useState(() => {
      // Obtener el estado de isAdmin desde localStorage
      const isAdminStored = localStorage.getItem("isAdmin");
      return isAdminStored ? JSON.parse(isAdminStored) : false;
    });
    const login = () => {
      setIsLoggedIn(true);
    };

    const loginAdmin = () => {
        setIsAdmin(true)
        localStorage.setItem("isAdmin", JSON.stringify(true));
        console.log('Usuario ahora es administrador:', isAdmin);
      }

    const logoutAdmin = () => {
      setIsAdmin(false);
      localStorage.setItem("isAdmin", JSON.stringify(false));
      console.log('Usuario ya no es administrador:', isAdmin);
    };
  
    const logout = () => {
      setIsLoggedIn(false);
      setIsAdmin(false);
      navigate("/");
      localStorage.removeItem("token");
      localStorage.removeItem("isAdmin");
    }



    useEffect(() => {
      console.log(isAdmin); // Esto aimprimirá el valor actualizado de isAdmin
      // Puedes realizar otras acciones aquí después de que isAdmin se haya actualizado
    }, [isAdmin]);
    

    return (
      <AuthContext.Provider value={{ isLoggedIn, login, logout, loginAdmin, logoutAdmin, isAdmin, setIsAdmin }}>
        {children}
      </AuthContext.Provider>
    );
  }
  
  export function useAuth() {
    return useContext(AuthContext);
  }