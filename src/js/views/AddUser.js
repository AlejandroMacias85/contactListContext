import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const initialValues = {
  full_name: "",
  email: "",

  address: "",
  phone: "",
};

export const AddUser = () => {
  const { actions, store } = useContext(Context);
  const [values, setValues] = useState(initialValues);
console.log(store)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="container bg-secondary  bg-opacity-10  p-5">
      <h1>Add new contact </h1>
      <div className="Container mt-5 p-1 align-items-center">
        <form>
          <div className="mb-3">
            <h6>full_name</h6>
            <input
              className="form-control"
              value={values.full_name}
              onChange={handleInputChange}
              name="full_name"
              label="full_name"
            />
            <h6>email</h6>
            <input
              className="form-control"
              value={values.email}
              onChange={handleInputChange}
              name="email"
              label="email"
            />

            <h6>address</h6>
            <input
              className="form-control"
              value={values.address}
              onChange={handleInputChange}
              name="address"
              label="address"
            />
            <h6>phone </h6>
            <input
              className="form-control"
              value={values.phone}
              onChange={handleInputChange}
              name="phone"
              label="phone"
            />
          </div>
          <div className="d-grid">
            <Link to="/">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={() => actions.createContact(values)}
              >
                {" "}
                Save{" "}
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
