import React, {useState} from "react";
import Pantalla from "./Pantalla";
import Formulario from "./Formulario";


function Container(){
  const appStyle = {
    width: "90vw",
    height:"90vh",
    backgroundColor: "#a433hh"
  }

  const [memory, setMemory] = useState([])
  
  const agregarLinea = linea => {
    
      setMemory(linea)
    
  }
  

  return(
    <div style={appStyle}>
      <Pantalla memory={memory} />
      <Formulario onSubmit={agregarLinea}/>
    </div>
  )
}

export default Container