import React, { useContext }from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from '../../context/UserContext';

function MyPage() {
  const { user, refresh} = useContext(UserContext);
  if (!user) return (
    <Redirect to="/login" />
  )

  return (
    <div className="container">
      Welcome back !
    </div>
  )
}

export default MyPage
