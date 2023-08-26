import React from 'react'
import "./component.css"
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className='home2'><h1>
        Best Note application for everyone!
        
        </h1>
        <p>Create your first Note</p>
        <Link to="/create"><button>Get start</button></Link>
        </div>
  )
}

export default Home