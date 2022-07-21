import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.contactos);
  return (
    <div className="container bg-secondary  bg-opacity-10  p-5">
      <div className="mb-3 d-md-flex justify-content-md-end">
        <Link to="/AddUser">
          <button className="btn btn-success">Add New contact</button>
        </Link>
      </div>
      <div>
        {store.contactos.map((item) => {
          return (
            <div className="list-group w-auto">
              <a
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
                    <p className="mb-0 opacity-75">
                      {item.email}
                    </p>
                  </div>
                  <Link to="/EditUser">
                    <i className="fa-regular fa-pencil">Edit</i>
                  </Link>
                  <Link to="/AddUser">
                    <button className="btn btn-success">Add New contact</button>
                  </Link>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
