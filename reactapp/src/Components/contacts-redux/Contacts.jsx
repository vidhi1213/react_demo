import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Contact from './Contact';
import Menu from '../navigation/Menu';
import {
  selectAllContact,
  clearAllContact,
  deleteAllContact,
} from "../../actions/contactAction";

const Contacts = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector((state) => state.contact.contacts);
  const selctedContcats = useSelector((state) => state.contact.selectedContacts);

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, [selectAll,contacts,dispatch]);

  return (
    <>
    <Menu/>
    <div className="container mb-2">   <Link to="/contacts/add" className="btn btn-dark">Add User</Link></div>
    <div className="container">
      <div className="row pt-5">
      <div className="col-md-12">
      <div>
      {selctedContcats.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(deleteAllContact())}
        >
          delete all
        </button>
      ) : null}
      <table className="table shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Contacts;