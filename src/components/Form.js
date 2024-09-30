import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const serviceKey = process.env.REACT_APP_EMAILJS_SERVICE_KEY || '';
const templateKey = process.env.REACT_APP_EMAILJS_TEMPLATE_KEY || '';

export const Form = () => {
  const form = useRef();

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
        },
        (error) => {
          console.log('FAILED...', error.text);
          console.log(serviceKey, error.text);
          console.log(templateKey, error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" required />
      <label>Email</label>
      <input type="email" name="reply_to" required />
      <label>Message</label>
      <textarea name="message_html" required />
      <input type="submit" value="Send" />
    </form>
  );
};
