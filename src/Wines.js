import React from 'react';
import Vino from './Vino'
import './Wines.css'

const Wines = ({wines}) => {
  const wineCards = wines.map(wine => {
    return <Vino 
      vineyard={wine.vineyard}
      name={wine.name}
      color={wine.color}
      type={wine.type}
      year={wine.year}
      rating={wine.rating}
    />
  })

  return (
    <div className='wines'>
      <h2>Wine Container</h2>
      <section className='wine-container'>
        {wineCards}
      </section>
    </div>
  )
}

export default Wines;