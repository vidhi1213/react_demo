import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
//import axios from 'axios';


const useForm = (validate) => {
  let history = useHistory();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
    number: "",
  });
  useEffect(() => {
    if (localStorage.getItem('result')) {
      history.push('/');
    }
  }, [history]);
  const [errors, setErrors] = useState({});
  const InputEvent = (event) => {
    const { value, name } = event.target;

    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };

    });
  };

  const onSubmits = (event) => {
    event.preventDefault();

    const errors = validate(user);
    if (Object.keys(errors).length) return setErrors(validate(user));
    console.log(setErrors)
    try {
      // const data = await axios.post("http://localhost:3004/register", user);
      //await axios.post("http://localhost:3004/register", user);
      const allData = JSON.parse(localStorage.getItem('result') || "[]");
      allData.push({ ...user, _id: Math.round(Math.random() * 10 + 1) });
      localStorage.setItem("result", JSON.stringify(allData));
      setUser({
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: "",
        number: "",
      })
      history.push("/");
    }
    catch (error) {
      console.log(error);
    }
  };
  Cookies.set("user", 'fdsojfspodijfosfjho');
  return { user, InputEvent, onSubmits, errors };

}
export default useForm;
