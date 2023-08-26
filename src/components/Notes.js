import React from 'react'
import "./component.css"
import {Link} from "react-router-dom"



function Notes({ title, description, date }) {
  return (
    < >
        
    <div className="container">
      <h2 variant="h6">{title}</h2>
      <p className='p1'>{description}</p>
      <p className='p2'>{date}</p>
      <div className="ii">
				<Link to={`/notes`}>
					<button title='Details' className='detailbutton'>Details</button>
				</Link>

				<button className='detailbutton' onClick={hanleDelete}>delete</button>
			</div>
    </div>
    </>
  )
}

export default Notes