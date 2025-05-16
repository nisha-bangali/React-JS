import React from 'react'
import { Link, NavLink } from 'react-router'

function Header() {
    const auth = JSON.parse(localStorage.getItem("auth"))

    function Logout() {
        if (auth) {
            localStorage.removeItem("auth");
            alert("Logout Successfull");
            window.location.reload();

        }
    }

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
                        <li>
                            <NavLink to="/service">Service</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>

                    </ul>
                    <div className="buttons">
                        <button ><Link className='login' to='/login'>Login</Link></button>
                        <button ><Link className='signup' to='/signup'>Sign up</Link></button>
                        <button onClick={Logout}>Logout</button>
                    </div>

                </nav>
            </header>

        </>
    )
}

export default Header
