import React, {useState } from 'react'

export const CakeContext = React.createContext()

export const CakeProvider = ({ children }) => {

    const [reviewCake, setReviewCake] = useState ({});

    function getReviewCakeByCakeId(cakeId) {
        fetch( `/cakes/${cakeId}`)
        .then( r => {
            if (r.status === 200) {
                r.json().then(data => setReviewCake(data))
                // .then(data => setReviewCake(data))
            }
        })
    }


    return (
        <CakeContext.Provider
            value={{reviewCake, getReviewCakeByCakeId }}
        >
            {children}
        </CakeContext.Provider>
    )
    }

export default CakeProvider