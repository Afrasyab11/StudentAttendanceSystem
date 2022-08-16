import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
const Nav = () => {
    return (
      <div className='nav'>
            <Link className='link1' to='/'>SignIn</Link>
            <Link className='link2' to='/Register'>Register</Link>
            <Link className='link' to='/Attandance'>Attendance</Link>
            <Link className='link' to='/View-attandance-sheet'>View</Link>
            <Link className='link' to='/Updata_Student_Data'>Update</Link>
            <Link className='link' to='/student-Record'>LogInStudent</Link>
            <Link className='link' to='/Admin_crud_Operation'>AdminCRUD</Link>
            </div>
    )
}

export default Nav;