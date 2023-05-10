import { useContext, useState } from "react"
import { ThemeContext } from "../../context/PlayContextProvider"
import botonPlay from '../img/botonPlay.png'
import botonPausa from '../img/botonPausa.png'

const Tarjeta1 = (props) => {
    const data = useContext(ThemeContext)
	const {checked, setChecked} = data

	const [isActive, setActive] = useState(null);
	console.log(isActive)

return (
    <figure className='tj1' onMouseEnter={() => setActive(isActive => isActive === props.info.id ? null : props.info.id)} onMouseLeave={() => setActive(isActive => isActive === props.info.id ? null : props.info.id)}>
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
		<div onClick={() => setChecked(checked => checked === props.info.id ? null : props.info.id)}>
			{ checked === props.info.id
			?
			<img src= {botonPausa} alt="Pausa" className="btnPausa"  />
			:
			<img src= {botonPlay} alt="Play" className={isActive === props.info.id ?  "btn-visible1" : "btn-invisible" } />
			}
		</div>
	</figure>
)
}

export default Tarjeta1