import React from "react";
import { useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { FiLoader } from "react-icons/fi";

function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div
        class={`bg-black fixed top-0 bottom-0 h-screen pt-8 ${
          open ? "w-60" : "w-20"
        } duration-300 relative`}
      >
        <div>
          <HiArrowLongLeft
            className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-4 border
                    border-black cursor-pointer ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <ul class="m-5">
          <li
            className="text-[#EFB810] flex items-center gap-x-4 p-2 hover:bg-light-white 
                    rounded-md mt-2 cursor-pointer"
          >
            <span className="text-3xl block float-left">
              <FiLoader />
            </span>
            <a href="/Bienvenida">
              <span
                className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              >
                Bienvenido
              </span>
            </a>
          </li>
        </ul>
        <ul class="m-5">
          <li
            className="text-[#EFB810] flex items-center gap-x-4 p-2 hover:bg-light-white 
                    rounded-md mt-2 cursor-pointer"
          >
            <span className="text-3xl block float-left">
              <FiLoader />
            </span>
            <a href="/Estadisticas">
              <span
                className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              >
                Estadisticas
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
