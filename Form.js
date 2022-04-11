import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { BrowserRouter as Router, } from 'react-router-dom'




const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <Router>
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
     
        )}

      </div>

    </>
    </Router>
  )
        }

export default Form;