import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        // <nav>
        //     <ul>
        //         <li>
        //             <Link to="/">Home</Link>
        //         </li>
        //         <li>
        //             <Link to="/about">About</Link>
        //         </li>
        //         <li>
        //             <Link to="/login">Login</Link>
        //         </li>
        //     </ul>
        // </nav>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">UseContext</Link>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    
                        <NavLink  exact activeClassName="active"className="nav-item" to="/">Home</NavLink>                   
                        <NavLink  exact activeClassName="active"className="nav-nav-item" to="/login">Login</NavLink>                    
                        <NavLink  exact activeClassName="active"className="nav-item " to="/about">About</NavLink>
                    

                </ul>
            </div>
        </nav>


    )
}
