import React from 'react'
import { useSelector } from 'react-redux';
import Note from './Notes';
import "./component.css"

function NoteList() {
    const notes = useSelector(state => state.notes);
  return (
    <div className='home'>{notes.map(note => (
        <Note key={note.id} title={note.title} description={note.description} date={note.date} />
      ))}</div>
  )
}

export default NoteList