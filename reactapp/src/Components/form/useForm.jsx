import { useState } from 'react';

const useForm = (validate) => {
    const [Fullname,setFullName]=useState({

        fname:"",
        lname:"",
        email:"",
        password:"",
        cpassword:"",
        number:"",
    });
    const[Items,setItems]=useState([]);
    const [errors, setErrors] = useState({});
    const InputEvent=(event)=>{
       const{value,name}=event.target;
    
    setFullName((preValue)=>{
      return{
        ...preValue,
        [name]:value,
      };
    
    });
    };
    const onSubmits=(event)=>{
    event.preventDefault();
    setItems((oldItems)=>{
      return[...oldItems,Fullname];
  });
 
    setErrors(validate(Fullname));
    alert('form submitted');
    setFullName({fname:" ",lname:" ",email:" ",password:"",cpassword:"",number:" "});
    };
    return {Fullname,InputEvent,onSubmits,Items,errors};
}

export default useForm;
