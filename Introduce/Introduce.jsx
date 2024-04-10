import React from 'react'
import Image from 'next/image';
import { ButtonHTMLAttributes } from 'react';
import "./introduce.css";

function Introduce() {
  return (
    <div class="introduce" id="introduce">
      <div className='incontainer'>
        <img className="img" src="https://i.pinimg.com/originals/06/60/ef/0660efe82fa3da42ed56eef013171835.gif" alt="" width={0} height={0}/>
        <div className=''>
          <div className="inttext ">
            <div className='text-6xl text-white text-left'> Hello There</div>
            <div className='highlight'>I'M : <span></span></div>
          </div>
          <div class='intbutton'>
              <a href="aboutme" spy={true} smooth={true} offset={50} duration={500}>Get Started </a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Introduce