import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editNote } from '../store/noteSlice';
import { Button, FormControl, InputLabel, InputBase } from '@mui/material';
import { useNavigate,useParams } from 'react-router-dom';


function EditNotes() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate=useNavigate();
  const notes = useSelector(state => state.notes);
  const noteToUpdate = notes.find(note => note.id === parseInt(id));
  const [title, setTitle] = useState(noteToUpdate ? noteToUpdate.title : '');
  const [description, setDescription] = useState(
    noteToUpdate ? noteToUpdate.description : ''
  );
  const handleUpdateNote = () => {
    if (title && description) {
      dispatch(editNote({ id: parseInt(id), title, description }));
      navigate('/noteslist'); // Redirect to note list after update
    }
  };
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
  
  return (
    <div className='home'>
      <form className="formwrap"  onSubmit={handleUpdateNote}>
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

export default EditNotes