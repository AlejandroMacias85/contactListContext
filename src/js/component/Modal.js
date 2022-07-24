import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Modal = ({ show, close, props }) => {
  const { actions, store } = useContext(Context);

  return (
    <>
      {show ? (
        <div className="modalContainer">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Are you sure?</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => close()}
                ></button>
              </div>
              <div className="modal-body">
                {/* <p>{props.name}</p> */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => close()}
                >
                  Close
                </button>
                
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => actions.borrarContact(props.id)}
                >

                  Ohh yes!
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
