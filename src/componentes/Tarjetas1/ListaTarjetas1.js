import Tarjetas1 from './Tarjetas1'

const ListaTarjetas1 = (props) => {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      rowGap: "20px"
    }}>
      {props.lista.filter(info => info.id <= 6).map(info => (<Tarjetas1 key={info.id} info={info} />))} 
    </div>
  )
}

export default ListaTarjetas1

