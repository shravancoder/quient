import Cookies from 'js-cookie'
import React from 'react'
import { Link } from 'react-router-dom'
import Fab from '../components/Fab'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import gallery from "../data/gallery"
function Gallery() {
    const isLogin = Cookies.get('AUTH_TOKEN');
    const [isNav,setNav] = React.useState(false);
    return (
        <div className="gallery">
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
            <section id="gallery">
                <div className="container">
                <h1>Gallery</h1>

                <div className="gallery__wrapper">
                    {
                        gallery.map((image)=>{
                            return <img src={image.url} key={image.id} alt="gallery-thumb"/>
                        })
                    }
                </div>
                </div>
            </section>
            <Fab/>
            <Footer/>
        </div>
    )
}

export default Gallery
