
import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { ReviewContext } from '../../context/ReviewContext';
function ReviewCard({review}) {

  const { user } = useContext(UserContext);
  const {cake: {name}, content, user: {username}, id} = review
  const { deleteReviewByReviewId } = useContext(ReviewContext)

  const [editable, setEditable] = useState(false)


  //useEffect prevents infinite rerendering;
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
            <button className="btn" onClick={null}>Edit my review</button>
            <button className="btn" onClick={()=>deleteReviewByReviewId(id)}>Delete my review</button>
        </>
        : null}
    </div>
  )
}

export default ReviewCard
