import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './nav.css'

function Nav() {
  const { user, logoutUser } = useContext(UserContext);

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
        <button className="btn" onClick={logoutUser}>
          Logout
        </button>
      )
      }

    </div>
  )
}

export default Nav
