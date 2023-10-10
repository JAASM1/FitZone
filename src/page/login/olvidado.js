import React from "react";
import fondo from '../../asset/img/login/contra.jpg';

function ContraOlvidado (){
    return(
        <div className='font-Montserrat'>
            <picture>
                <img src={fondo} alt='' className='h-96 sm:h-full sm:w-full md:h-screen md:w-screen'/>
            </picture>
        </div>
    )
}

export default ContraOlvidado;