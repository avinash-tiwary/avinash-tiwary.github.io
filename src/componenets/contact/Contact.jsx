import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q97thgi",
        "template_xirkwgx",
        form.current,
        "c7Q1s0QBNCxhXFYOD"
      )
      window.alert("sometext")
      e.target.reset()
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            {/* <h5>avinashkumar28799@gmail.com</h5> */}
            <a
              href="mailto: avinashkumar28799@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send A Message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            {/* <h5>+91-9026409517</h5> */}
            <a
              href="https://api.whatsapp.com/send?phone=9026409517"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Me
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
