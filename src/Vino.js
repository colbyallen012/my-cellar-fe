import React from 'react';
import './Vino.css'

const Vino = ({id, vineyard, name, color, type, year, rating, removeVino}) => {
  return (
    <div className='vino'>
      <h3>{vineyard}</h3>
      <h4>{name}</h4>
      <p>{color}</p>
      <p>{type}</p>
      <p>{year}</p>
      <p>{rating}</p>
      <button onClick={() => removeVino(id)}>Delete Wine</button>
    </div>
  )
}

export default Vino;