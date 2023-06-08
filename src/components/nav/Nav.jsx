import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';
import { FavoriteContext } from '../../context/FavoriteContext'
import './nav.css'

function Nav() {
  const { user, logoutUser } = useContext(UserContext);
  const { clearCart } = useContext(CartContext)
  const { clearFavs } = useContext(FavoriteContext)

  const logout = () => {
    logoutUser()
    clearCart()
    clearFavs()
  }

  return (
    <div className="container nav-container">

      <NavLink to="/" exact className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" exact className="nav-link">
        About
      </NavLink>
      <NavLink to="/cakes" className="nav-link">
        Cakes
      </NavLink>
      <NavLink to="/favorites" className="nav-link">
        Favorites
      </NavLink>
      <NavLink to="/shoppingcart" className="nav-link">
        Cart
      </NavLink>


      {!user
      ? (
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
      )
      : (
        <>
          <NavLink to="/mypage" className="nav-link">
            My Page
          </NavLink>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>

      )
      }

    </div>
  )
}

export default Nav
