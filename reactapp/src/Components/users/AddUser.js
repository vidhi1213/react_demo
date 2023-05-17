import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";


const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { name, username, email } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try { 
    
     await axios.post("http://localhost:3003/users", user);
      const alldata = JSON.parse(localStorage.getItem('store'));
      document.getElementById('Name').innerHTML=alldata;
     
      if (!alldata) {
        let temarray = [];
        temarray.push(user);
        localStorage.setItem("store",JSON.stringify(temarray))
        // temarray.push(data);
      }
      else {
        alldata.push(user);
        localStorage.setItem("store",JSON.stringify(alldata))
      }

      history.push("/Users1");
    }
    catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
             id="Name"
             type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
             id="Uname"
             type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
             id="Email"
             type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
        
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
