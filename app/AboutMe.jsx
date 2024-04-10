"use client";
import React from 'react'
import './aboutme.css'
import '../skills/skills'
import ToggleTopic from '@/skills/Popup'
import Skills from '../skills/skills'
import axios from 'axios';

function AboutMe() {
  function downloadResume(){
    const fileId = "1GFHLQ0zH-Kj6DY135EdxQJI_vVwne0yc"; // แทนที่ด้วย ID ไฟล์ของคุณ
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    const a = document.createElement("a");
      a.href = url;
      a.style.display = "none";
      document.body.appendChild(a);

      a.click();
      a.remove();

  }
  return (
    <div className='aboutme'id='aboutme'>
        <div className='aboutmecon'>
            <img className='userimg' src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-1/295108002_1095292327772874_3363407531902162818_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGT8rkug4Uq-zw5-MV9NNWoWtB2xN2BU31a0HbE3YFTfTVtvGqfz7uC1c_UtTdlylgZ6YyJg8WnCqUvT9a_Wnkk&_nc_ohc=anoXvR1A32sAX_R4FIm&_nc_ht=scontent.fbkk22-6.fna&oh=00_AfAd5ekDOvG8DXtiFl8zu5oDt-RBr0Ye5YGOvp6gvSFv3Q&oe=65ED9698  " alt="" width={15} height={15} />
            <div className='textam'>Supamit Phappusa
              <div className='text-xl text-start'>เริ่มต้นเรียนเขียนcodeเพราะชอบเกี๋ยวกับComputerตั้งแต่เด็กๆ</div>
              <div className='text-xl text-start'>เข้าเรียนสาขาInfometion Technologyตอนปวช. แล้วต่อสาขา computer engineer</div>
              <div className='text-xl text-start'>ในระดับมหาลัย2ปี ตอนนี้กำลังศึกษาเอง ภาษา : Html , Javascript ,React,React-Native,NodeJS, ชอบที่สุด คือ Python เพราะประยุกใช้ได้หลายอย่าง เช่น เขียนเว็บ โปรแกรมทั่วไป รวมไปถึงเขียน AI     </div>
            </div>
            <div className='text-3xl text-center border-2 border-black'>ประวัติการศึกษา
              <ul className='text-2xl text-start font-bold'><li className='underline'>โรงเรียน</li>
                <li className='text-xl ml-5'>มัธยม : โรงเรียนบางกะปิ</li>
                <li className='text-xl ml-5 pr--6'>ปวช. : เทคโนโลยีวิบูลบริหารธุรกิจรามอินทรา(Vbac)</li>
                <li className='text-xl ml-5'> ป.ตรี : มหาลัยรัตนบัณฑิตถึงชั้นปีที่ 3 </li>
                <li className='text-xl ml-5 text-center my-5'>ปัจจุบันไม่ได้ศีกษาต่อ</li>
              </ul>
            </div>
            <div className='text-3xl text-center border-2 border-black'>ประวัติการทำงาน
              <ul>
                <li className='text-2xl text-left underline font-bold'>ร้านอาหาร</li>
                <li className='text-xl'>ShabuShi อายุงาน : 1ปี</li>
                <li className='text-xl'>Pizza Hut อายุงาน : 2ปี</li>
                <li className='text-xl'>ธุรกิจร้านอาหาร(ครอบครัว)</li>
                <li className='text-2xl text-left underline font-bold'>Programing</li>
                <li className='text-xl'>ไม่มี</li>

              </ul>
            </div>
        </div>
        <div className='download'>
          <div className='downloader'><button onClick={() => downloadResume()}>Download CV</button></div>
          <div className='downloader'><button onClick={() => downloadResume()} >Download Resume</button></div>
        </div>
    </div>
  )
}

export default AboutMe