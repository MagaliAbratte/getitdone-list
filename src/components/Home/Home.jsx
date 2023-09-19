import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='home-container'>
      <h1>Get it done!</h1>
      <Link to='/options' className='link'>Options</Link>

      <div className='footer'>
        <p>Magali Abratte</p>
        <p>Frontend Development</p>
        <p>2023</p>
      </div>
    </div>
  )
}
