import React, { useContext } from 'react'
import RadioComponent from './RadioComponent'
import { movieList } from '../data'
import '../css/SelectMovie.css'
import BsContext from '../contextTemp/BsContext'


const SelectMovie = () => {
  const context= useContext(BsContext);

  const {movie,changeMovie}= context || {};

  const handleChangeMovie =(value)=>{
    changeMovie(value);

    window.localStorage.setItem("movie",value);
  }
  return (
    <>
    <h1 className='SM_heading'>Select a Movie :</h1>
    <div className='SM_main_container'>
        {movieList.map((el,index)=>{
            return(
                <RadioComponent 
                text={el} 
                key={index}
                changeSelection={handleChangeMovie}
                data={movie || ""} 
                />
            )
        })
        }
    </div>    
    </>
  )
}

export default SelectMovie
