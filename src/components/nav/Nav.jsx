import React from 'react'

function Nav() {
  return (
      <>
        <NavLink className='nav-buttons'
          to="/"
          exact
          style={linkStyles}
          activeStyle={{ background: "brown" }}
        >
          Home
        </NavLink>
        <NavLink className='nav-buttons'
          to="/discography"
          exact
          style={linkStyles}
          activeStyle={{ background: "brown" }}
        >
          Discography
        </NavLink>
        <NavLink className='nav-buttons'
          to="/schedule"
          exact
          style={linkStyles}
          activeStyle={{ background: "brown" }}
        >
          Tour Schedule
        </NavLink>
  
        <NavLink
          to="/create" className='nav-buttons'
          exact
          style={linkStyles}
          activeStyle={{ background: "brown" }}
        >
          Create
        </NavLink>
      </>
    );
}

export default Nav
