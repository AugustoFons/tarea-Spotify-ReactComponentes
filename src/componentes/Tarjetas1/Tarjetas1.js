
import botonPlay from '../img/botonPlay.png'
import botonPausa from '../img/botonPausa.png'

import React, { useState } from 'react';


const Tarjetas1 = (props) => {

  const [isActive, setActive] = useState("true");
  const mostrarBoton = () => {
    setActive(!isActive);
  };

  const [checked, setChecked] = useState(false); 
  const handleChange = () => { 
          setChecked(!checked)
  }


  return (
      <figure className='tj1' onMouseEnter={mostrarBoton} onMouseLeave= {mostrarBoton} >
      <img style={{maxWidth:"55%",
                  height:"100%" ,
                  boxShadow: "2px 0px 18px 10px #151515",
                  borderRadius: "5px"
                  }} src={props.info.imagen} alt=""  />
      <figcaption >
        <div style={{width:"170px", color: "white", textAlign:"left", marginLeft: "20px"}}>
        <h4 >{props.info.titulo}</h4>
          </div>
      </figcaption>
      <img src={botonPlay} alt="" className={checked ? 'btn-invisible' : isActive ? "btn-invisible" : "btn-visible1"  } onClick={handleChange} />
      <img  src={botonPausa} alt=""  className={checked ? 'btnPausa' : 'btn-invisible' } onClick={handleChange}/>      
      </figure>
  )
}

export default Tarjetas1