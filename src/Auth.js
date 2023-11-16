import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
    const [isAdmin, setIsAdmin] = useState(!!localStorage.getItem("token"));

    const login = () => {
      setIsLoggedIn(true);
    };

    const loginAdmin = () => {
        setIsAdmin(true)
        navigate('/Bienvenida')
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

    return (
      <AuthContext.Provider value={{ isLoggedIn, login, logout, loginAdmin, logoutAdmin, isAdmin }}>
        {children}
      </AuthContext.Provider>
    );
  }
  
  export function useAuth() {
    return useContext(AuthContext);
  }