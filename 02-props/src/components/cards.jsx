import React from 'react'

const cards = (props) => {
  return (
    <div>
      <h1>{props.user}</h1>
      <h2>{props.age}</h2>
      <p>Lorem ipsum, dolor sit.</p>
    </div>
  )
}

export default cards
