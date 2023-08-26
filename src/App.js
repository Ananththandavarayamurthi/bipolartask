import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from './components/Nav'
import CreateNotes from './components/CreateNotes'
import EditNotes from './components/EditNotes'
import Fav from './components/Fav'
import Notes from './components/Notes'
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
    <Nav/>
    <Routes>
      <Route path="/create" element={<CreateNotes/>}/>
      <Route path="/edit" element={<EditNotes/>}/>
      <Route path="/fav" element={<Fav/>}/>
      <Route path="/notes" element={<Notes/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    
  )
}

export default App