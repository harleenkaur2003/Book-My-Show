import React from 'react'
import { seats } from '../data'
import SeatInput from './SeatInput'

const SelectSeats = () => {
  return (
    <div>
      {seats.map((el,index)=>{
        <SeatInput key={index} text={el}/>
      })}
    </div>
  )
}

export default SelectSeats
