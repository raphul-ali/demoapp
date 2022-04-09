import React ,{useState,useEffect} from 'react'
import './index.css';
import { useNavigate } from "react-router-dom";
function DataFetching() {
    let navigate = useNavigate();

    const [user,setUser] = useState([]);

    const fetchData =()=>{
        fetch("https://randomuser.me/api/?nat=us&results=18&page=1")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            let people = data.results
            console.log(people);
            setUser(people)
        })
    }
    useEffect(()=>{
        fetchData();
    },[]);
    function toDetails(userdata){
      navigate('/User',{ state: userdata});
      
    }

    return (
        <div className="container">
          {user.map(data => (
            <div  key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {data.name.first +
                      " " +
                      data.name.last}
                  </h5>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      data.location.state}
                    <br />
                    <span className="phone">{data.phone}</span>
                  </p>
                  <button className='btn' onClick={()=>{toDetails(data)}}>Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
    )
}

export default DataFetching