import React, { useState } from 'react';

import { validateEmail } from '../../utils/helper';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <div className='flex-wrap justify-content-center'>
      <div className='container'>
        <div className='row'>
          <h1 className='text-center p-4'>Contact me</h1><hr></hr>
            <form id="contact-form" onSubmit={handleSubmit} className='d-flex flex-column justify-content-center'>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="Name" defaultValue={name} onBlur={handleChange} className='col-12'/>
              </div>
              <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange} className='col-12'/>
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea name="Message" rows="5" defaultValue={message} onBlur={handleChange} className='col-12'/>
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <button type="submit" className='btn btn-dark'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
