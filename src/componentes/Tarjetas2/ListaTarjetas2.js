import Tarjetas2 from "./Tarjetas2"



const ListaTarjetas2 = (props) => {
  return (
    <>
    <div
    style={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: "30px"

    }}
    >   
        {props.lista.filter(info => info.id > 6 && info.id <= 11).map(info => (<Tarjetas2 key={info.id} info={info} />))} 
    
    </div>
    <h2 style={{color: "white", marginLeft: "40px"}}>Your top mixes</h2>
    </>
  )
}

export default ListaTarjetas2