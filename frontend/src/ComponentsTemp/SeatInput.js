import React from 'react'
import '../css/SeatInput.css'

const SeatInput = ({
  changeSeats,
  seat,
  index,
  text,
  noOfSeat,
  changeNoOfSeats}) => {

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

  const handleChecked=(text)=>{
    changeSeats(text);

  }
  return (
    <div>
      <div className={`form-check-label seats${
        seat === text ? "active":"inactive"
      }`}
      id={`${index}text`}
      onClick={()=>{
        handleChecked(text,index);
      }}
      >
        <span className={'text'}>{text}</span>
            <input 
            type='number' 
            className='seats-input' 
            placeholder='0' 
            max='30' 
            id={`${index}input`}
            min='0' 
            name={text} 
            onChange={change_seats} 
            value={noOfSeat[text]} 
            />
      </div>
    </div>
  )
}

export default SeatInput;
