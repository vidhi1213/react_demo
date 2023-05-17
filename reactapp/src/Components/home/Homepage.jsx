import React  from 'react';
import {  NavLink } from 'react-router-dom';
import Menu from '../navigation/Menu';
//import Cookies from 'js-cookie';
//import AuthApi from '../../AuthApi'

const Homepage=(props)=>{
    // const Auth=useContext(AuthApi);
    // const handleOnClick=()=>{
    //   Auth.setAuth(false);
    //   Cookies.remove("user");
    // }
    return(

        <>
        <Menu/>
         {/* <div className="col-md-2 ml-auto">
    <button onClick={handleOnClick} className="btn btn-primary btn-block mt-3">Logout</button>
    </div> */}
 <section id="header" className="header">
<div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 justify-content-center col-10 mx-auto">
                        <div className="text-container">
                            <h1>{props.name}</h1>
                            <p className="p-large">{props.para}</p>
                            <NavLink className="btn-solid-lg " to="/">APP STORE</NavLink>
                            <NavLink className="btn-solid-lg" to={props.visit}>PLAY NEXT</NavLink>
                            </div>
                    </div>
                    <div className="col-md-6 col-10 mx-auto">
                        <div className="image-container">
                            <img className="img-fluid" src={process.env.PUBLIC_URL+"/img/header-iphone.png"} alt="alternative"/>
                        </div> 
                    </div>
            </div>    
            </div>
           
       </section>


        </>
    );
}
export default Homepage;