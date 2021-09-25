import Cookies from 'js-cookie'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {FiMenu} from "react-icons/fi"
function Navbar({isNav,setNav}) {

    const isLogin = Cookies.get('AUTH_TOKEN');
    return (
        <div className="navbar">
           <div className="navbar__wrapper">
           <Link to="/" className="brand-logo">Quient</Link>
            <nav>
                <ul>
                    <li>
                        <div><Link to="/">Home</Link></div>
                    </li>
                    <li>
                        <div><Link to="/testimonial">Testimonials</Link></div>
                    </li>
                    <li>
                        <div><Link to="/gallery">Gallery</Link></div>
                    </li>
                    <li>
                        <div><Link to="/about">About</Link></div>
                    </li>
                    <li>
                        <div><Link to="/contact">Contact us</Link></div>
                    </li>
                    <li>
                        <div>
                            {!isLogin ?<Link to="/login">Admin Login</Link>:
                            <Link to="/responses">View Responses</Link>}
                            </div>
                    </li>
                </ul>
            </nav>
            <button className="menu" onClick={()=>setNav(!isNav)}>
                <FiMenu/>
            </button>
           </div>


        </div>
    )
}

export default Navbar
