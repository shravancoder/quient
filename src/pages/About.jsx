import Cookies from 'js-cookie';
import React from 'react'
import { Link } from 'react-router-dom';
import Fab from '../components/Fab'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function About() {
    const isLogin = Cookies.get('AUTH_TOKEN');
    const [isNav,setNav] = React.useState(false);
    return (
        <div className="about">
            <Navbar setNav={setNav} isNav={isNav}/>
            {isNav && <div className="mobile_nav">
                <ul>
                    <li>
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="/testimonial">Testimonial</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="/gallery">Gallery</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="/about">About</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="/contact">Contact us</Link>
                        </div>

                    </li>
                    <li>
                        <div>
                            {!isLogin ?<Link to="/login">Admin Login</Link>:
                            <Link to="/responses">View Responses</Link>}
                            </div>
                    </li>
                </ul>
            </div>}
            <section id="about">
                <div className="container">
                    <h1>About us</h1>
                    <h3>Quient pvt ltd.</h3>
                    <p>A group of Enthusiasts now have a vision of training students that don’t have access to
placement training that can help them get placed, and thereby build their future.</p>
                        
                </div>
            </section>
            <Fab/>
            <Footer/>
        </div>
    )
}

export default About
