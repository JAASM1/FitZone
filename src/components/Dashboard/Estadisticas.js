import Sidebar from "./side";
import EstadisticaCalorias from "./EstadisticaComponente/EstadisticaCalorias.js";
import EstadisticaNutricion from "./EstadisticaComponente/EstadisticaNutricion.js";
import EstadisticaEjercicios from './EstadisticaComponente/EstadisticaEjercicios.js'

function Estadisticas() {
  return (
    <div className="flex font-Montserrat">
      <Sidebar />
      <div className="w-[full] min-h-min relative m-10 ml-[15rem] flex flex-col items-center">
        <h1 className="text-5xl font-bold text-[#EFB810] mb-40">
          Palabras mas buscadas
        </h1>
        <section className="flex gap-20">
          <EstadisticaEjercicios/>
          <EstadisticaNutricion/>
          <EstadisticaCalorias />
        </section>
      </div>
    </div>
  );
}

export default Estadisticas;
