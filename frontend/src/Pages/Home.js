import React from 'react'
import SelectMovie from '../components/SelectMovie'
import LastBookingDetail from '../components/LastBookingDetail'

const Home = () => {
  return (
    <div className='container'>
        <div className='wrapper'>
        <div className='select_movie_container'>
            <SelectMovie/>
        </div>
        <div className='last_booking_details_container'>
            <LastBookingDetail/>
        </div>
        <div className='time_seats_container'>
            <TimeSchedule/>
            <SelectSeats/>
        </div>
        <button className='BN-btn'>Book Now</button>
    </div>
    </div>
  )
}

export default Home
