import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useSelector } from 'react-redux';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './component.css';

function Nav() {
  const notes = useSelector(state => state.notes);
  const [toggle,setToggle]=useState(false)
  return (
    <div>
      <nav className="nav-wrapper" style={toggle?{minWidth:"25rem"}:{minWidth:"4rem"}}>
        <span onClick={()=>{setToggle(!toggle)}}>{toggle?<ArrowCircleLeftIcon color="primary" sx={{ fontSize: 40 }}/>:<ArrowCircleRightIcon color="primary" sx={{ fontSize: 40 }}/>}</span>
        <NavLink to="/create" className="link" >
          <Tooltip enterDelay={500} leaveDelay={100} arrow title="Create Note" TransitionComponent={Zoom} placement="right">
            <Badge color="primary">
              <AddIcon />
              <span>{toggle?"CreateNotes":""}</span>
            </Badge>
          </Tooltip>
        </NavLink>
        <NavLink to="/noteslist" className="link">
          <Tooltip enterDelay={500} leaveDelay={100} arrow title="Notes" TransitionComponent={Zoom} placement="right">
            <Badge color="primary" badgeContent={notes.length} color="success">
              <FormatListBulletedIcon />
              <span>{toggle?"Notes":""}</span>
            </Badge>
          </Tooltip>
        </NavLink>
        <NavLink to="/fav" className="link">
          
            <Badge color="primary" badgeContent={notes.filter((e)=>{
              if(e.fav==="true"){
              return e
              }}).length} color="secondary">
              <FavoriteBorderIcon />
              <Tooltip enterDelay={500} leaveDelay={100} arrow title="Important notes" TransitionComponent={Zoom} placement="right"><span>{toggle?"Fav":""}</span>
              </Tooltip>
            </Badge>
          
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
