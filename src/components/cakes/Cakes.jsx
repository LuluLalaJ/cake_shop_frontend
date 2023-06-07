import React from 'react'
import CakeCard from './CakeCard'

function Cakes({cakes}) {

  const renderCakeCards = cakes.map (cake =>
    <CakeCard
      key = {cake.id}
      cake = {cake}
  />)
  return (
      <div>
          <CakeCard
          cake = {cake}
          />
      </div>
  )
}

export default Cakes
