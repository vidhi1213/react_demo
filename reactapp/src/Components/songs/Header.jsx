
import React from 'react';

const Header=(props)=>{
//  const[name,setName]=useState("");


//     let time=new Date().toLocaleTimeString();

//     const[ctime,setCtime]=useState(time);
//    const Updatetime=()=>{
//     time=new Date().toLocaleTimeString();
//     setCtime(time);
//    };

//    const setFirstName=(event)=>{
//        setName(event.target.value);
     
//    }

//    setInterval(Updatetime,100);
    return( 
         
        <div className="container">    
       <div className="row">
       <div className=" col-sm-12 text-center bg-light mt-3 mb-3">
       <h1 className="header mt-2 mb-2"> {props.title}</h1>
        {/* <input type="text" placeholder="first name" onChange={setFirstName}
        value={name}/>
     */}
   </div>
   </div>
   </div> 
    );

}

export default Header;