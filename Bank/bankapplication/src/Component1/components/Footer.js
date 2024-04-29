import React, { useState } from 'react'
import '../styles/footer.scss';
import bankLogo from '../images/logo3.png'
import axios from 'axios';

const Footer = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  const [message, setMassage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/massage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message
        }),
      });
      
      if (response.ok) {
        console.log('Form data submitted successfully');
      } else {
        throw new Error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  }
  
  return (
    <div className="footer_cls">

      <div className="footer_cntr">


        <div className="handles">
          <img className='main-logo' src={bankLogo} alt='logo' />

          <div className="off-web">
            Address : 123, ABC Road, Mumbai - 400001
          </div>
        </div>

        <div className="contacts">
          <h2>Helplines</h2>
          <p>Contact No.:+91212121212</p>
          <p>Email id:help@sbibank.com.in</p>

        </div>

        <div className="message">
          <h2>Message us</h2>
          <form className='forms' onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" placeholder='Name' required value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" name="email" id="email" placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)} />
            {/* <input type="text" name="message" id="message"  /> */}
            <textarea rows="4" cols="10" name="comment" form="usrform" placeholder='Message' required value={message} onChange={(e)=>setMassage(e.target.value)}> 
            </textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>

        {/* <h4></h4> */}
      </div>
    </div>
  )
}

export default Footer