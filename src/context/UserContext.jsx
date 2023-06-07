import React, { useContext, useEffect, useState } from 'react'

export const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(()=> {
    fetch('/check_session')
    .then(res => {
      if (res.ok) {
        res.json()
        .then( data => setUser(data) )
      }
    })
    .catch( error => {
        console.error(error)
    })
  }, [])

  return (
    <UserContext.Provider
        value={{ user, setUser}}
    >
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
