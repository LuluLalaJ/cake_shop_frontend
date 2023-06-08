import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Error() {
  return (
    <div className='container'>
      <h1>Uh-oh! It seems like the
        recipe for this page got lost in a cake batter tornado.
        Our bakers are on the hunt for the missing ingredients.
        In the meantime, let's satisfy your sweet tooth by exploring
        our delicious cake offerings!</h1>
       <Link to="/cakes" className="btn">Shop Cakes</Link>
    </div>
  )
}

export default Error
