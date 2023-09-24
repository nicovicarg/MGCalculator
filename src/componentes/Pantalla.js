import React from "react";
import Linea from "./Linea";

function Pantalla({memory}) {
  
  let style = {
    backgroundColor: '#000000',
    height: '50vh',
  
  }
  return (
    <div style={style} className='d-flex flex-column overflow-auto mb-2 p-2'>
      {memory.map((memory,index)=> 
      
        <Linea texto={memory} key={index} />

      )}
    </div>
  )
}

export default Pantalla