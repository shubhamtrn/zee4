import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const myNavigate=useNavigate();
  return (
    <div>
        <h1>Home Page</h1>
        <br /><br /><br />
        <button onClick={()=>myNavigate('/aboutus')}>Go to Aboutus</button>
      
    </div>
  )
}

export default Home
