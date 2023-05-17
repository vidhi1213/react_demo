import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
//import content from './All_field';
//import * as yup from 'yup';
//import {yupResolver} from "@hookform/resolvers/yup";
import Menu from './Components/navigation/Menu';
//login
//  const schema=yup.object().shape({
//      username:yup.string().required().min(3),
//      password:yup.string().required().min(5),
//  });

const Login = () => {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm({ validateCriteriaMode: "all", mode: "onChange" });
  const [user, setUser] = useState({
    fname: "",
    password: "",
  });
  useEffect(() => {
    if (localStorage.getItem('result')) {
      history.push('/');
    }
  }, [history]);
  const InputEvent = (event) => {
    const { value, name } = event.target;

    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };

    });
  };
  // const [username, setUsername] =useState('');
  // const [password, setPassword] = useState('');
  const onSubmit = () => {
    try {
      // const data = await axios.post("http://localhost:3004/register", user);
      //await axios.post("http://localhost:3004/register", user);
      const allData = JSON.parse(localStorage.getItem('result') || "[]");
      allData.push({ ...user, _id: Math.round(Math.random() * 10 + 1) });
      localStorage.setItem("result", JSON.stringify(allData));
      setUser({
        fname: "",
        password: "",
      })
      history.push("/");
    }
    catch (error) {
      console.log(error);
    }
    Cookies.set("user", user);
  }
  return (
    <>
      <Menu />
      <div className="container">
        <div className="w-75 mx-auto shadow p-5 login_tranform">
          <h2 className="text-center mb-4">Login Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                id="fname"
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your first name"
                name="fname"
                value={user.fname}
                ref={register({
                  required: "Username is require",
                  maxLength: {
                    value: 15,
                    message: "username should be between 6 to 15 character",
                  },
                  minLength: {
                    value: 5,
                    message: "username should be between 6 to 15 character",
                  }
                })}
                onChange={(e) => InputEvent(e)}
              />
              <ErrorMessage errors={errors} name="fname">{(message) => message && Object.entries(message).map(([type, message]) => (
                <p className="form-text text-danger" key={type}>{message}</p>
              ))

              }
              </ErrorMessage>
            </div>
            <div className="form-group">
              <input
                id="cpassword"
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter Your confirm password"
                name="cpassword"
                value={user.cpassword}
                ref={register({
                  required: "password is require",

                  minLength: {
                    value: 6,
                    message: "password should be at least 8 character",
                  }
                })}
                onChange={(e) => InputEvent(e)}
              />
              <ErrorMessage errors={errors} name="cpassword">{(message) => message && Object.entries(message).map(([type, message]) => (
                
                <p className="form-text text-danger" key={type}>{message}</p>
              ))
              

              }
              {console.log(ErrorMessage)}
              </ErrorMessage>
            </div>
            <button type="btn" className="btn btn-primary btn-block mt-3">Login</button>
          </form>
        </div>
      </div>

    </>

  );

}
export default Login;


// import React,{useState,useContext} from 'react';
// import Cookies from 'js-cookie';
// import AuthApi from './AuthApi';


//  const Login =()=>{
//     const [username, setUsername] =useState('');
//     const [password, setPassword] = useState('');
//     const Auth=useContext(AuthApi);
//     const handleOnClick=()=>{
//     Auth.setAuth(true);
//     Cookies.set("user",'fdsojfspodijfosfjho');
//      } 
//      return (
//         <div className="container">
//         <div className="w-75 mx-auto shadow p-5 login_tranform">
//           <h2 className="text-center mb-4">Login Form</h2>
//         <form>
//           <div>
//             <label htmlFor="username"></label>
//             <input
//               type="text"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="password"></label>
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button>Log in</button>
//         </form>

//         <button type="btn" onClick={handleOnClick} className="btn btn-primary btn-block mt-3">Login</button>

//            </div>
//            </div>



//      );

//    }
//    export default Login;