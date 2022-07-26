import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useHistory } from "react-router-dom";
import { Modal } from "../component/Modal";
// import { Modal } from "../component/Modal";
import PropTypes from 'prop-types';
export const ContactList = (props) => {
  const { store, actions } = useContext(Context);
 console.log(store.contactos)
  const [openModal, setOpenModal] = useState(false);
  const Toggle = () => setOpenModal(!openModal);
 let history = useHistory()
  function handleDelete(i) {
    console.log("handleDelete contact", i);
    actions.borrarContact(i);
  }
  return (
    <div className="container bg-secondary  bg-opacity-10  p-5">
      <div className="mb-3 d-md-flex justify-content-md-end">
        <Link to="/AddUser">
          <button className="btn btn-success">Add New contact</button>
        </Link>
      </div>
      <Modal  show={openModal} close={Toggle} />
      <div>
        {store.contactos.map((item, index) => {
          return (
            <div className="list-group">
              <li
                key={index}
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  src="https://github.com/twbs.png"
                  alt="twbs"
                  width="32"
                  height="32"
                  className="rounded-circle flex-shrink-0"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">{item.full_name}</h6>
                    <p className="mb-0 opacity-75">{item.address}</p>
                    <p className="mb-0 opacity-75">{item.phone}</p>
                    <p className="mb-0 opacity-75">{item.email}</p>
                   
                  </div>
                  <div className="d-flex gap-2 justify-content-between">
                    
                      <button
                        className="btn btn-primary"
                        onClick={() => history.push(`/AddUser/${item.id}`)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
                        </svg>
                        Edit
                      </button>
                  
                    <div>
                      <button onClick={() => handleDelete(item.id)}>
                          Delete
                      </button>
                    </div>
                    <div>
                    <button
                      className="btn btn-success"
                      onClick={() => Toggle()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        <path
                          fillRule="evenodd"
                          d="M12.146 5.146a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </button>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};