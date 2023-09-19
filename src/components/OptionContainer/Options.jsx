import React from 'react'
import { Link } from 'react-router-dom'

export const Options = () => {
  return (
    <div className='options-container'>
      <Link to='/todo' className='link-options'>To Do List</Link>
      <Link to='/toshop' className='link-options'>To Shop List</Link>
    </div>
  )
}
