import { useContext, useState } from "react"
import { ThemeContext } from "../../context/PlayContextProvider"
import botonPlay from '../img/botonPlay.png'
import botonPausa from '../img/botonPausa.png'

const Tarjeta1 = (props) => {
    const data = useContext(ThemeContext)
	const {checked, setChecked} = data
	const [isActive, setActive] = useState(null);

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
		<figure className='tj1' onMouseEnter={() => setActive(isActive => isActive === props.info.id ? null : props.info.id)} onMouseLeave={() => setActive(isActive => isActive === props.info.id ? null : props.info.id)}>
			<img style={{maxWidth:"55%",
						height:"100%" ,
						boxShadow: "2px 0px 18px 10px #151515",
						borderRadius: "5px"
						}} src={props.info.imagen} alt=""  
						/>
			<figcaption >
				<div style={{width:"170px", color: "white", textAlign:"left", marginLeft: "20px"}}>
					<h4 >{props.info.titulo}</h4>
				</div>
			</figcaption>
			<div onClick={() => setChecked(checked => checked === props.info.id ? null : props.info.id)}>
				{ checked === props.info.id
				?
				<img src= {botonPausa} alt="Pausa" className="btnPausa"  />
				:
				<img src= {botonPlay} alt="Play" className={isActive === props.info.id ?  "btn-visible1" : "btn-invisible" } />
				}
			</div>
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

export default Tarjeta1