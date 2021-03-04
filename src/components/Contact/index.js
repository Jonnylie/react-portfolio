import React from "react";
import "./form.css";

const Contact = () => {
  return (
    <>
      <div id={"contact"} className="form-container">
        <div className="form-content">
          <form className="form" name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <h1> Get in Touch</h1>
            <p>Feel free to contact me</p>
            <div className="form-inputs">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter your name"
                name="name"
                id="name"
                required
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                placeholder="Enter your email"
                name="email"
                id="email"
                required
              />
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter your subject"
                name="subject"
                id="subject"
                required
              />
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-input-message"
                type="text"
                placeholder="Enter your message"
                name="message"
                id="message"
                required
              />
              <button className="form-input-btn" type="submit">
                Send message
              </button>
            </div>
          </form>
          ,
        </div>
      </div>
    </>
  );
};

export default Contact;
