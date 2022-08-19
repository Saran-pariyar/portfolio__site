import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      {/* <form action="https://formsubmit.co/el/nejoce" method="POST"> */}
      <form
        action="https://formsubmit.co/adbdb4a244c22f51b876dae686e54c40"
        method="POST"
        className="form"
      >
        <p className="contact-title">Contact Me :</p>
        <span>
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            className="name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            className="email"
            required
          />
        </span>
        <textarea
          className="message"
          name="message"
          cols="30"
          rows="10"
          placeholder="Your message*"
        ></textarea>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
