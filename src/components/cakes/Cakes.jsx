import React from 'react';
import Figure from 'react-bootstrap/Figure';
import CakeCard from './CakeCard';

import "./cakes.css"

function Cakes({cakes}) {

  const renderCakes = cakes.map(cake =>
        <CakeCard
          key = { cake.id }
          cake = { cake }
        />)


  return(
    <div className='main-container'>
      <h1 className = 'header'>Explore Our Cakes!</h1>
      <Figure className='cake-container'>
        {renderCakes}
      </Figure>
    </div>
  )
}

export default Cakes;
