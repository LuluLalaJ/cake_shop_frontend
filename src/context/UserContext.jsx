import React, { useEffect, useState } from 'react'

export const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [refreshPage, setRefreshPage] = useState(false)

  useEffect(()=> {
    fetch('/check_session')
    .then(res => {
      if (res.ok) {
        res.json()
        .then( data => {
          setUser(data)
          console.log(data)
        } )
      }
    })
    .catch( error => {
        console.error(error)
    })
  }, [refreshPage])

  const logoutUser = () => {
    fetch('/logout', {
      method: "DELETE"
    }).then( res => {
      if (res.status === 204) {
        setUser(null)
      }
    })
  }

  const refresh = () => {
    setRefreshPage(!refreshPage)
  }

  return (
    <UserContext.Provider
        value={{ user, setUser, logoutUser, refresh}}
    >
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
