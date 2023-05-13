import PlayContextProvider from "../context/PlayContextProvider"
import ListaTarjetas1 from "./Tarjetas1/ListaTarjetas1"
import ListaTarjetas2 from "./Tarjetas2/ListaTarjetas2"
import ListaTarjetas3 from "./Tarjetas2/ListaTarjetas3"

const Seccion = (props) => {
    return (
        <PlayContextProvider>
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems:"flex-start",
            padding:"20px 50px 50px 50px",
            rowGap:"30px"
        }}>
        <h1 style={{color: "white" }}>Good evening</h1>
        <ListaTarjetas1 lista={props.lista} />
        <h2 style={{color: "white", }}>Recently played</h2>
        <ListaTarjetas2 lista={props.lista} />
        <h2 style={{color: "white"}}>jump back in</h2>
        <ListaTarjetas3 lista={props.lista} />
        </div>
        </PlayContextProvider>
    )
}



export default Seccion