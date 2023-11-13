import React from "react";
import { useState } from "react";
import { BiHome } from "react-icons/bi";
import { HiArrowLongRight } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";

function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        class={`bg-black fixed top-0 bottom-0 h-screen pt-8 ${
          open ? "w-60" : "w-20"
        } duration-300 relative`}
      >
        <div>
          <HiArrowLongRight
            className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-4 border
                    border-black cursor-pointer ${open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <ul class="m-5 flex flex-col gap-5">
          <a href="/Bienvenida">
            <li
              className="text-[#EFB810] flex items-center gap-x-4 p-2 hover:bg-light-white 
                    rounded-md mt-2 cursor-pointer"
            >
              <span className="text-3xl block float-left">
                <BiHome />
              </span>
              <span
                className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              >
                Bienvenido
              </span>
            </li>
          </a>
          <a href="/Estadisticas">
            <li
              className="text-[#EFB810] flex items-center gap-x-4 p-2 hover:bg-light-white 
                    rounded-md mt-2 cursor-pointer"
            >
              <span className="text-3xl block float-left">
                <VscGraph />
              </span>
              <span
                className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              >
                Estadisticas
              </span>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
