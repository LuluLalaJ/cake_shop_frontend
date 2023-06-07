import React, {useEffect, useState}  from 'react';
import Figure from 'react-bootstrap/Figure';
import CakeCard from './CakeCard';

import "./cakes.css"

function Cakes({cakes, addFavoriteCake}) {

  console.log(cakes)

  const renderCakes = cakes.map(cake =>
        <CakeCard
          key = { cake.id }
          cake = { cake }
          addFavoriteCake = {addFavoriteCake}
        />)


  return(
    <div className='container'>
      <h1>Cakes Page</h1>
      <Figure className='cake-container'>
        {renderCakes}
      </Figure>
    </div>
  )
}

export default Cakes;
