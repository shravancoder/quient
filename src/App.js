import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import TestiMonial from './pages/TestiMonial';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Login from './pages/Login';
import Feeback from './pages/Feeback';

function App() {
  return (
    <Router>
    <div>
    
    
    <Switch>
    <Route exact path="/">
      <Home/>
      </Route>
      <Route exact path="/testimonial">
      <TestiMonial/>
      </Route>
      <Route exact path="/contact">
      <Contact/>
      </Route>
      <Route exact path="/gallery">
      <Gallery/>
      </Route>
      <Route exact path="/contact">
      <Contact/>
      </Route>
      <Route exact path="/about">
      <About/>
      </Route>
      <Route exact path="/login">
      <Login/>
      </Route>
      <Route exact path="/responses">
      <Feeback/>
      </Route>
    
  
          
            
            
  
     
     
    </Switch>
  </div>
  </Router>
  );
}

export default App;
