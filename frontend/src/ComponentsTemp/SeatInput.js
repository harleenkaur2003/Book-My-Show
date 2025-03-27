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
    const { name, value } = e.target;
    const updatedValue = Math.max(0, Math.min(30, Number(value))); // Validate input

    changeNoOfSeats({ ...noOfSeat, [name]: updatedValue });

    window.localStorage.setItem("seats", JSON.stringify({ ...noOfSeat, [name]: updatedValue }));
  };

  const handleChecked=(text)=>{
    changeSeats(text);

  }
  return (
    <div>
      <div className={`form-check-label seats${
        seat === text ? "active":"inactive"
      }`}
      id={`${index}text`}
      onClick={() => handleChecked(text)}
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
            value={noOfSeat[text] !== undefined ? noOfSeat[text] : ""}

            />
      </div>
    </div>
  )
}

export default SeatInput;


/*
import React from 'react';
import '../css/SeatInput.css';

const SeatInput = ({ changeSeats, seat, index, text, noOfSeat, changeNoOfSeats }) => {

  const change_seats = (e) => {
    const { name, value } = e.target;
    const updatedSeats = { ...noOfSeat, [name]: Number(value) };

    changeNoOfSeats(updatedSeats);

    window.localStorage.setItem("seats", JSON.stringify(updatedSeats));
  };

  const handleChecked = (text) => {
    changeSeats(text);
  };

  return (
    <div>
      <div 
        className={`form-check-label seats${seat === text ? " active" : " inactive"}`}
        id={`${index}text`}
        onClick={() => handleChecked(text)}
      >
        <span className="text">{text}</span>
        <input
          type="number"
          className="seats-input"
          placeholder="0"
          max="30"
          min="0"
          id={`${index}input`}
          name={text}
          onChange={change_seats}
          value={noOfSeat[text] !== undefined ? noOfSeat[text] : ""}
        />
      </div>
    </div>
  );
};

export default SeatInput;
*/