"use client";
import {useState} from 'react';
import './button.css'

'use Client';
function Sbutton() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (id) => {
      setActiveTab(id);
    };
  return (
    <div>
        <div  class="tab active-tab">Website</div>
        <div  class="tab">Applications</div>
        <div class="tab">Editor</div>
    </div>
  )
}

export default Sbutton