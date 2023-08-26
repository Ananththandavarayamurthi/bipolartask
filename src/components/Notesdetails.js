import React from 'react'
import { useParams } from 'react-router-dom'

function Notesdetails() {
    const {id}=useParams();
    console.log(id)
  return (
    <div>
        hii
    </div>
  )
}

export default Notesdetails