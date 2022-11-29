
import botonPlay from '../img/botonPlay.png'
import React, { useState } from 'react';


const Tarjetas2 = (props) => {

    const [isActive, setActive] = useState("true");
    const mostrarBoton = () => {
        setActive(!isActive);
    };

    const [checked, setChecked] = useState(false); 
    const handleChange = e => { 
        e.preventDefault();
        setChecked(!checked)
    }

    return (
    <figure className="tj2" onMouseEnter={mostrarBoton} onMouseLeave={mostrarBoton} >
    <div style={{maxHeight:"65%", width:"100%", border:"black solid 2px"}}>
        <img style={{width:"100%",minHeight:"100%", borderRadius:"5px",boxShadow: "0px 5px 8px 9px #101010"}} src={props.info.imagen} alt="" />
        <img src={botonPlay} alt="" className={checked ? 'btnPausa2' : isActive ? "btn" : "btn-visible2"  } onClick={handleChange} />
    </div>
    <figcaption style={{display: "flex", flexDirection: "column", }}>
        <h4 style={{color: "white", margin:"18px 0px"}}>{props.info.titulo}</h4>
        <p style={{color: "white"}}>{props.info.descripcion}</p>
    </figcaption>

    </figure>
    )
}

export default Tarjetas2