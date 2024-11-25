import React from "react";

import "../index.css";
import "./Form.css";

function Form() {
  return (
    <>
      <form action="" className="vertical--flex center">
        <input
          type="text"
          placeholder="name"
          required
          className="form--input"
        />
        <input
          type="text"
          placeholder="contact number"
          className="form--input"
        />
        <input
          type="text"
          placeholder="email"
          required
          className="form--input"
        />
        <input type="text" placeholder="subject" className="form--input" />
        <textarea
          name="message"
          id="subject"
          cols="25"
          rows="10"
          className="form--input"
          placeholder="your message"
        ></textarea>
        <label
          htmlFor="agree"
          className="form--input checkbox horizontal--flex"
        >
          <input type="checkbox" name="agree" id="agree" />
          <span>
            ( by providing your phone number you agree to receive text messages
            from our company,message & data rates may apply,message frequency
            varies.)
          </span>
        </label>

        <button type="submit" className="form--input button">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
