'use client'

import React,{ useState, useEffect } from 'react'
import './topbar.css'
import { Link } from 'react-scroll';
function Topbar() {

  // useEffect(() => {
    
  //   // Registering the 'begin' event and logging it to the console when triggered.
  //   Events.scrollEvent.register('begin', (to, element) => {
  //     console.log('begin', to, element);
  //   });

  //   // Registering the 'end' event and logging it to the console when triggered.
  //   Events.scrollEvent.register('end', (to, element) => {
  //     console.log('end', to, element);
  //   });

  //   // Updating scrollSpy when the component mounts.
  //   scrollSpy.update();

  //   // Returning a cleanup function to remove the registered events when the component unmounts.
  //   return () => {
  //     Events.scrollEvent.remove('begin');
  //     Events.scrollEvent.remove('end');
  //   };
  // }, []);

  // // Defining functions to perform different types of scrolling.
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  // const scrollToBottom = () => {
  //   scroll.scrollToBottom();
  // };

  // const scrollTo = () => {
  //   scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  // };

  // const scrollMore = () => {
  //   scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  // };

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) // !false = true
  }

  return (
    <nav> 
      <div className="flex justify-between item-center mx-6">
        <a href="#" className=' py-2 my-2 text-white text-2xl font-semibold'>Supamit</a>
        <div className='md:hidden'>
          <button id='menu-toggle' className='text-white p-5' onClick={toggleMenu}>
            <svg 
              fill='none' 
              stroke='currentColor' 
              stroke-linecap="round" 
              stroke-linejoin='round' 
              stroke-width="2" 
              viewBox='0 0 24 24' 
              className='w-6 h-6'
              >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className='hidden md:flex space-x-10 my-2 py-2'>
          <li><Link activeClass="active" to="introduce" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive} className='text-white cursor-pointer'>Intorduce</Link></li>
          <li><Link activeClass="active" to="aboutme" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive} className='text-white cursor-pointer'>Aboutme</Link></li>
          <li><Link activeClass="active" to="#" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive} className='text-white cursor-pointer' >Certificate</Link></li>
          <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive} className='text-white cursor-pointer'>Contect</Link></li>
        </ul>
      </div>
      {isMenuOpen ? (
        <ul className='flex-col md:hidden space-y-6'>
          <li><Link activeClass="active" to="introduce" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive} className='text-white cursor-pointer'>Intorduce</Link></li>
          <li><Link activeClass="active" to="aboutme" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive} className='text-white cursor-pointer'>Aboutme</Link></li>
          <li><Link activeClass="active" to="#" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive} className='text-white cursor-pointer'>Certificate</Link></li>
          <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive} className='text-white cursor-pointer'>Contect</Link></li>
        </ul>
      ) : null }
    </nav>
  )
}

export default Topbar