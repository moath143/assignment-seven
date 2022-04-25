import React from "react";
import Button from "./../button";
import "./form.css";

const Form = () => {
  return (
    <div className="form">
          <div className="container center">
              <h1>get in touch</h1>
        <form action="">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
          <input type="email" placeholder="email" />
          <input type="phone" placeholder="phone" />
          <input type="text" className="address" placeholder="address" />
          <textarea
            placeholder="type your message"
            className="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button />
        </form>
      </div>
    </div>
  );
};

export default Form;
