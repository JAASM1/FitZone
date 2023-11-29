import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './Auth';
import { useRoutes, BrowserRouter } from 'react-router-dom'

import Inicio from './page/Inicio/Inicio'
import Ejercicios from './page/ejercicios/Ejercicios'
import Nutricion from './page/nutricion/Nutricion'
import Calorias from './page/calorias/Calorias'
import IniciarSesion from './page/login/iniciosesion';
import Registrarse from './page/login/registrarse';
import ContraOlvidado from './page/login/olvidado';
import Dashboard from './components/Dashboard/Estadisticas.js'
import Nutri from './components/Dashboard/EstadisticaComponente/EstadisticaNutricion.js'
import Recover from './page/login/recover.js';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Inicio></Inicio>},
    {path: '/Ejercicios', element: <Ejercicios></Ejercicios>},
    {path: '/Nutricion', element: <Nutricion></Nutricion>},
    {path: '/Calorias', element: <Calorias></Calorias>},
    {path: '/Iniciar sesion', element: <IniciarSesion></IniciarSesion>},
    {path: '/Registrarse' , element: <Registrarse></Registrarse>},
    {path: '/Contraseña', element: <ContraOlvidado></ContraOlvidado>},
    {path: '/Dashboard' , element: <Dashboard/>},
    {path: '/Nutri' , element: <Nutri/>},
    { path: "/recover/:user_email", element: <Recover /> },
  ])
  return routes
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
