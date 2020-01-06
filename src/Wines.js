import React from 'react';
import Vino from './Vino'
import './Wines.css'

const Wines = ({wines, removeVino}) => {
  const wineCards = wines.map(wine => {
    return <Vino
      id={wine.id} 
      vineyard={wine.vineyard}
      name={wine.name}
      color={wine.color}
      type={wine.type}
      year={wine.year}
      rating={wine.rating}
      removeVino={removeVino}
    />
  })

  return (
    <div className='wines'>
      <section className='wine-container'>
        {wineCards}
      </section>
    </div>
  )
}

export default Wines;