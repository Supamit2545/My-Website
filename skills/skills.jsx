"use client";
import "./skills.css"
import Website from './Website'
import Applications from './Applications'
import ToggleTopic from './Popup'
import Script from 'next/script'
import { useState } from "react"
import Editor from "./Editor";
import MyFev from "./MyFev";

function Skills() {
  const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (id) => {
      setActiveTab(id);
    };
  const [activeContent, setActiveContent] = useState(0);
    const ChangeContent = (id) =>{
      setActiveContent(id);
    };
  return (
    <div class='Skcontainer' id="skills">
        <h1 className="skh1">What skills I have?</h1>
        <div>
            <div class="skulbutton">
                <div  className={`tab ${activeTab === 0 ? "active-tab" : ""}`}onClick={() => handleTabClick(0)}>Website</div>
                <div  className={`tab ${activeTab === 1 ? "active-tab" : ""}`}onClick={() => handleTabClick(1)}>Applications</div>
                <div className={`tab ${activeTab === 2 ? "active-tab" : ""}`}onClick={() => handleTabClick(2)}>Editor</div>
                <div className={`tab ${activeTab === 3 ? "active-tab" : ""}`}onClick={() => handleTabClick(3)}>My fav</div>
            </div>
            <div className='skcons'>
              <div className={`content ${activeTab === 0 ? "active-content" : ""}`}>
                <Website/>
              </div>
              <div className={`content ${activeTab === 1 ? "active-content" : ""}`}>
                <Applications/>
              </div>
              <div className={`content ${activeTab === 2 ? "active-content" : ""}`}>
                <Editor/>
              </div>
              <div className={`content ${activeTab === 3 ? "active-content" : ""}`}>
                <MyFev/>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Skills