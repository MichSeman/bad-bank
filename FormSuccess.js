import React from 'react'
import img6 from '../assets/img6.jpg'
import './Form.css'
import {  useHistory } from 'react-router-dom'





const FormSuccess = (props) => {
// const history = useHistory();

// const handleHistory = () => {
//   history.push("/createAccount");
// };

  return (
    <div className='form-content-right'>
        <h1 className='form-success'>
           <span className='font-link'>
              <h2> Yay! You have created an account!</h2>
            </span>
        </h1>
        <img className='form-img-6' src={img6} alt='success!' />
      {/* Button */}
      <br/>
      {/* <button onclick={handleHistory}>Create Another Account</button>  */}

     </div>

  )
  }

export default FormSuccess