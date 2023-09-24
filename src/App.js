// import { useState } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css';

//Components
import Navbar from '../src/components/navbar/Navbar.js'
import Footer from '../src/components/footer/footer'

//Pages
import Inicio from './page/Inicio/Inicio'
import Ejercicios from './page/ejercicios/Ejercicios'
import Nutricion from './page/nutricion/Nutricion'
import Calorias from './page/calorias/Calorias'

const AppRouts = () => {
  let routes = useRoutes([
    {path: '/', element: <Inicio></Inicio>},
    {path: '/Ejercicios', element: <Ejercicios></Ejercicios>},
    {path: '/Nutricion', element: <Nutricion></Nutricion>},
    {path: '/Calorias', element: <Calorias></Calorias>},
  ])
  return routes
}


function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <AppRouts></AppRouts>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
