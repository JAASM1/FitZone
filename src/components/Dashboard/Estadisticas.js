import React from "react";
import Sidebar from "./side";

function Estadisticas() {
  return (
    <div className="flex font-Montserrat">
      <Sidebar />
      <div className="w-[full] min-h-min relative m-10 ml-[15rem] flex flex-col items-center">
        <h1 className="text-5xl font-bold text-[#EFB810] mb-40">Palabras mas buscadas</h1>
        <section className="flex gap-20">
            <div className="flex flex-col items-center gap-5">
                <h3 className="text-4xl font-semibold">Ejercicios</h3>
                <div className="border shadow-lg rounded-xl flex justify-center items-center w-[275px] h-[200px] bg-zinc-800 text-white">
                    <ul className='list-decimal text-xl space-y-3'>
                        <li className="font-semibold text-2xl text-[#EFB810]">Biceps</li>
                        <li>Biceps</li>
                        <li>Biceps</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center gap-5">
                <h3 className="text-4xl font-semibold">Ejercicios</h3>
                <div className="border shadow-lg rounded-xl flex justify-center items-center w-[275px] h-[200px] bg-zinc-800 text-white">
                    <ul className='list-decimal text-xl space-y-3'>
                        <li className="font-semibold text-2xl text-[#EFB810]">Biceps</li>
                        <li>Biceps</li>
                        <li>Biceps</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center gap-5">
                <h3 className="text-4xl font-semibold">Ejercicios</h3>
                <div className="border shadow-lg rounded-xl flex justify-center items-center w-[275px] h-[200px] bg-zinc-800 text-white">
                    <ul className='list-decimal text-xl space-y-3'>
                        <li className="font-semibold text-2xl text-[#EFB810]">Biceps</li>
                        <li>Biceps</li>
                        <li>Biceps</li>
                    </ul>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}

export default Estadisticas;
