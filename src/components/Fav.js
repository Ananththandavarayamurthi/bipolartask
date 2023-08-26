import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import "./component.css"
function Fav() {
  const notes = useSelector(state => state.notes);
  return (
    
      <div className='home1'>{notes&&notes.filter((e)=>{if(e.fav==="true"){
        return e
      }}).map((note) => (
        <div className="container">
        <h2 variant="h6">{note.title}</h2>
        <p className='p1'>{note.description}</p>
        <p className='p2'>{note.date}</p>
        <div className="ii">
          <Link to={`/updatenotes/${note.id}`}>
            <button title='Details' className='detailbutton'>Edit</button>
          </Link>
           </div>
      </div>
    ))}</div>
  )
}

export default Fav