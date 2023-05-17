import React, { useState ,useEffect} from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Menu from './Components/navigation/Menu';
import Cookies from 'js-cookie';

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        cpassword:"",
        number:"",
  });
  useEffect(()=>{
    if(localStorage.getItem('result'))
    {
      history.push('/');
    }
  },[]);
  const {fname,lname,email,password,cpassword,number,} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  const onSubmit = async e => {
    e.preventDefault();
    try { 
    
      const data = await axios.post("http://localhost:3004/register", user);
      const alldata = JSON.parse(localStorage.getItem('result'));
      if (!alldata) {
        let temarray = [];
        temarray.push(user);
        localStorage.setItem("result",JSON.stringify(temarray))
        // temarray.push(data);
      }
      else {
      alldata.push(user);
        localStorage.setItem("result",JSON.stringify(alldata))
      }

      history.push("/");
    }
    catch (error) {
      console.log(error);
    }
     Cookies.set("user",'fdsojfspodijfosfjho');
  };
  return (
    <>
    <Menu/>
  
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Registration Form</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
             id="fame"
             type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your first name"
              name="name"
              value={user.fname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
             id="lname"
             type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your last Name"
              name="name"
              value={user.lname}
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
              value={user.email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
             id="password"
             type="password"
              className="form-control form-control-lg"
              placeholder="Enter Your password"
              name="password"
              value={user.password}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
             id="cpassword"
             type="cpassword"
              className="form-control form-control-lg"
              placeholder="Enter Your confirm password"
              name="cpassword"
              value={user.cpassword}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
              <input type="text"
               className="form-control form-control-lg"
               maxLength="10"
                minLength="10"
                name="number"
                value={user.number}
                onChange={e => onInputChange(e)}
                placeholder="Contact no" />
            </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddUser;
