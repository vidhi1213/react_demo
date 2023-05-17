import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { NavDropdown, Nav } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const Menu = () => {
   let history = useHistory();
   const user = JSON.parse(localStorage.getItem('result'))
   const [navigation, setNavbar] = useState(false);

   const changeBackground = () => {
      if (window.scrollY >= 40) {
         setNavbar(true);
      }
      else {
         setNavbar(false);
      }
   }
   const logout = () => {
      localStorage.clear();
      history.push('/Register');
   }

   window.addEventListener('scroll', changeBackground)
   // console.log(user[])
   return (<>
      <nav className={navigation ? 'bg scrollup ' : 'bg '}>
         <div className="navbar navbar-default  navbar-expand-lg " >

            <div className="container">
               <NavLink to="index.html" className="navbar-brand ">
                  DEMO
         </NavLink>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span> </button>

               <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">

                     {localStorage.getItem('result') ?
                        <>
                           <li className="">
                              <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
                           </li>
                           <li>
                              <NavLink exact activeClassName="active_class" to="/Cards">Cards</NavLink>
                           </li>
                           <li>
                              <NavLink exact activeClassName="active_class" to="/Form">Form</NavLink>
                           </li>
                           <li>
                              <NavLink exact activeClassName="active_class" to="/Users1">Users1</NavLink>
                           </li>
                           {/* <li>
               <NavLink exact activeClassName="active_class" to="/search">Search</NavLink>
               </li> */}
                           <li>
                              <NavLink exact activeClassName="active_class" to="/ToDo">Todo</NavLink>

                           </li>
                           <li>
                              <NavLink exact activeClassName="active_class" to="/CreatNote">Google</NavLink>

                           </li>

                           <li>
                              <NavLink exact activeClassName="active_class" to="/Contact">Contacts</NavLink>
                           </li>
                        </> :
                        <>
                           <li>
                              <NavLink exact activeClassName="active_class" to="/login">Login</NavLink>
                           </li>
                           <li>
                              <NavLink exact activeClassName="active_class" to="/Register">Register</NavLink>
                           </li>
                        </>
                     }

                  </ul>

              {localStorage.getItem('result') ?
                     <Nav>
                        <NavDropdown title={user[0] && user[0].fname}>
                           <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                           <NavDropdown.Item>Profile</NavDropdown.Item>
                        </NavDropdown>
                     </Nav>
                     : null
                  }
               </div>

            </div>

         </div>
      </nav>



   </>);
}
export default Menu;