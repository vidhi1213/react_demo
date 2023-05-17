import React from 'react';
import Menu from '../navigation/Menu';
import useForm from './useForm';
import validate from './validateinfo';

const AddUser = () => {
  const { user, InputEvent, onSubmits, errors } = useForm(validate);
  
 

  return (
    <>
    <Menu/>
  
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Registration Form</h2>
        <form onSubmit={onSubmits}>
          <div className="form-group">
            <input
             id="fname"
             type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your first name"
              name="fname"
              value={user.fname}
             onChange={InputEvent}
            />
             {errors.fname && <p>{errors.fname}</p>}
          </div>
          <div className="form-group">
            <input
             id="lname"
             type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your last Name"
              name="lname"
              value={user.lname}
              onChange={InputEvent}
            />
              {errors.lname && <p>{errors.lname}</p>}
          </div>
          <div className="form-group">
            <input
             id="Email"
             type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={user.email}
              onChange={InputEvent}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-group">
            <input
             id="password"
             type="password"
              className="form-control form-control-lg"
              placeholder="Enter Your password"
              name="password"
              value={user.password}
              onChange={InputEvent}
            />
             {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-group">
            <input
             id="cpassword"
             type="password"
              className="form-control form-control-lg"
              placeholder="Enter Your confirm password"
              name="cpassword"
              value={user.cpassword}
              onChange={InputEvent}
            />
            {errors.cpassword && <p>{errors.cpassword}</p>}
          </div>
          <div className="form-group">
              <input type="text"
               className="form-control form-control-lg"
               maxLength="10"
                minLength="10"
                name="number"
                value={user.number}
                onChange={InputEvent}
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
