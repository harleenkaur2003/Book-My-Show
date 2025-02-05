import React from 'react'
import RadioComponent from './RadioComponent'
import { movie } from '../data'

const SelectMovie = () => {
  return (
    <>
    <h1 className='SM_heading'>Select a Movie :</h1>
    <div className='SM_main_container'>
        {movie.map((el,index)=>{
            return(
                <RadioComponent text={el} key={index}/>
            )
        })
        }
    </div>    
    </>
  )
}

export default SelectMovie
