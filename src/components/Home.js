import React from 'react';
import "./component.css"; // Importing the CSS file for styling
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation

function Home() {
  return (
    <div className='home2'> {/* Applies the 'home2' class for styling */}
      <h1>
        Best Note application for everyone!
      </h1>
      <p>Create your first Note</p>
      {/* Link to navigate to the 'create' route */}
      <Link to="/create">
        <button>Get started</button>
      </Link>
    </div>
  );
}

export default Home;
