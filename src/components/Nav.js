import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useSelector } from 'react-redux';
import logo from "../img/at-sign-at-svgrepo-com.svg";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './component.css';
import { FormControl, InputLabel, InputBase } from '@mui/material';

function Nav({ searchterm, setSearchTerm }) {
  // Get the notes from the Redux store
  const notes = useSelector(state => state.notes);
  // State to control the sidebar toggle
  const [toggle, setToggle] = useState(false);

  // Style for the search input
  const inputBaseStyle = {
    color: "#00ffff",
    border: "#00ffff solid 0.5px",
    borderRadius: "10px",
    width: "200px",
    height: "40px",
    marginTop: "12px",
  };

  return (
    <div>
      <nav className="nav-wrapper" style={toggle ? { minWidth: "25rem" } : { minWidth: "4rem" }}>
        {/* Toggle button to expand/collapse the sidebar */}
        <span onClick={() => { setToggle(!toggle) }}>
          {toggle ? <ArrowCircleLeftIcon color="primary" sx={{ fontSize: 40 }} /> : <ArrowCircleRightIcon color="primary" sx={{ fontSize: 40 }} />}
        </span>
        {/* Search input field */}
        {toggle ? (
          <FormControl variant="outlined" sx={{ width: '300px', height: '50px' }}>
            <InputLabel style={{ color: "#00ffff", fontSize: "2rem" }} shrink htmlFor="title-input">
              Search...
            </InputLabel>
            <InputBase
              id="title-input"
              style={inputBaseStyle}
              value={searchterm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </FormControl>
        ) : null}
        {/* Navigation links */}
        <NavLink to="/" className="link" >
          <Tooltip enterDelay={500} leaveDelay={100} arrow title="Create Note" TransitionComponent={Zoom} placement="right">
            {/* Badge with logo */}
            <Badge color="primary">
              <img src={logo} style={{ width: "20px" }} alt="logo" />
              <span>{toggle ? "Atnotes" : ""}</span>
            </Badge>
          </Tooltip>
        </NavLink>
        <NavLink to="/create" className="link" >
          <Tooltip enterDelay={500} leaveDelay={100} arrow title="Home" TransitionComponent={Zoom} placement="right">
            <Badge color="primary">
              <AddIcon />
              <span>{toggle ? "CreateNotes" : ""}</span>
            </Badge>
          </Tooltip>
        </NavLink>
        <NavLink to="/noteslist" className="link">
          <Tooltip enterDelay={500} leaveDelay={100} arrow title="Notes" TransitionComponent={Zoom} placement="right">
            {/* Badge with note count */}
            <Badge color="primary" badgeContent={notes.length} color="success">
              <FormatListBulletedIcon />
              <span>{toggle ? "Notes" : ""}</span>
            </Badge>
          </Tooltip>
        </NavLink>
        <NavLink to="/fav" className="link">
          <Badge color="primary" badgeContent={notes.filter((e) => e.fav === "true").length} color="secondary">
            <FavoriteBorderIcon />
            <Tooltip enterDelay={500} leaveDelay={100} arrow title="Important notes" TransitionComponent={Zoom} placement="right">
              <span>{toggle ? "Fav" : ""}</span>
            </Tooltip>
          </Badge>
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
