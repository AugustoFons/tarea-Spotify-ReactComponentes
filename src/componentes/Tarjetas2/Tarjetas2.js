
import botonPlay from '../img/botonPlay.png'
import React, { useState } from 'react';


const Tarjetas2 = (props) => {

    const [isActive, setActive] = useState("true");
    const mostrarBoton = () => {
        setActive(!isActive);
    };

    const [checked, setChecked] = useState(false); 
    const handleChange = () => { 
      setChecked(!checked);       
    }

    return (
    <figure className="tj2" onMouseEnter={mostrarBoton} onMouseLeave={mostrarBoton} >
    <div style={{height:"65%", width:"100%",}}>
        <img style={{width:"100%", borderRadius:"5px",boxShadow: "0px 5px 8px 9px #101010"}} src={props.info.imagen} alt="" />
        <img src={botonPlay} alt="" className={checked ? 'btnPausa2' : isActive ? "btn" : "btn-visible2"  } onClick={handleChange} />
    </div>
    <figcaption>
        <h4 style={{
            color: "white",
            lineHeight:"8px"
        }}>{props.info.titulo}</h4>
        <p style={{color: "white"}}>{props.info.descripcion}</p>
    </figcaption>

    </figure>
    )
}

export default Tarjetas2