import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { deleteNote, markAsFavorite, markAsNotFavorite } from '../store/noteSlice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Notes({ title, description, date, id,fav  }) {
  const dispatch = useDispatch();
  
  

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  const addtoFav = (id) => {

    dispatch( markAsFavorite(id)); 
    
  };

  return (
    <div className="container">
      <h2 variant="h6">{title}</h2>
      <p className='p1'>{description}</p>
      <p className='p2'>{date}</p>
      <button className="detailbutton" onClick={() => addtoFav(id)}> {/* Added a callback function */}
        {fav ==="true" ? <FavoriteIcon /> : <FavoriteBorderIcon />} {/* Conditionally rendering the icons */}
        <span></span>
      </button>
      <div className="ii">
        <Link to={`/updatenotes/${id}`}>
          <button title='Details' className='detailbutton'>Edit</button>
        </Link>
        <button className='detailbutton' onClick={() => handleDeleteNote(id)}>Delete</button>
      </div>
    </div>
  );
}

export default Notes;
