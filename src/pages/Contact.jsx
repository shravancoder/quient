import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react'
import { Link } from 'react-router-dom';
import Fab from '../components/Fab'
import Navbar from '../components/Navbar'

function Contact() {
    const isLogin = Cookies.get('AUTH_TOKEN');
    const [isNav,setNav] = React.useState(false);
    const [fname,setFname] = React.useState('')
    const [lname,setLname] = React.useState('')
    const [email,setEmail]  = React.useState('')
    const [message,setMessage] = React.useState('')
    const [feedback,setFeedback] = React.useState(false)

    const field_empty = ()=>{
        setFname('')
        setLname('')
        setEmail('')
        setMessage('')
        
    }
    const handleContact = ()=>{
        axios.post('https://contact-app-server-api.herokuapp.com/contact',{
            fname,
            lname,
            email,
            message
        }).then((response)=>{
            const {error,message} = response.data;
            
            if(error){
                 setFeedback({message:error})
                 return field_empty()
            }
        setFeedback({message})
        field_empty();
        })
    }

    
    return (
        <div className="contact">

            {feedback && <div className="popup" onClick={(e)=>{
                if(e.target.classList.contains('popup')){
                    setFeedback(false);
                }
            }}>
                <div className="popup-main">
                    <h3>{feedback.message}</h3>
                </div>
            </div>}
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
            <section id="contact">
                <div className="contact__wrapper">
                <div className="contact_box">
                    <h1>Contact us</h1>
                    <div className="contact_form">
                        <div className="contact-field">
                            <input type="text" name="first_name" id="first_name" value={fname} onChange={(e)=>setFname(e.target.value)}/>
                            <label htmlFor="first_name" className={fname && "static_label"}>First Name</label>
                        </div>
                        <div className="contact-field">
                            <input type="text" name="last_name" id="last_name" value={lname} onChange={(e)=>setLname(e.target.value)}/>
                            <label htmlFor="last_name" className={lname && "static_label"}>Last Name</label>
                        </div>
                        <div className="contact-field">
                            <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <label htmlFor="email" className={email && "static_label"}>Email</label>
                        </div>
                        <div className="textarea">
                            <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                            <label htmlFor="message" className={message && "static_label"}>Message</label>
                        </div>

                        <button className={`send_btn ${fname && lname && email && message && "send_btn_enable"}`} onClick={fname && lname && email && message && handleContact}>Send Message</button>
                        
                    </div>
                </div>
                </div>
            </section>
            <Fab/>
        </div>
    )
}

export default Contact
