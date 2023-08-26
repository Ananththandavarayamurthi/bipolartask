import React,{useState} from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from './components/Nav'
import CreateNotes from './components/CreateNotes'
import EditNotes from './components/EditNotes'
import Fav from './components/Fav'
import NoteList from './components/NoteList'
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="wrapper">
    <Nav/>
    <Routes>
      <Route path="/create" element={<CreateNotes/>}/>
      <Route path="/edit" element={<EditNotes/>}/>
      <Route path="/fav" element={<Fav/>}/>
      <Route path="/noteslist" element={<NoteList/>}/>
    </Routes>
    </div>
    </Provider>
    </BrowserRouter>
    
  )
}

export default App