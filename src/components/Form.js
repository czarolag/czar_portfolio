import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const serviceKey = process.env.REACT_APP_EMAILJS_SERVICE_KEY || '';
const templateKey = process.env.REACT_APP_EMAILJS_TEMPLATE_KEY || '';

export const Form = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false); // State to track if the email is sent successfully
  const [errorMessage, setErrorMessage] = useState(''); // State to track errors

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceKey, templateKey, form.current, {
        publicKey: '2uAdHQ8TiDWWvIGqK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); // Reset form after successful submission
          setEmailSent(true); // Set emailSent to true on success
          setErrorMessage(''); // Clear any error message
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMessage('Failed to send email. Please try again.'); // Set error message
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <br></br>
        <input type="text" name="from_name" required />
        <label>Email</label>
        <input type="email" name="reply_to" required />
        <label>Message</label>
        <textarea name="message_html" required maxLength="3000"/>
        <input type="submit" value="Send" />
      </form>

      {emailSent && <p className="success">Email sent successfully!</p>}
      {errorMessage && <p className="danger">{errorMessage}</p>}
    </div>
  );
};
