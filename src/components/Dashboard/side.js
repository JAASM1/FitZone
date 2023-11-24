import React from "react";
import { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { IoArrowUndoSharp } from "react-icons/io5";

function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        class={`bg-black fixed top-0 bottom-0 md:h-screen pt-8 transition-all ${
          open ? "w-60" : "md:w-20 w-16"
        } duration-500 relative`}
      >
        <HiArrowLongRight
          className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-4 cursor-pointer ${
            open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <ul class="m-5 flex flex-col gap-5">
          <a href="/Estadisticas">
            <li
              className="text-[#EFB810] flex items-center gap-x-4 md:p-2 max-md:pt-5 hover:bg-light-white 
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

          <a href="/">
            <li
              className="text-[#EFB810] flex items-center gap-x-4 md:p-2 max-md:pt-5 hover:bg-light-white 
                    rounded-md mt-2 cursor-pointer"
            >
              <span className="text-3xl block float-left">
                <IoArrowUndoSharp />
              </span>
              <span
                className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              >
                Regresar
              </span>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
