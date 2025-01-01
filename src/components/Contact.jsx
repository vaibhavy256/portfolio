import React, { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service
    emailjs
      .sendForm(
        "service_hila8og",
        "template_0p50dde",
        form.current,
        "xS9lzk1qwThDx6cTu"
      )
      .then(
        (result) => {
            console.log(result.text);
            toast.success("Email sent successfully! 🎉");
            form.current.reset(); // Reset the form after success
          },
        (error) => {
            console.error(error.text);
            toast.error("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="contact">
    <h1 className="text-center text-5xl underline font-bold text-gray-800">
        Contact
    </h1>
      <form className="justify-center " ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      
    </div>
  );
};
