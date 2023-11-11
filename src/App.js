// import { useState } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css';

//Pages
<<<<<<< Updated upstream
import Inicio from './page/Inicio/Inicio'
import Ejercicios from './page/ejercicios/Ejercicios'
import Nutricion from './page/nutricion/Nutricion'
import Calorias from './page/calorias/Calorias'
import IniciarSesion from './page/login/iniciosesion';
import Registrarse from './page/login/registrarse';
import ContraOlvidado from './page/login/olvidado';
import Welcome from './components/Dashboard/welcome'

const AppRouts = () => {
  let routes = useRoutes([
    {path: '/', element: <Inicio></Inicio>},
    {path: '/Ejercicios', element: <Ejercicios></Ejercicios>},
    {path: '/Nutricion', element: <Nutricion></Nutricion>},
    {path: '/Calorias', element: <Calorias></Calorias>},
    {path: '/Iniciar sesion', element: <IniciarSesion></IniciarSesion>},
    {path: '/Registrarse' , element: <Registrarse></Registrarse>},
    {path: '/Contraseña', element: <ContraOlvidado></ContraOlvidado>},
    {path: '/Bienvenida' , element: <Welcome></Welcome>},
  ])
  return routes
}


function App() {
  return (
    <BrowserRouter>
      <AppRouts></AppRouts>
    </BrowserRouter>
  );
}

export default App;
=======

>>>>>>> Stashed changes
