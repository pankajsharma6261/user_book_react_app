import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar shadow navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">  User Book </Link>
                <Link to="user/add" className="btn btn-light ml-auto">Create User</Link>
            </div>
        </nav>
    )
}

export default Navbar
