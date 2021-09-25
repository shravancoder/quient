import Cookies from 'js-cookie';
import React from 'react'
import { Link } from 'react-router-dom';
import Fab from '../components/Fab'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Contact() {
    const isLogin = Cookies.get('AUTH_TOKEN');
    const [isNav,setNav] = React.useState(false);
    return (
        <div className="contact">
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
                            <Link to="/">Testimonial</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="/">Gallery</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="/">About</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="/">Contact us</Link>
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
            <section id="contact">
                <h1>Form comes here</h1>
            </section>
            <Fab/>
            <Footer/>
        </div>
    )
}

export default Contact
