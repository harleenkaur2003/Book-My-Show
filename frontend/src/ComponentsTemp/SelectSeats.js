import React, { useContext, useState } from 'react'
import { seats } from '../data'
import SeatInput from './SeatInput'
import '../css/SelectSeats.css'
import BsContext from '../contextTemp/BsContext'

const SelectSeats = () => {
  const [seat, changeSeats]= useState([""]);
  const context= useContext(BsContext);
  const {noOfSeat,changeNoOfSeats}= context;

  return (
    <>
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select Seats:</h1>
      <div className='SS_main_container'>
      {seats.map((el,index)=>{
        return(
          <SeatInput 
          seat={seat}
          key={index}
          index={index} 
          changeSeats={changeSeats}
          text={el} 
          noOfSeat={noOfSeat} 
          changeNoOfSeats={changeNoOfSeats}
          />
      
        );
       
      })}
      </div>
    </div>
    </>
  )
}

export default SelectSeats;
