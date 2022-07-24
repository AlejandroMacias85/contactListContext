import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Modal } from "../component/Modal";
// import { Modal } from "../component/Modal";
import PropTypes from 'prop-types'; 
import { ContactList } from "./ContactList";

export const Home = (props) => {
  const { store, actions } = useContext(Context);
  return (
  
      <div>
        {store.contactos.map((item, index) => {
        return(
          <ContactList 
          key={index}
          name={item.full_name}
          address={item.address}
          phone={item.phone}
          email={item.email}
          id={item.id}
          />
        )}
        )}
        </div>
          
  );
};
