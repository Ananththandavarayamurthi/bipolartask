import React ,{useState}from 'react'
import { useSelector } from 'react-redux';
  

import Note from './Notes';
import "./component.css"

function NoteList({searchterm,setSearchTerm}) {
    const notes = useSelector(state => state.notes);
    const filteredData = notes&&notes.filter(note => {
      if (searchterm === '') {
        return true;
      }
      const lowerCaseSearchTerm = searchterm.toLowerCase();
      return (
        note.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        note.description.toLowerCase().includes(lowerCaseSearchTerm)
      );
    });
    
  return (
    <div className='home1'>
       
      {filteredData&&filteredData.map((note,index) => (
        <Note key={note.id} title={note.title} description={note.description} date={note.date} id={note.id} fav={note.fav} />
      ))}</div>
  )
}

export default NoteList