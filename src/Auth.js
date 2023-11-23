import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
    const [isAdmin, setIsAdmin] = useState(false);

    const login = () => {
      setIsLoggedIn(true);
    };

    const loginAdmin = () => {
        setIsAdmin(true)
        console.log(isAdmin)
    }

    const logoutAdmin = () => {
      setIsAdmin(false)
    }
  
    const logout = () => {
      setIsLoggedIn(false);
      setIsAdmin(false)
      navigate('/')
      localStorage.removeItem("token");
    };



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