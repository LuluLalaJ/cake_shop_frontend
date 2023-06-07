import React from 'react'

function CakeCard() {
  return (
    <div>CakeCard
      <Figure>
        <Figure.Image
          // className="cake-image"
          // width={171}
          // height={180}
          // alt="171x180"
          // src={cake image}
          // onClick={() => displaySongs(id)}
        />

        <Figure.Caption>
          {/* <h2>cake name, cake price, description?</h2> */}
        </Figure.Caption>

      </Figure>
    </div>

  )
}
// we need to import something to make this figure work, coming back to that 
export default CakeCard
