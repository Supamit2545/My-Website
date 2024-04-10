import React from 'react'
import './banner.css'

function Banner() {
  return (
    <div className='bncontainer'>
        <img className='banner' src="https://media.tenor.com/oGqRRCaHoKoAAAAC/kiminonawa-view.gif" alt="" width={100} height={50} />
        <div className=''>
            <p className='text'>WELCOME TO MY PORTFOLIO</p>
        </div>
    </div>
  )
}

export default Banner