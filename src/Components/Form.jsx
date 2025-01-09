import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "../index.css";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "tekessencemail";
    const templateId = "template_tekessence";
    const publicKey = "wAUmXwboIBfKn24p2";

    const templateParams = {
      from_name: name,
      from_number: number,
      from_email: email,
      from_subject: subject,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Email send successfully", response);
        setName("");
        setNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        alert("Error sending mail", error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="vertical--flex center">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form--input"
        />
        <input
          type="text"
          placeholder="contact number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="form--input"
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form--input"
        />
        <input
          type="text"
          placeholder="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="form--input"
        />
        <textarea
          name="message"
          id="subject"
          cols="25"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form--input"
          placeholder="your message"
        ></textarea>
        <label
          htmlFor="agree"
          className="form--input checkbox horizontal--flex"
        >
          <input type="checkbox" name="agree" id="agree" required />
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
