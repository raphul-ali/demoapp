import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import '../index.css'
  
const Home = () => {
  return (
    <div className="h">
        <div className="h-body">
        <h1 className="header">Home Page</h1>
        <br />
        <ul className="list">
        <div className="linkbox">
          <li >
          {/* Endpoint to route to Home component */}
          <Link to="/" className="link">Home</Link>
          </li>
          <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/users" className="link">Users</Link>
          </li>
          <li >
          {/* Endpoint to route to About component */}
          <Link to="/about" className="link">About</Link>
          </li>
          <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/contactus" className="link">Contact Us</Link>
          </li>
          
          </div>
        
      </ul>
      </div>
    </div>
  );
};
  
export default Home;