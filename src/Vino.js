import React from 'react';
import './Vino.css'

const Vino = ({vineyard, name, color, type, year, rating}) => {
  return (
    <div className='vino'>
      <h3>{vineyard}</h3>
      <h4>{name}</h4>
      <p>{color}</p>
      <p>{type}</p>
      <p>{year}</p>
      <p>{rating}</p>
    </div>
  )
}

export default Vino;