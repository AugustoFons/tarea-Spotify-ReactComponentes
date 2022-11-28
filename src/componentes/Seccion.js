
import ListaTarjetas1 from "./Tarjetas1/ListaTarjetas1"
import ListaTarjetas2 from "./Tarjetas2/ListaTarjetas2"

const Seccion = (props) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
        <h2 style={{color: "white", marginLeft: "73px"}}>Good evening</h2>
        <ListaTarjetas1 lista={props.lista} />
        <h2 style={{color: "white", marginLeft: "73px"}}>Recently played</h2>
        <ListaTarjetas2 lista={props.lista} />

        </div>
    )
}



export default Seccion