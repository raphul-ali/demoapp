import React from 'react'
import {useLocation} from 'react-router-dom';
import '../index.css';

function User() {
    const {state} =useLocation();
    console.log(state);

  return (
    <div className='usercontent'>
    <div className='card'>
        <div className='card-body'>
            <div className="avatar">
                    <img
                      src={state.picture.large}
                      className="card-img-top"
                      alt=""
                    />
            </div>
            <h5 className="card-title">Name : 
                    {state.name.first +" " + state.name.last}
            </h5>
            <p className="card-text"> Address : 
                    {state.location.city +
                      ", " +
                      state.location.state}
                    <br />
                    Id: SSN {state.id.value}
                    <br/>
                    <span className="phone">Phone : {state.phone}</span>
              <br/>Email: {state.email}
            </p>
            <div>{}</div>
        </div>

        
    </div>
    </div>
  );
}

export default User