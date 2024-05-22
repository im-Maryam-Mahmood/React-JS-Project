import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import White_arrow from '../../assets/white-arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "37eb5990-42a0-4bfa-80e7-5117dc481f65");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='contact'>
        <div className='contact-col'>
            <h3>Send us Message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to eact out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our unversity commuuity.</p>
            <ul>
              <li><img src={mail_icon} alt="" /> Contact test@gmail.com</li>
              <li> <img src={phone_icon} alt="" /> +1 123-456-789</li>
              <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br />Ma 02139, United States</li>
            </ul>
        </div>
        <div className='contact-col input'>
          <form onSubmit={onSubmit}>
            <label > Your Name</label><br />
            <input  type="text" name='name' placeholder='Enter your name' required/><br />
            <label >Phone Number</label><br />
            <input type="text" name='name' placeholder='Enter your Phone number' required/><br />
            <label >Write Your message here</label><br />
            <textarea  name="text" rows='6' placeholder='Enter your message' required/><br /><br />
            <button type='submit' className='btn dark-btn input'>Submit now&nbsp;&nbsp;<img src={White_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
      </div>
  )
}

export default Contact
