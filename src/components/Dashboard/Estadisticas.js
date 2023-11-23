import Sidebar from "./side";
import EstadisticaCalorias from "./EstadisticaComponente/EstadisticaCalorias.js";
import EstadisticaNutricion from "./EstadisticaComponente/EstadisticaNutricion.js";
import EstadisticaEjercicios from './EstadisticaComponente/EstadisticaEjercicios.js'

function Estadisticas() {
  return (
    <div className="flex font-Montserrat bg-zinc-800">
      <Sidebar />
      <div className="w-[full] min-h-min relative md:m-10 m-2 md:ml-[15rem] flex flex-col items-center">
        <h1 className="md:text-5xl text-3xl max-md:text-center font-bold text-[#EFB810] md:mb-40 mb-5">
          Palabras mas buscadas
        </h1>
        <section className="md:flex gap-20 max-md:space-y-5">
          <EstadisticaEjercicios/>
          <EstadisticaNutricion/>
          <EstadisticaCalorias />
        </section>
      </div>
    </div>
  );
}

export default Estadisticas;
