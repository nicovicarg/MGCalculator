import React, {useState} from "react";

function Formulario (props)  {
  const calcular = (inicial,final,porcentaje,lineas)=>{
    let array = []    
    let acc = 0
    let g = 20
    let gan = 0;
    for(let x = inicial; x<=final && acc < lineas; x*=porcentaje){
      acc +=1
      gan += g-20
      g *= porcentaje

      let gan2 = gan.toFixed(2)
    
      array.push(`${acc} --> price: ${x} - gan: ${gan2}`)
    }
    return array
  } 

  const manejarEnvio = e => {
    e.preventDefault()
    let a = document.getElementById('inicial').value
    let b = document.getElementById('final').value
    let c = document.getElementById('porcentaje').value
    let d = document.getElementById('lineas').value
    let ar = calcular(a,b,1+c/100,d)
    
    
    
    const lineaNueva = ar
    props.onSubmit(lineaNueva)

    document.getElementById('inicial').value = ''
    document.getElementById('final').value = ''
    document.getElementById('porcentaje').value = ''
    document.getElementById('lineas').value = ''
    document.getElementById('inicial').focus()
  }

  return (
    <div className="App h-100 d-flex flex-column align-items-center">
      
      <form 
        className='d-flex flex-column'
        onSubmit={manejarEnvio}
        >
        
        <div className="d-flex">
          
        <input 
        id='inicial' 
        type="text"
        name='inicial' 
        placeholder="inicial"
     
        className="form-control m-3"
        autoFocus
        />
        <input 
        id='final' 
        type="text"
        name='final' 
        placeholder="final"
       
        className="form-control m-3"
        />
        <input 
        id='porcentaje' 
        type="text"
        name='porcentaje' 
        placeholder="porcentaje"
      
        className="form-control m-3"
        />
        <input 
        id='lineas' 
        type="text"
        name='lineas' 
        placeholder="lineas"
    
        className="form-control m-3"

        />
        </div>
      
        <button id="button" className="btn btn-success">Calcular</button>
      </form>

    </div>
  )
}

export default Formulario