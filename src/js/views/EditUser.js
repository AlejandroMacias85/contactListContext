import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const initialValues = {
  full_name: "",
  email: "",
  agenda_slug: "",
  address: "",
  phone: "",
};

export const EditUser = () => {
  const { actions, store } = useContext(Context);
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const addContact = () => {
    actions.add(values);
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
            <h6>agenda_slug</h6>
            <input
              className="form-control"
              value={values.agenda_slug}
              onChange={handleInputChange}
              name="agenda_slug"
              label="agenda_slug"
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
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit" onClick={() => addContact()}> Save </button>
          </div>
        </form>
      </div>
      {/* <Link to={"/" + index}>
                <span>Link to: {item.title}</span>
              </Link> */}
    </div>
  );
};
