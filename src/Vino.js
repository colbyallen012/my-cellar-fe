import React from 'react';
import './Vino.css'

const Vino = ({id, vineyard, name, color, type, year, rating, removeVino}) => {
  return (
    <div className='vino'>
      <h3 className='vineyard'>{vineyard}</h3>
      <h4 className='name'>{name}</h4>
      <p className='color'>{color}</p>
      <p className='type'>{type}</p>
      <p className='year'>Year: {year}</p>
      <p className='rating'>Rating: {rating}</p>
      <button className='delete' onClick={() => removeVino(id)}>Delete Wine</button>
    </div>
  )
}

export default Vino;