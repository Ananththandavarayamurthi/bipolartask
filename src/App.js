import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CreateNotes from './components/CreateNotes';
import EditNotes from './components/EditNotes';
import Home from './components/Home';
import Fav from './components/Fav';
import NoteList from './components/NoteList';
import logo from './img/at-sign-at-svgrepo-com.svg';
import './App.css';

function App() {
  const [searchterm, setSearchTerm] = useState('');

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="wrapper">
          {/* Header */}
          <span className='Atspan'>
            <img src={logo} style={{ width: '50px' }} alt="Logo" />
            At Notes
          </span>
          
          {/* Navigation */}
          <Nav searchterm={searchterm} setSearchTerm={setSearchTerm} />
          
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateNotes />} />
            <Route path="/edit" element={<EditNotes />} />
            <Route path="/fav" element={<Fav />} />
            {/* Pass searchterm and setSearchTerm to NoteList */}
            <Route path="/noteslist" element={<NoteList searchterm={searchterm} setSearchTerm={setSearchTerm} />} />
            <Route path="/updatenotes/:id" element={<EditNotes />} />
            
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
