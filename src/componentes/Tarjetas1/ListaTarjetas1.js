import Tarjeta1 from "./Tarjeta1";

const ListaTarjetas1 = (props) => {


	return (
		<div style={{
			display: "flex",
			flexWrap: "wrap",
			columnGap: "30px",
			rowGap: "30px",
			justifyContent: "flex-start"
			}}>
			{props.lista.filter(info => info.id <= 6).map(info => (
				<Tarjeta1 info={info} />
			))} 
		</div>
	)
}

export default ListaTarjetas1

