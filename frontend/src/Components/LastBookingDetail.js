import React from 'react'
import '../css/LastBookingDetail.css'

const LastBookingDetail = () => {
  return (
    <div className='last_booking_details_container_main'>
      <h1 className='last_booking_details_header'>Last Booking</h1>
      <div className='seats_container'></div>
      <p className='seats_header'>Seats</p>
      <ul className='seats'>
        {seats.map((seats,index)=>{
          <li className='seat_value' key='index'>
            (seat):0
          </li>
        })}
      </ul>
      <p className='slot' style={{textAlign:'left'}}>Slot : 00:00 AM <span></span></p>
      <p className='movie'>Movie : <span>Tenet</span></p>
    </div>
    
  )
}

export default LastBookingDetail
