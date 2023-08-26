import React from 'react';
import { useSelector } from 'react-redux'; // Importing useSelector hook from react-redux for accessing store state
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation
import "./component.css"; // Importing the CSS file for styling

function Fav() {
  const notes = useSelector(state => state.notes); // Accessing notes from the Redux store

  return (
    <div className='home1'>
      {/* Mapping through the 'notes' array to display favorite notes */}
      {notes && notes.filter((e) => { if (e.fav === "true") { return e } }).map((note) => (
        <div className="container" key={note.id}> {/* Applying the 'container' class for styling */}
          <h2 variant="h6">{note.title}</h2> {/* Displaying the note title */}
          <p className='p1'>{note.description}</p> {/* Displaying the note description */}
          <p className='p2'>{note.date}</p> {/* Displaying the note date */}
          <div className="ii">
            {/* Link to navigate to the 'updatenotes' route with the note's ID */}
            <Link to={`/updatenotes/${note.id}`}>
              <button title='Details' className='detailbutton'>Edit</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Fav;
