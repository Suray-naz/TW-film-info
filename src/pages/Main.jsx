import React from 'react'
import FilmYear from '../components/FilmYear';
import {data} from "./../helper/data";

const Main = () => {
  return (
    <div>
      <FilmYear data={data}/>
    </div>
  )
}

export default Main