import React, { useContext } from 'react';
import FavoriteCard from './FavoriteCard';
import { Link} from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { FavoriteContext } from '../../context/FavoriteContext';
import './favorites.css'

function Favorites() {
  const { favorites } = useContext(FavoriteContext);
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="main-container">
        <h1 >You're not logged in yet!</h1>
        <h2 ><Link to="/login">Log in or create an account to start your favorites list!</Link></h2>
        <br></br>
        <Link to="/login" ><button className="btn">Get Started</button></Link>
      </div>
    )
  }

  if (favorites.length === 0) {
    return (
      <div className='main-container'>
        <h1>You don't have any favorites yet!</h1>
      </div>
    )
  }

  const renderFav = favorites.map( (fav, index) => <FavoriteCard key={fav.id} cake={fav.cake} fav_id = {fav.id} index={index + 1}/>)

  return (
    <div className = 'main-container' >
        <h1 className = 'header'>Your Favorites</h1>
        {renderFav}
    </div>
  )
}

export default Favorites
