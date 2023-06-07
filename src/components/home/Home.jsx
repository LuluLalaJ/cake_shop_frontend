import React from 'react';
import { Link } from 'react-router-dom';
import cake_with_macarons_home from '../../assets/cake_with_macarons_home.jpeg';
import cupcakes_home from '../../assets/cupcakes_home.jpeg';
import './home.css'

function Home() {
  return (
    <div className='container home-container'>
      <article className='content'>
        <h1>The Cake Shop</h1>
        <p>Indulge in pure sweetness at The Cake Shop.
          Discover a world of delightful confections,
          from beautifully adorned cakes to irresistible pastries and cupcakes.
          Our expert bakers blend passion and craftsmanship to create edible
          masterpieces that will captivate your senses. With every bite,
          savor the perfect harmony of flavors and textures.
          Whether it's a special celebration or a sweet craving,
          let Sugar Haven Bakery be your blissful escape into a realm of sugar-coated enchantment.
          Join us and experience the magic of pure indulgence.
          </p>
          <Link to="/cakes" className="btn">Shop Cakes</Link>
      </article>
      <article className="img-container">
        <img src={cake_with_macarons_home} alt="cake with macarons" className='main-img'/>
        <img src={cupcakes_home} alt="cup cakes" className='accent-img'/>
      </article>
    </div>
  )
}

export default Home
