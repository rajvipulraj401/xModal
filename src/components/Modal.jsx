import React from "react";
import Button from "./Button";

const Modal = ({ phoneNumber, handlePhoneNumber, onFormSubmit }) => {
  return (
    <>
      {/* step 1: - create the form  */}
      <div className="modal-content">
        <form className="form-container" onSubmit={(e) => onFormSubmit(e)}>
          <h3>Fill Details</h3>

          <label>Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder=""
            required
          />
          <label>Email Address:</label>
          <input type="email" name="email" id="email" placeholder="" required />
          <label>Phone Number:</label>
          <input
            type="number"
            name=""
            id="phone"
            placeholder=""
            required
            value={phoneNumber}
            onChange={(e) => handlePhoneNumber(e)}
          />
          <label>Date of Birth:</label>
          <input type="date" name="dob" id="dob" placeholder="" required />

          <Button className="submit-button" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Modal;
