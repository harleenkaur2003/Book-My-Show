import React from 'react'
import '../css/SeatInput.css'

const SeatInput = ({key,text,noOfSeat,changeNoOfSeats}) => {

  const change_seats=(e)=>{
    changeNoOfSeats({...noOfSeat,[e.target.name]: Number(e.target.value)})

    window.localStorage.setItem(
      "seats",
      JSON.stringify({
        ...noOfSeat,
        [e.target.name]:Number(e.target.value)
      })
    )
  }
  return (
    <div>
      <div className='form-check-label'>
        <span className='text'>{text}</span>
            <input type='number' className='seat-input' placeholder='0' max='30' min='0' name={text} onChange={change_seats} value={noOfSeat[text]} />
      </div>
    </div>
  )
}

export default SeatInput
