import React from 'react'
import { seats } from '../data'
import SeatInput from './SeatInput'
import '../css/SelectSeats.css'

const SelectSeats = () => {
  const context= useContext(BsContext)
  const {noOfSeat,changeNoOfSeats}= context()

  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select Seats:</h1>
      <div className='SS_main_container'>
      {seats.map((el,index)=>{
        <SeatInput key={index} text={el} noOfSeat={noOfSeat} changeNoOfSeats={changeNoOfSeats}/>
      })}
      </div>
    </div>
  )
}

export default SelectSeats
