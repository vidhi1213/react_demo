
import React from 'react';
import useForm from './useForm';
import validate from './validateinfo';
import Menu from '../navigation/Menu';


const Form = () => {
  const { Fullname, InputEvent, onSubmits, Items, errors } = useForm(validate);
  return (
<>
<Menu/>
    <div className="container py-5">
      <div className="w-75 mx-auto shadow p-5 login_tranform">

        {/* <h1>Hello{Fullname.fname}{Fullname.lname}</h1>
            <p>{Fullname.email}</p>
            <p>{Fullname.number}</p> */}
        <h2>Register Form</h2>
        <form onSubmit={onSubmits}>
          <div className="form-inputs">
            <div className="form-group">
              <input type="text"
                name="fname"
                value={Fullname.fname}
                onChange={(e)=>InputEvent(e)}
                placeholder="First name" />
              {errors.fname && <p>{errors.fname}</p>}
            </div>
            <div className="form-group">
              <input type="text"
                name="lname"
                value={Fullname.lname}
                onChange={InputEvent}
                placeholder="Last name" />
              {errors.lname && <p>{errors.lname}</p>}
            </div>
            <div className="form-group">
              <input type="email"
                 name="email"
                value={Fullname.email}
                onChange={InputEvent}
                placeholder="Email" />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-group">
              <input type="password"
                name="password"
                value={Fullname.password}
                onChange={InputEvent}
                placeholder="password" />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-group">
              <input type="password"

                name="cpassword"
                value={Fullname.cpassword}
                onChange={InputEvent}
                placeholder="password" />
              {errors.cpassword && <p>{errors.cpassword}</p>}
            </div>
            <div className="form-group">
              <input type="text"
               maxLength="10"
                minLength="10"
                name="number"
                value={Fullname.number}
                onChange={InputEvent}
                placeholder="Contact no" />
              {errors.number && <p>{errors.number}</p>}
            </div>
            <div className="col-10 mb-3 text-center">
              <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
          </div>

        </form>
        {Items.map((itemval, index) => {
          return <ul className="list-group w-50" key={index}>
            <li className="list-group-item">name: {itemval.fname}</li>
            <li className="list-group-item">user name: {itemval.lname}</li>
            <li className="list-group-item">email: {itemval.email}</li>
            <li className="list-group-item">password: {itemval.password}</li>
            <li className="list-group-item">cpassword: {itemval.cpassword}</li>
            <li className="list-group-item">number: {itemval.number}</li>

          </ul>
        })}
      </div>
    </div>
</>
  );
}
export default Form;