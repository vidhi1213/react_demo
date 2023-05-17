import React from 'react';
import './index.css';
import Home from './Components/home/Home';

import Cards from './Components/songs/Cards';
import Form from './Components/form/Form';
import Users1 from './Components/users/Users1';

import AddUser from "./Components/users/AddUser";
import EditUser from "./Components/users/EditUser";
import User from "./Components/users/User";
import ToDo from './Components/todo/ToDoList';
import CreatNote from './Components/nots/CreatNote';

import Search from './Components/search/Search';
import { Route, Switch } from "react-router-dom";
// import Contact from './Components/contacts/Contact';
import Error from './Components/navigation/Error';

import Contacts from './Components/contacts-redux/Contacts';
import AddContact from './Components/contacts-redux/AddContact';
import Login from './Login';
import Register from './Components/Registration/Register';
import './styles/App.scss';
import store from './store';
import { Provider } from 'react-redux';
import "./styles/App.scss";
import EditContact from './Components/contacts-redux/EditContact';
import Protected from './Protected';
const App = () => {

  return (
    <>
      <Provider store={store}>
      
        <Switch>
          <Route exact path="/">
          <Protected Cmp ={Home}/>
            </Route> 
          <Route path="/Cards">
          <Protected Cmp ={Cards}/>
          </Route>
          <Route path="/Form">
          <Protected Cmp ={Form}/>
           </Route>
          <Route path="/Users1" >
          <Protected Cmp ={Users1} />
            </Route>
          <Route exact path="/users/add">
          <Protected Cmp ={AddUser} />
            </Route>
          <Route exact path="/users/edit/:id">
          <Protected Cmp ={EditUser}/>
            </Route>
          <Route exact path="/users/:id">
          <Protected Cmp ={User}/>
            </Route> 
          <Route path="/Search" >
          <Protected Cmp ={Search} />
            </Route>
          <Route path="/Todo">
          <Protected Cmp ={ToDo}/>
            </Route> 
          <Route path="/CreatNote"> 
          <Protected Cmp ={CreatNote} />
          </Route>
          <Route path="/Contact">
          <Protected Cmp ={Contacts} />
          </Route> 
          <Route path="/contacts/add">
          <Protected Cmp ={AddContact} />
         </Route>
          <Route path="/contacts/edit/:id">
          <Protected Cmp ={EditContact}/>
            </Route>
          <Route path='/login' component={Login}/>
          <Route path='/Register' component={Register}/>
          <Route>
          <Protected Cmp ={Error}/>
            </Route>
          {/* <Home />
          <About />
          <Contacts />
          <Cards />
          <Form />
          <Users1 />
          <ToDo />
          <CreatNote /> */}
        </Switch>
      </Provider>
    </>
  );

}
export default App;