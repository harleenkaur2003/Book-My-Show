import React from 'react'

const SeatInput = ({key,text}) => {
  return (
    <div>
      <div>
        <span>{text}</span>
            <input type='number' className='' placeholder='0' max='30' min='0' />
      </div>
    </div>
  )
}

export default SeatInput
