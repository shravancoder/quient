import React from 'react'
import Navbar from '../components/Navbar'
import quote from "../assets/quote.png"
import Footer from '../components/Footer'
import Fab from '../components/Fab'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
function TestimonialCard(){
    return (
        <div className="testimonal__card">
            <div className="card__wrapper">
                <div className="card__body">
                    <img src={quote} alt="quote" />
                    <p>Yourname's ongoing assistance has certainly been of significant and direct benefit to us in terms of User Experience as well as website functionality and integration with our internal systems. More than the efficient delivery of tasks/projects and rapid response to any issues encountered, we have found Rowan's consultative approach invaluable. His up-to-date knowledge and experience combined with a focus on understanding exactly what we are wanting to achieve (and why), has frequently lead to outcomes that we hadn't realised were possible and that exceed our expectations.
Yourname would be a valuable asset to any business.</p>
                </div>
                <div className="card__footer">
                    <div className="user__avatar">

                    </div>
                    <div className="user__detail">
                        <h3>Sumit</h3>
                        <span className="user__position">React Developer</span>
                    </div>
                </div>

            </div>
        </div>
    )
}



function TestiMonial() {
    const isLogin = Cookies.get('AUTH_TOKEN');
    const [isNav,setNav] = React.useState(false);
    return (
        <div className="testimonial">
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
            <section id="testimonials">
                <div className="container">
                    <h1>Testimonials</h1>
                    <div className="testimonials__wrapper">
                        <div className="testimonail_list">
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                        </div>
                        
                    </div>
                </div>
            </section>
            <Fab/>
            <Footer/>
        </div>
    )
}

export default TestiMonial
