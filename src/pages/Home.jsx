import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Fab from '../components/Fab'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'



function Home() {
    const isLogin = Cookies.get('AUTH_TOKEN');
    const [isNav,setNav] = React.useState(false);
    return (
        <div className="home">
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
            <div className="hero">
                <div className="header__wrapper">
                    <div className="header__content">
                    <h1>Quient Trainings Pvt Ltd</h1>
                    <p>A group of Enthusiasts now have a vision of training students that don’t have access to
placement training that can help them get placed, and thereby build their future.</p>
                    <a href="#more" className="learn_more">Learn more</a>
                    </div>

                   
                </div>
              
            </div>

            <section id="textual__info">
                <div className="container textual__container">
                    <div id="vision">
                    <h1>Our Vision</h1>
                    <p>Placement training plays a major role in shaping up the career goals of students. It is
        the dream of every engineering student to get placed in a top organization visiting
        their campus for recruitment. Keeping this key aspect into consideration, it is realized
        that training is important for engineering students to enhance their employability skills
        and achieve good placement in various Industries.
        <br/>At present, the competition for employment is increasing every day and placement has
become a challenging task. Training students and equipping them with life skills has
become an important responsibility of the institution. Along with technical expertise,
the development of a holistic personality is also necessary</p>
                    </div>

                    <div id="objectives">
                        <h1>Our Objectives</h1>
                        <ul>
                            <li>
                                <p>To look for 100% employment for all students.</p>
                            </li>
                            <li>
                                <p>To recognize the core competencies of the students.</p>
                            </li>
                            <li>
                                <p>To train the students to meet the expectations of the industry through our Career Development Programmes.</p>
                            </li>
                            <li>
                                <p>To build confidence in students and develop the right attitude in them and</p>
                            </li>
                            <li>
                                <p>enhance their communication skills</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <Fab/>

          

            

           
           
            <Footer/>
        </div>
    )
}

export default Home
