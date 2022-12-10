import Tarjetas1 from './Tarjetas1'
import { useState } from 'react';

const ListaTarjetas1 = (props) => {


  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      columnGap: "40px",
      rowGap: "20px"
    }}>
      {props.lista.filter(info => info.id <= 6).map(info => (<Tarjetas1 key={info.id} info={info} />))} 
    </div>
  )
}

export default ListaTarjetas1

