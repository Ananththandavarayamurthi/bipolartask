import React, { useState } from 'react';
import { Button, FormControl, InputLabel, InputBase } from '@mui/material';
import { addNote } from '../store/noteSlice'; // Importing the addNote action creator from the noteSlice
import store from '../store/store'; // Importing the Redux store

function CreateNotes() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const inputBaseStyle = {
    color: "#00ffff",
    border: "#00ffff solid 0.5px",
    borderRadius: "10px",
    height: "40px",
    alignItems: "flex-start", 
    display: "flex", 
    padding: "10px",
    width: "400px",
    marginTop:"12px",
    transition: "box-shadow 0.3s ease-in-out", // Add smooth transition
    '&:hover': {
      boxShadow: "0 0 8px rgba(0, 255, 255, 0.6)", // Box shadow on hover
    },
  };
  const inputBaseStyle2 = {
    color: "#00ffff",
    marginTop:"12px",
    border: "#00ffff solid 0.5px",
    borderRadius: "10px",
    height: "200px",
    alignItems: "flex-start", 
    display: "flex", 
    padding: "5px",
    width: "400px",
    transition: "box-shadow 0.3s ease-in-out",
    
  };
  const handleAddNote = (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    if (title && description) {
      const newNote = {
        id: Date.now(), // Generating a unique ID using the current timestamp
        title,
        description,
        date: new Date().toLocaleString(), // Generating the current date and time as a string
      };
      store.dispatch(addNote(newNote)); // Dispatching the addNote action to add the new note to the Redux store
      setTitle(''); // Clearing the title input
      setDescription(''); // Clearing the description input
    }
  };

  return (
    <div className='home'>
      <form className="formwrap" onSubmit={handleAddNote}>
        <FormControl variant="outlined" style={{padding:"5px",width:"400px"}}>
          <InputLabel style={{ color: "#00ffff" ,fontSize: "2rem"}} shrink htmlFor="title-input">
            Title
          </InputLabel>
          <InputBase id="title-input"
           style={inputBaseStyle}
           value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl variant="outlined" style={{padding:"5px",width:"400px"}}>
          <InputLabel style={{ color: "#00ffff" ,fontSize: "2rem"}} shrink htmlFor="description-input">
            Description
          </InputLabel>
          <InputBase id="description-input" 
          style={inputBaseStyle2} 
          value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <Button id="button-input" style={{ backgroundColor: "#00ffff", color: "#ffffff",transition: "box-shadow 0.3s ease-in-out", // Add smooth transition
    '&:hover': {
      boxShadow: "0 0 8px rgba(0, 255, 255, 0.6)", // Box shadow on hover
    } }} type="submit">
          Add Note
        </Button>
      </form>
    </div>
  )
}

export default CreateNotes;

