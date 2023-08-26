import React from 'react'
import "./component.css"

function Notes({ title, description, date }) {
  return (
    < >
        
    <div className="container">
      <h2 variant="h6">{title}</h2>
      <p className='p1'>{description}</p>
      <p className='p2'>{date}</p>
    </div>
    </>
  )
}

export default Notes