import React from 'react'
import { useSelector } from 'react-redux';
import Note from './Notes';
import "./component.css"

function NoteList() {
    const notes = useSelector(state => state.notes);
  return (
    <div className='home'>{notes.map((note,index) => (
        <Note key={note.id} title={note.title} description={note.description} date={note.date} id={note.id}  />
      ))}</div>
  )
}

export default NoteList