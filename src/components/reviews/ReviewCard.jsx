
import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';

function ReviewCard({review}) {
  const { user } = useContext(UserContext);
  const {cake: {name}, content, user: {username}, id} = review

  const [editable, setEditable] = useState(false)

  //useEffect prevents infinite rerendering;
  console.log('review card user', user)
  useEffect(() => {
    if (user && user.username === username) {
      setEditable(true);
    } else {
      setEditable(false)
    }
  }, [user, username]);

  return (
    <div>
        <h2>{username}: </h2>
        <p>{content}</p>
        {editable
        ?
        <>
            <button className="btn">Edit my review</button>
            <button className="btn">Delete my review</button>
        </>
        : null}
    </div>
  )
}

export default ReviewCard
