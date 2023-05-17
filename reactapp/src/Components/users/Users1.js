import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Menu from '../navigation/Menu';
const Users1 = () => {
  const [users, setUser] = useState([]);
  const[searchTerm,setSearchTerm]=useState('')
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  }
  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
  return (
    <>
    <Menu/>
   
      <div className="container "> <Link className="btn btn btn-dark mr-2" to="/users/add">Add User</Link>        <input type="text" placeholder="search.." onChange={(e)=>{ setSearchTerm(e.target.value)}} />  
</div>
            
      <div className="container"> 
        <div className="row">

          <div className="col-12">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.filter((user)=>{
                    if(searchTerm === ""){
                      return user
                    }
                    else if(user.name.toLowerCase().includes(searchTerm.toLowerCase())){
                      return user
                    }
                  }).map((user, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>
                          View
                  </Link>
                        <Link
                          class="btn btn-outline-primary mr-2"
                          to={`/users/edit/${user.id}`}
                        >
                          Edit
                  </Link>
                        <Link
                          className="btn btn-danger"
                          onClick={() => deleteUser(user.id)}
                        >
                          Delete
                  </Link>
                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  );
}
export default Users1;