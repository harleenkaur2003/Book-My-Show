import React from 'react'
import { timings } from '../data'

const TimeSchedule = () => {
  return (
    <>
    <div className='Slot_container'>
      <h1 className='TS_heading'>Select a Schedule</h1>
      <div className='TS_main_conatiner'>
        {timings.map((el,index)=>{
            return <RadioComponent text={el} key={index}/>
        })}
      </div>
    </div>
    </>
  )
}

export default TimeSchedule
