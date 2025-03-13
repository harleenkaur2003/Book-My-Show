import React, { useContext } from 'react'
import { slots } from '../data'
import RadioComponent from './RadioComponent'
import '../css/TimeSchedule.css'
import BsContext from '../contextTemp/BsContext'

const TimeSchedule = () => {
  const context= useContext(BsContext);

  const {time,changeTime}=context

  const handleChangeTime=(val)=>{
    changeTime(val) 

    window.localStorage.setItem("slot",val)
  }

  return (
    <>
    <div className='Slot_container'>
      <h1 className='TS_heading'>Select a Schedule</h1>
      <div className='TS_main_conatiner'>
        {slots.map((el,index)=>{
            return <RadioComponent text={el} key={index} data={time} changeSelection={handleChangeTime}/>
        })}
      </div>
    </div>
    </>
  )
}

export default TimeSchedule
