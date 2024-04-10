"use client";
import React,{useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from "react-icons/fa6";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rec7tvy', 'template_66sew9w', form.current, {
        publicKey: '9ty-8UI3Nm6e7XI4E',
      })
      .then(
        () => {
          alert('Send SUCCESS!');
        },
        (error) => {
          alert('Sorry Send FAILED...', error.text);
        },
      );
  };
  return (
    <div className='concontainer' id='contact'>
      <div className='Infomaions'>
        <div className='text-5xl font-bold underline'>My Infomations</div>
        <div className='text-2xl my-7'>ที่อยู่ : 7 107 ซอย แฟลตคลองจั่น แขวงคลองจั่น เขตบางกะปิ กรุงเทพมหานคร 10240 </div>
        <div className='text-5xl font-bold underline'>ช่องทางการติดต่อ Online</div>
        <div className='onlineicon'>
          <a href="https://www.facebook.com/profile.php?id=100018763508340"><FaFacebook className='facebook'/></a>
          <a href="#"><FaInstagram className='Instagram'/></a>
        </div>
      </div>
      <form className='Form' ref={form} onSubmit={sendEmail}>
        <div className='my-4 text-4xl text-center font-bold underline'>Contact ME</div>
          <input type="email" name="email" id='email' placeholder='Enter Your Email' class="contact-inputs" required/>
          <input type="subject" name="subject" id='subject' placeholder='Enter Your Subject' class="contact-inputs" required/>
          <textarea type="message" name="message" id='message' cols={30} rows={10} placeholder='Enter Your Message' class="textarea" required/>
          <button className='submit' value="Send" type='submit'>Send Message <FaEnvelopeCircleCheck className='sender'/></button>
      </form>
    </div>
  )
}


export default Contact