import React from 'react'
import Home from './PagesTemp/Home.js'
import BsState from './contextTemp/BsState'

const App = () => {
  return (
    <div className='App'>
      <BsState>
      <Home />
      </BsState>
    </div>
  )
}

export default App
