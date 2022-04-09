import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
  
// import components
import Home from "./components/Home";

import About from "./components/about";
import ContactUs from "./components/contactus";
import Users from "./components/Users";
import User from "./components/User";

  
function App() {
  return (
    <>
      <Router>
        <div className="navbar">
          <div><img className="logo" src="./logo.png" alt="logo"/></div>
          <div className="navelink">
        <NavLink to="" className='link' activeClassName='activelink'>
            Home
          </NavLink>
          <NavLink
            to="Users" className='link'
            activeClassName='activelink'
          >
            Users
          </NavLink>
          <NavLink
            to="contactus" className='link'
            activeClassName='activelink'
          >
            Contact Us
          </NavLink>
          <NavLink
            to="about" className='link'
            activeClassName='activelink'
          >
            About
          </NavLink>
          </div>
        </div>
        <Routes>

          <Route exact path="/" element={<Home/>} />
            
          <Route path="/about" element={<About/>} />
      
          <Route path="/contactus" element={<ContactUs/>} />

          <Route path="/Users" element={<Users/>} />  
          <Route path="User" element={<User/>} />
          
          
          <Route path="/" element={<Navigate replace to="/Home" />} />
        </Routes>
      </Router>
    </>
  );
}
  
export default App;