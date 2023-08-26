import React from 'react'
import { NavLink } from 'react-router-dom'
import  {Badge } from '@mui/material'
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import  AddIcon from '@mui/icons-material/Add'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import "./component.css"
function Nav() {
  return (
    <div >
    <nav className='nav-wrapper'>
    <NavLink to="/create" className="link ">
    <Badge  color='primary'>
    <AddIcon  />
	<span >CreateNotes</span>
				</Badge>
        
        </NavLink>
    <NavLink to="/notes" className="link ">
    <Badge  color='primary'>
    <FormatListBulletedIcon  />
	<span >Notes</span>
				</Badge></NavLink>
    <NavLink to="/fav" className="link ">
    <Badge  color='primary'>
    <FavoriteBorderIcon  />
	<span >Fav</span>
	</Badge>
    </NavLink>


    </nav>
    </div>
  )
}

export default Nav