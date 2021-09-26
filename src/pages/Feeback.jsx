import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react'
import { Link,useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar'


function Feeback() {

  const [responses,setResponses] = React.useState(null);
  const [key,setKey] = React.useState('');
  const [filtered,setFiltered] = React.useState(null);
  const isLogin = Cookies.get('AUTH_TOKEN');
    const [isNav,setNav] = React.useState(false);
  const history = useHistory();
  React.useEffect(()=>{

    axios.get('https://contact-app-server-api.herokuapp.com/contact').then((response)=>{
      const {data} = response;
     
      setResponses(data);
    }).catch((e)=>{
      console.log(e);
    })
  },[])

  

  const handleFilter = (e)=>{
   
    console.log(e.target.value);
    axios.get(`https://contact-app-server-api.herokuapp.com/contact/${e.target.value}`).then((response)=>{
      const {data} = response;
      console.log(data);
      filtered?setFiltered(data):response && setResponses(data);
    })
  }


  const handleSearch = (e)=>{
    setKey(e.target.value)

    if(e.target.value.length>0){
      console.log('running')
      setFiltered(responses.filter((response)=>response.first_name.toLowerCase().includes(e.target.value.toLowerCase())));
    }
    else{
      console.log('empty')
      setFiltered(null);
    }
  }

  console.log(filtered);


  const handleLogout = ()=>{
    Cookies.remove('AUTH_TOKEN');
    history.push('/');
  }


  const handleDelete = (id)=>{
    const element = document.getElementById(id);
    axios.delete(`https://contact-app-server-api.herokuapp.com/contact/${id}`).then((response)=>{
      element.remove();
    }).catch((e)=>{
      console.log(e);
    })
  }
    return (
        <div>
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
            <div className="responses">
                <h1>All Feedback</h1>
                <div className="responses__wrapper">
                    <div className="response__header">
                    <div className="searchbar">
                        <input type="text" placeholder="Search" value={key} onChange={handleSearch}/>
                    </div>
                    <select name="filter" id="filter" onChange={handleFilter} className="filter">
                        <option value="fname">by first_name</option>
                        <option value="lname">by last_name</option>
                        <option value="message">by message</option>
                        <option value="email">by email</option>
                    </select>
                    </div>
                    <div className="response_table">
                    <table>
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Message</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    

    {
      filtered ?filtered.map((filteredResult)=>{
        return (
          <tr id={filteredResult._id}>
              <td data-label="First Name">{filteredResult.first_name}</td>
              <td data-label="Last Name">{filteredResult.last_name}</td>
              <td data-label="Email">{filteredResult.email}</td>
              <td data-label="Message">{filteredResult.message}</td>
              <td data-label="Action">
                <button className="delete_btn" onClick={()=>handleDelete(filteredResult._id)}>Delete</button>
              </td>
              
            </tr>
        )
      }):
      responses && responses.map((response)=>{
return (
  <tr id={response._id}>
      <td data-label="First Name">{response.first_name}</td>
      <td data-label="Last Name">{response.last_name}</td>
      <td data-label="Email">{response.email}</td>
      <td data-label="Message">{response.message}</td>
      <td data-label="Action">
                <button className="delete_btn" onClick={()=>handleDelete(response._id)}>Delete</button>
              </td>
    </tr>
)
      })
    }
   
  </tbody>
</table>
                    </div>
                </div>
            </div>

            <button className="logout_btn" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Feeback
