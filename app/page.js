import Image from "next/image";
import './page.css'
import React from "react";
//Banner
import Banner from "./Banner/banner";
import Introduce from "@/Introduce/Introduce";
import Skills from "@/skills/skills";
import Topbar from "./navbar/topbar";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Sbutton from "@/skills/button";
import Copyright from "./copyright";

export default function Home() {
  return (
    <div class=''>
        <Banner/>
        <Topbar/>
      <div className="md:block md:2 lg:w-full">
        <Introduce/>
      </div>
      <div>
        <AboutMe/>
      </div>
      <div>
        <Skills/>
      </div>
      <div className="md:block md:2 lg:w-full my-auto">
      </div>
      <div>
        <Contact/>
      </div>
      <div>
        <Copyright/>
      </div>
    </div>
  );
}

