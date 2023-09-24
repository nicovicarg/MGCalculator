import React from "react";

function Linea({texto, index}){
  return(
    <p key={index} className="m-0 ms-2 text-light fs-6">{texto}</p>
  )
}

export default Linea