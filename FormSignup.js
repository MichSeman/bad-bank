import React from 'react'
import validate from './validateInfo'
import useForm from './useForm'
import { Card, Button } from 'react-bootstrap';
import img2 from '../assets/img2.jpg.pdf'


const FormSignup = ({submitForm}) => {
  const {handleChange, values, handleSubmit, errors, reset} = useForm(
    submitForm,
    validate,
  );


  return (

    <header>
      <br/>
      <br/>
    <Card border="info" style={{ width: '18rem' }}>
    <Card.Title>Create Account</Card.Title>
    <Card.Img variant="top" 
          src={img2}
          className='img-thumbnail'
          alt='...'
          style={{ maxWidth: '24rem' }} />
      <Card.Body>
     

    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Create your account by filling out the information below.</h4>
{/* name */}
        <div className='form-inputs'>
          <label htmlFor='username' 
          className='form-label'> Enter Username
          </label>
          <input
              id='username'
              type='type' 
              name='username'
              className='form-inpout'
              placeholder='Enter your username'
              value={values.username}
              onChange={handleChange}
            />  
            {errors.username && <p>{errors.username}</p>}
        </div>
        <br/>
{/* email */}
        <div className='form-inputs'>
          <label htmlFor='email' 
          className='form-label'> Enter Email
          </label>
          <input
              id='email'
              type='email' 
              name='email'
              className='form-inpout'
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}
            /> 
            {errors.email && <p>{errors.email}</p>}
        </div> 
        <br/>
 {/* password  */}

         <div className='form-inputs'>
          <label htmlFor='password' 
          className='form-label'> Enter Password
          </label>
          <input
              id='password'
              type='password' 
              name='password'
              className='form-inpout'
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
        </div>
        <br/>
{/* confirm password */}
        <div className='form-inputs'>
          <label htmlFor='password2' 
          className='form-label'> Confirm Password
          </label>
          <input
              id='password2'
              type='password' 
              name='password2'
              className='form-inpout'
              placeholder='Enter your password'
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <br/>
        <Button variant='info' className='form-input-btn' type='submit'> 
        Sign Up
        </Button>
        <br/>
        <br/>
        <Button type='button' variant='info' onClick={() => {
          reset({
            name: '',
            email: '',
            password: '',
            password2: '',
          });
        }}>
          Add Another Account
        </Button>
      </form>
      
    </div>
      </Card.Body>
    </Card>
    </header>
  );
}

export default FormSignup;