import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditUser = () => {
  const { actions, store } = useContext(Context);
  const [values, setValues] = useState({
    full_name: "",
    email: "",
    address: "",
    phone: "",
    agenda_slug: "Luffy85"
  });
  let { id } = useParams();
  let myValues =
    store.contactos && store.contactos.filter((values) => values.id === id)[0];
  useEffect(() => {
    if (myValues) {
      setValues(myValues);
    }
  }, [myValues]);
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // };

  return (
    <div className="container bg-secondary  bg-opacity-10  p-5">
      <h1>Edit contact </h1>
      <div className="Container mt-5 p-1 align-items-center">
        <form>
          <div className="mb-3">
            <h6>full_name</h6>
            <input
              className="form-control"
              onChange={(e) => {
                setValues({...values, full_name:e.target.value})
              }}
              value={values.full_name}
              name="full_name"
              label="full_name"
            />
            <h6>email</h6>
            <input
              className="form-control"
              onChange={(e) => {
                setValues({...values, email:e.target.value})
              }}
              value={values.email}
              name="email"
              label="email"
            />

            <h6>address</h6>
            <input
              className="form-control"
              onChange={(e) => {
                setValues({...values, address:e.target.value})
              }}
              value={values.address}
              name="address"
              label="address"
            />
            <h6>phone </h6>
            <input
              className="form-control"
              onChange={(e) => {
                setValues({...values, phone:e.target.value})
              }}
              value={values.phone}
              name="phone"
              label="phone"
            />
          </div>
          <div className="d-grid gap-2">
            <Link to="/">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={() => {
                  actions.editarContact(values);
                }}
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
