import React from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import { useSelector } from 'react-redux';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './component.css';

function Nav() {
  const notes = useSelector(state => state.notes);
  return (
    <div>
      <nav className="nav-wrapper">
        <NavLink to="/create" className="link">
          <Tooltip enterDelay={500} leaveDelay={100} arrow title="Create Note" TransitionComponent={Zoom} placement="right">
            <Badge color="primary">
              <AddIcon />
              <span>CreateNotes</span>
            </Badge>
          </Tooltip>
        </NavLink>
        <NavLink to="/noteslist" className="link">
          <Tooltip enterDelay={500} leaveDelay={100} arrow title="Notes" TransitionComponent={Zoom} placement="right">
            <Badge color="primary" badgeContent={notes.length} color="success">
              <FormatListBulletedIcon />
              <span>Notes</span>
            </Badge>
          </Tooltip>
        </NavLink>
        <NavLink to="/fav" className="link">
          
            <Badge color="primary" badgeContent={notes.filter((e)=>{
              if(e.fav==="true"){
              return e
              }}).length} color="secondary">
              <FavoriteBorderIcon />
              <Tooltip enterDelay={500} leaveDelay={100} arrow title="Important notes" TransitionComponent={Zoom} placement="right"><span>Fav</span>
              </Tooltip>
            </Badge>
          
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
