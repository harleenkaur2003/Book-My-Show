import React from 'react'
import { timings } from '../data'
import '../css/TimeSchedule.css'

const TimeSchedule = () => {
  const context= useContext(BsContext);

  const {time,changeTime}=context

  const handleChangeItem=(val)=>{
    changeTime(val) 

    window.localStorage.setItem("slot",val)
  }

  return (
    <>
    <div className='Slot_container'>
      <h1 className='TS_heading'>Select a Schedule</h1>
      <div className='TS_main_conatiner'>
        {timings.map((el,index)=>{
            return <RadioComponent text={el} key={index} data={time} changeSelection={handleChangeItem}/>
        })}
      </div>
    </div>
    </>
  )
}

export default TimeSchedule
