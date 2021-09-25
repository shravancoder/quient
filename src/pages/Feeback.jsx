import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react'
import { Link,useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar'


function Feeback() {

  const [responses,setResponses] = React.useState(null);
  const [filter,setFilter] = React.useState('fname');
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

  console.log('Current filter',filter);

  const handleFilter = (e)=>{
    console.log(e.target.value);
    setFilter(e.target.value);
    responses.sort(function(a, b){
      let filterA = a[filter].toLowerCase();
      let filterB = b[filter].toLowerCase();
      if (filterA > filterB) 
      {
        return -1;
      }    
      else if (filterA < filterB)
      {
        return 1;
      }   
      return 0;
    });
    console.log(responses);
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
                        <option value="first_name">by first_name</option>
                        <option value="last_name">by last_name</option>
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
    </tr>
  </thead>
  <tbody>
    

    {
      filtered ?filtered.map((filteredResult)=>{
        return (
          <tr>
              <td data-label="First Name">{filteredResult.first_name}</td>
              <td data-label="Last Name">{filteredResult.last_name}</td>
              <td data-label="Email">{filteredResult.email}</td>
              <td data-label="Message">{filteredResult.message}</td>
              
            </tr>
        )
      }):
      responses && responses.map((response)=>{
return (
  <tr>
      <td data-label="First Name">{response.first_name}</td>
      <td data-label="Last Name">{response.last_name}</td>
      <td data-label="Email">{response.email}</td>
      <td data-label="Message">{response.message}</td>
     
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
