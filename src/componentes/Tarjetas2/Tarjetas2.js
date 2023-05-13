import { useState } from 'react';
import { useContext } from "react"
import { ThemeContext } from "../../context/PlayContextProvider"
import botonPlay from '../img/botonPlay.png'
import botonPausa from '../img/botonPausa.png'

const Tarjetas2 = (props) => {
	const data = useContext(ThemeContext)
	const {checked, setChecked} = data

	const [isActive, setActive] = useState(null);
	console.log(isActive)


return (
    <>
        {
            checked === props.info.id
                ?
                    <div class="loader" style={{position: 'fixed'}}>
                        <div class="sound-1"></div>
                        <div class="sound-2"></div>
                        <div class="sound-3"></div>
                        <div class="sound-4"></div>
                        <div class="sound-5"></div>
                        <div class="sound-6"></div>
                        <div class="sound-7"></div>
                        <div class="sound-8"></div>
                        <div class="sound-9"></div>
                    </div>
                :
                    null
        }
        <figure className="tj2" onMouseEnter={() => setActive(isActive => isActive === props.info.id ? null : props.info.id)} onMouseLeave={() => setActive(isActive => isActive === props.info.id ? null : props.info.id)} >
            <div style={{maxHeight:"65%", width:"100%", border:"black solid 2px"}}>
                    <img style={{width:"100%",minHeight:"100%", borderRadius:"5px",boxShadow: "0px 5px 8px 9px #101010"}} src={props.info.imagen} alt="" />
                    
                    <div onClick={() => setChecked(checked => checked === props.info.id ? null : props.info.id)}>
                        { 
                            checked === props.info.id
                            ?
                                <img src= {botonPausa} alt="" className='btnPausa2'/>
                            :
                                <img src= {botonPlay} alt="" className={isActive === props.info.id ?  "btn-visible2" : "btn-invisible" } />
                        }
                    </div>
            </div>
            <figcaption style={{display: "flex", flexDirection: "column", }}>
                    <h4 style={{color: "white", margin:"18px 0px"}}>{props.info.titulo}</h4>
                    <p style={{color: "white"}}>{props.info.descripcion}</p>
            </figcaption>
            {
                checked === props.info.id
                ?
                    <div style={{display: "none"}}>
                        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" title="play" src={props.info.src}></iframe>
                    </div>
                :			
                    null
            }
        </figure>
    </>
)
}

export default Tarjetas2