import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand"><Link to="/">Jhakanaka</Link></a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
                            <li className="nav-item">
                                <a className="nav-link"><Link to='/'>Home</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><Link to='shop'>Shop</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><Link to='login'>Login</Link></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;