import React from 'react'
import { Link, NavLink } from 'react-router'

function Header() {
    return (
        <>
            <header className='header'>
                <nav className='navbar'>
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "active" : "notActive"} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>

                    </ul>
                    <div className="buttons">
                        <button><Link to='/login'>Login</Link></button>
                        <button><Link to='/singin'>Sign in</Link></button>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Header
