import React from 'react'
import "./component.css"
import {Link} from "react-router-dom"
import {  useDispatch } from 'react-redux';
import { deleteNote } from '../store/noteSlice';



function Notes({ title, description, date,id }) {
  const dispatch = useDispatch();
  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };
  return (
    < >
        
    <div className="container">
      <h2 variant="h6">{title}</h2>
      <p className='p1'>{description}</p>
      <p className='p2'>{date}</p>
      <div className="ii">
				<Link to={`/notes/${id}`}>
					<button title='Details' className='detailbutton'>Details</button>
				</Link>

				<button  className='detailbutton' onClick={() => handleDeleteNote(id)}>Delete</button>
			</div>
    </div>
    </>
  )
}

export default Notes