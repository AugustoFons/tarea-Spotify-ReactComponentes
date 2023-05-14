import Tarjetas2 from './Tarjetas2';


const ListaTarjetas3 = (props) => {

	return (
		<>
		<div style={{
				display: "flex",
				flexWrap: "wrap",
				columnGap: "30px",
				rowGap: "30px",
				justifyContent: "center"
				}}
				>   
				{props.lista.filter(info => info.id > 11 && info.id <= 16).map(info => (
					<Tarjetas2 info={info}/>
				))} 
		</div>
		</>
	)
}

export default ListaTarjetas3