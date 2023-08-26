import React, { useState } from 'react';
import { Button, FormControl, InputLabel, InputBase } from '@mui/material';
import { addNote } from '../store/noteSlice';
import store from '../store/store';

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
    padding: "5px",
    width: "400px",
    transition: "box-shadow 0.3s ease-in-out", // Add smooth transition
    '&:hover': {
      boxShadow: "0 0 8px rgba(0, 255, 255, 0.6)", // Box shadow on hover
    },
  };
  const inputBaseStyle2 = {
    color: "#00ffff",
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
    e.preventDefault();
    if (title && description) {
      const newNote = {
        id: Date.now(),
        title,
        description,
        date: new Date().toLocaleString(),
      };
      store.dispatch(addNote(newNote));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className='home'>
      <form className="formwrap"  onSubmit={handleAddNote}>
        <FormControl variant="outlined" style={{padding:"5px",width:"400px"}}>
          <InputLabel style={{ color: "#00ffff" ,gap:"2px"}} shrink htmlFor="title-input">
            Title
          </InputLabel>
          <InputBase id="title-input"
           style={inputBaseStyle}
           value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl variant="outlined" style={{padding:"5px",width:"400px"}}>
          <InputLabel style={{ color: "#00ffff" ,padding:"2px"}} shrink htmlFor="description-input">
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
