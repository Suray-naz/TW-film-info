import React from 'react'
import { Rating } from 'react-simple-star-rating';

const FilmInfo = ({selectDate, data}) => {
  const selectedFilm=data.filter((film)=>film.date === selectDate)[0];

  if(!selectedFilm){
    return(
      <p className='container animasyon text-start fw-bolder text-info'>Please select one!</p>
    )
  }


  return (
    <div className='m-auto p-3'>
      <h3 className='text-primary'>{selectedFilm.title}</h3>
      <p className='fs-5'>{selectedFilm.body}</p>
      <p className='text-danger fw-semibold'>{selectedFilm.tags.join("/")}</p>
      <div className='d-flex align-items-center'>
        <Rating starts={5} size={30}/>
        <p className='text-danger fs-4 mt-3 ms-2'>{selectedFilm.rate} /10</p>
      </div>

    </div>
  )
}

export default FilmInfo